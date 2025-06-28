# 📝 Penna - Chrome Extension

> A sleek, minimalist note-taking Chrome extension that puts your thoughts at your fingertips.

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green)](https://developer.chrome.com/docs/extensions/mv3/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **🎨 Rich Text Editing** - Format your notes with text alignment, strikethrough, and underline
- **🌙 Dark Mode Toggle** - Seamlessly switch between light and dark themes
- **💾 One-Click Save** - Export your notes as `.txt` files with automatic timestamping
- **📱 Responsive Design** - Clean, modern interface that fits perfectly in your browser
- **⚡ Instant Access** - Quick popup interface accessible from any webpage
- **🕒 Auto Date Stamping** - Automatically adds creation date to your notes
- **✏️ Editable Titles** - Customize note titles with inline editing

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/note-taker-extension.git
   cd note-taker-extension
   ```

2. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked" and select the project folder
   - The Note Taker icon will appear in your extensions toolbar

3. **Start taking notes!**
   - Click the extension icon to open the note-taking interface
   - Start typing your thoughts immediately

## 🎯 Usage

### Basic Note Taking
1. Click the extension icon in your Chrome toolbar
2. Edit the title by clicking on "Title" at the top
3. Start typing in the content area
4. Use the formatting toolbar for text styling

### Formatting Options
- **Align Left/Center/Right** - Control text alignment
- **Strikethrough** - Cross out completed tasks or outdated information
- **Underline** - Emphasize important points

### Saving Notes
- Click the save icon (💾) in the toolbar
- Choose your save location in the download dialog
- Files are automatically named with your title and timestamp
- The editor clears after successful save

### Theme Switching
- Toggle between light and dark modes using the moon/sun icon
- Theme preference is applied instantly

## 🛠️ Technical Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Icons**: Font Awesome 6.5.2
- **Permissions**: Chrome Storage API, Downloads API
- **Manifest**: Version 3 (latest Chrome extension standard)

## 📁 Project Structure

```
note-taker-extension/
├── manifest.json          # Extension configuration
├── popup.html            # Main interface markup
├── popup.js              # Core functionality
├── style.css             # Styling and themes
└── README.md             # Documentation
```

## 🔧 Development

### Prerequisites
- Google Chrome (latest version)
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development
1. Make your changes to the source files
2. Reload the extension in `chrome://extensions/`
3. Test functionality in the popup interface

### Code Style
- ES6+ JavaScript features
- Semantic HTML structure
- CSS Grid and Flexbox for layouts
- Mobile-first responsive design principles

## 🌟 Key Features Breakdown

### Rich Content Editor
```javascript
// Content-editable div with formatting support
<div id="editor" contenteditable="true" style="border: 1px solid #ddd; padding: 10px; min-height: 300px;"></div>
```

### File Export System
- Automatic filename sanitization
- ISO timestamp integration
- Plain text format for universal compatibility

### Theme Management
- CSS custom properties for consistent theming
- Instant theme switching without page reload
- System font stack for native OS integration

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style and conventions
- Test your changes thoroughly
- Update documentation as needed
- Ensure compatibility with Manifest V3

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
