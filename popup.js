document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('editor');
  const saveNoteBtn = document.getElementById('save-note');
  const alignLeftBtn = document.getElementById('align-left');
  const alignCenterBtn = document.getElementById('align-center');
  const alignRightBtn = document.getElementById('align-right');
  const themeToggle = document.getElementById('theme-toggle');
  const strikethroughBtn = document.getElementById('strikethrough');
  const underlineBtn = document.getElementById('underline');
  const dateElement = document.querySelector('.date');
  const titleElement = document.querySelector('.title');

  // Set current date
  dateElement.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // Load saved theme preference
  chrome.storage.sync.get(['darkMode'], function(result) {
    if (result.darkMode) {
      document.body.classList.add('dark-mode');
      const icon = themeToggle.querySelector('i');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  });

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
    
    // Save theme preference
    chrome.storage.sync.set({darkMode: isDarkMode});
  });

  saveNoteBtn.addEventListener('click', function() {
    const titleText = titleElement.innerText.trim() || 'Untitled';
    const sanitizedTitle = titleText.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const noteText = editor.innerText; // Get plain text content
    const fullContent = `${titleText}\n\n${noteText}`;

    if (noteText.trim() !== '') {
      const blob = new Blob([fullContent], {type: 'text/plain'});
      const url = URL.createObjectURL(blob);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `${sanitizedTitle}_${timestamp}.txt`; // Save as .txt

      chrome.downloads.download({
        url: url,
        filename: filename,
        saveAs: true
      }, function(downloadId) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else {
          editor.innerHTML = ''; // Clear the editor
          titleElement.innerHTML = ''; // Clear the title
        }
      });
    }
  });

  alignLeftBtn.addEventListener('click', function() {
    document.execCommand('justifyLeft', false, null);
  });

  alignCenterBtn.addEventListener('click', function() {
    document.execCommand('justifyCenter', false, null);
  });

  alignRightBtn.addEventListener('click', function() {
    document.execCommand('justifyRight', false, null);
  });

  strikethroughBtn.addEventListener('click', function() {
    document.execCommand('strikeThrough', false, null);
  });

  underlineBtn.addEventListener('click', function() {
    document.execCommand('underline', false, null);
  });
});
