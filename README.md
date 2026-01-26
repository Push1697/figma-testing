# Figma Testing - React Login Component

A modern React login component built from a Figma design, powered by Vite for fast development and builds.

## Features

✨ **Modern React 19** - Latest React features and improvements
⚡ **Vite** - Next generation frontend tooling with lightning-fast HMR (Hot Module Replacement)
🎨 **Beautiful UI** - Professional gradient design with smooth animations
📱 **Responsive** - Works perfectly on mobile, tablet, and desktop
🎯 **Form Handling** - Complete form state management with validation
👁️ **Password Toggle** - Show/hide password functionality
🚀 **Production Ready** - Optimized build configuration

## Project Structure

```
figma-testing/
├── src/
│   ├── components/
│   │   ├── LoginContainer.jsx      # Main login component
│   │   └── LoginContainer.css      # Component styles
│   ├── App.jsx                     # Root component
│   ├── App.css                     # App styles
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## Getting Started

### Prerequisites
- Node.js 14.0 or higher
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will automatically open at `http://localhost:3000` in your browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Component API

### LoginContainer

The main login form component.

**Props:** None (self-contained component)

**State:**
- `formData` - Object containing: `customerId`, `name`, `email`, `password`
- `showPassword` - Boolean for password visibility toggle

**Handlers:**
- `handleInputChange()` - Updates form data on input change
- `togglePasswordVisibility()` - Toggles password visibility
- `handleSubmit()` - Handles form submission
- `handleSignUp()` - Handles sign up navigation

## Customization

### Styling
All component styles are in `src/components/LoginContainer.css`. Modify colors, spacing, and animations as needed.

### Colors
Current color scheme:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Background: `#f7fafc` (Light Gray)
- Text: `#2d3748` (Dark Gray)

### Form Handlers
Edit the `handleSubmit()` and `handleSignUp()` methods in `LoginContainer.jsx` to connect to your backend API.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Code Splitting:** Automatic via Vite
- **Tree Shaking:** Enabled for optimal bundle size
- **Minification:** Production builds are minified
- **CSS Optimization:** Unused CSS is removed

## Contributing

To contribute, please:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

ISC

## Support

For issues or questions, please refer to the Figma design or contact the development team.

---

Built with ❤️ from Figma Design
