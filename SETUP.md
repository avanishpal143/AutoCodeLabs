# Setup Instructions

## Quick Start

Follow these steps to get the AutoCodeLabs landing page running:

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- EmailJS (contact form)
- PostCSS & Autoprefixer

### 2. Add Logo to Public Folder

Make sure the logo file is in the correct location:
```
public/Autocodelabs Logo.png
```

### 3. Configure EmailJS (Important!)

The contact form requires EmailJS configuration:

#### Step-by-step:

1. **Sign up at EmailJS**: https://www.emailjs.com/
2. **Add Email Service**:
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the connection steps

3. **Create Email Template**:
   - Go to Email Templates
   - Click "Create New Template"
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Save the template

4. **Get Your Credentials**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - User ID (Public Key): Found in Account > API Keys

5. **Update Contact.jsx**:
   Open `src/components/Contact.jsx` and replace:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID'
   const userId = 'YOUR_USER_ID'
   ```

### 4. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### 6. Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### Logo not showing?
- Check the file path: `public/Autocodelabs Logo.png`
- Make sure the filename matches exactly (case-sensitive)

### Contact form not working?
- Verify EmailJS credentials are correct
- Check browser console for errors
- Make sure you've verified your email in EmailJS

### Animations not smooth?
- Check if hardware acceleration is enabled in your browser
- Try a different browser (Chrome/Firefox recommended)

### Build errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure you're using Node.js v16 or higher

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment

1. Run `npm run build`
2. Upload `dist/` folder to your hosting
3. Configure server to serve `index.html` for all routes

## Environment Variables

If you want to use environment variables for EmailJS:

1. Create `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

2. Update Contact.jsx:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const userId = import.meta.env.VITE_EMAILJS_USER_ID
```

3. Add `.env` to `.gitignore` (already included)

## Support

Need help? Contact: amit@autocodelabs.com
