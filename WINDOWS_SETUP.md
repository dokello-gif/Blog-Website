# Windows Setup Guide - With David Blog Website

Complete guide for migrating and setting up the Blog Website project on Windows machines.

## Prerequisites

### Required Software

#### 1. **Node.js and npm**
- **Version Required**: Node.js v18.x or higher (includes npm)
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Installation**:
  - Download the Windows Installer (.msi) from the official Node.js website
  - Run the installer and follow the setup wizard
  - Ensure "Add to PATH" is selected during installation
- **Verification**:
  ```bash
  node --version
  npm --version
  ```

#### 2. **Git for Windows**
- **Download**: [https://git-scm.com/download/win](https://git-scm.com/download/win)
- **Installation**:
  - Run the installer
  - Recommended: Use Git from the Windows Command Prompt
  - Line ending conversion: "Checkout Windows-style, commit Unix-style line endings"
- **Verification**:
  ```bash
  git --version
  ```

#### 3. **Code Editor**
- **Recommended**: Visual Studio Code
- **Download**: [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Optional but Recommended

#### Windows Terminal
- **Download**: Microsoft Store or [GitHub](https://github.com/microsoft/terminal)
- Better command-line experience than Command Prompt

---

## Project Setup

### Step 1: Clone or Transfer the Project

**Option A: Clone from Git Repository**
```bash
git clone <your-repository-url>
cd Blog-Website
```

**Option B: Manual Transfer**
1. Copy the entire project folder to your Windows machine
2. Navigate to the project directory in terminal

> [!IMPORTANT]
> Do **NOT** copy the `node_modules` folder. It will be regenerated on Windows.

### Step 2: Install Dependencies

#### Main Application
```bash
# Navigate to project root
cd Blog-Website

# Install dependencies
npm install
```

#### Sanity Studio
```bash
# Navigate to studio folder
cd studio

# Install studio dependencies
npm install

# Return to project root
cd ..
```

### Step 3: Configuration

#### Sanity Configuration
The project uses Sanity CMS. Configuration is already set in:
- [sanity.js](file:///home/david-okello/Documents/Blog-Website/src/lib/sanity.js) - Client configuration
- [sanity.cli.js](file:///home/david-okello/Documents/Blog-Website/studio/sanity.cli.js) - Studio configuration

**Current Sanity Settings:**
```javascript
{
  projectId: 'inxbbd4s',
  dataset: 'production',
  apiVersion: '2024-01-13'
}
```

> [!NOTE]
> No environment variables are required for this project. All configuration is hardcoded in the source files.

---

## Running the Project

### Development Mode

#### Start the Frontend Application
```bash
# In project root directory
npm run dev
```
- Application will be available at: `http://localhost:5173`
- Hot reload is enabled for development

#### Start Sanity Studio (Optional - for content management)
```bash
# In a new terminal window
cd studio
npm run dev
```
- Studio will be available at: `http://localhost:3333`

### Production Build

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

---

## Windows-Specific Considerations

### Path Separators
- The project uses forward slashes (`/`) in import paths
- Vite and modern build tools handle this automatically on Windows
- No changes needed to import statements

### Line Endings
- If you cloned with Git, line endings are handled automatically
- Git converts LF to CRLF on checkout and CRLF to LF on commit
- ESLint and build tools are configured to handle both formats

### PowerShell Execution Policy
If you encounter script execution errors in PowerShell:
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port Conflicts
- Frontend uses port `5173`
- Sanity Studio uses port `3333`
- If ports are in use, you can modify them in:
  - Frontend: `vite.config.js`
  - Studio: Pass `--port` flag to the dev command

---

## Project Structure

```
Blog-Website/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── lib/               # Utilities and Sanity client
│   └── assets/            # Static assets
├── studio/                # Sanity Studio CMS
│   ├── schemas/           # Content schemas
│   └── sanity.config.js   # Studio configuration
├── public/                # Public assets (logo, etc.)
├── dist/                  # Build output (generated)
├── package.json           # Project dependencies
└── vite.config.js         # Vite configuration
```

---

## Troubleshooting

### Common Issues

#### 1. "npm command not found"
- Node.js not installed or not in PATH
- Restart terminal after Node.js installation
- Verify installation: `node --version`

#### 2. "Permission denied" errors
- Run terminal as Administrator
- Or use `npm install --no-optional`

#### 3. Build fails with "Out of memory"
```bash
# Increase Node.js memory limit
set NODE_OPTIONS=--max-old-space-size=4096
npm run build
```

#### 4. Sanity client errors
- Verify internet connection
- Check Sanity project status at [sanity.io](https://www.sanity.io)
- Ensure projectId and dataset are correct in `src/lib/sanity.js`

#### 5. Hot reload not working
- Windows Defender or antivirus may block file watchers
- Add project folder to antivirus exclusions

---

## Quick Start Checklist

- [ ] Install Node.js (v18+)
- [ ] Install Git
- [ ] Clone/copy project (exclude `node_modules`)
- [ ] Run `npm install` in project root
- [ ] Run `npm install` in `studio` folder
- [ ] Start development server: `npm run dev`
- [ ] Open browser to `http://localhost:5173`
- [ ] Verify content loads from Sanity

---

## Additional Resources

- **Vite Documentation**: [https://vite.dev/](https://vite.dev/)
- **React Documentation**: [https://react.dev/](https://react.dev/)
- **Sanity Documentation**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **TailwindCSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## Support

For project-specific issues:
1. Check the console for error messages
2. Verify all dependencies are installed correctly
3. Ensure Sanity CMS is accessible
4. Check that all ports are available (5173, 3333)
