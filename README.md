# AutoCodeLabs - Agentic AI Software Engineering Platform

A premium, production-ready landing page for AutoCodeLabs, built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium Design**: Stripe/Vercel/Linear-inspired aesthetic
- **Dark Theme**: Deep dark backgrounds with neon blue/purple glows
- **Fully Responsive**: Mobile-first design approach
- **Smooth Animations**: Powered by Framer Motion
- **Contact Form**: Integrated with EmailJS for direct email sending
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Design System

### Colors
- **Primary**: Neon Blue (#6B7EF2)
- **Secondary**: Neon Purple (#8B5CF6)
- **Accent**: Neon Pink (#EC4899)
- **Background**: Deep Dark (#0A0A0F)

### Typography
- **Display Font**: Sora (headings)
- **Body Font**: Inter (body text)

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 📧 Email Configuration

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials (Service ID, Template ID, User ID)
5. Update `src/components/Contact.jsx` with your credentials:

```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const userId = 'YOUR_USER_ID'
```

### EmailJS Template Variables
Your template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content

## 🏗️ Project Structure

```
autocodelabs-landing/
├── public/
│   └── Autocodelabs Logo.png
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackgroundEffects.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Industries.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Sections

1. **Navbar** - Sticky navigation with logo and CTA
2. **Hero** - Main headline with animated gradient and floating logo
3. **About** - Founder background and company story
4. **Services** - Core framework capabilities
5. **Why Choose Us** - Key differentiators
6. **How It Works** - 3-step process
7. **Industries** - Target markets
8. **Testimonials** - Customer feedback
9. **FAQ** - Common questions
10. **Contact** - Working contact form
11. **Footer** - Links and company info

## 🛠️ Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Email service

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images
- Lazy loading animations
- Minimal bundle size
- Fast page loads

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  neon: {
    blue: '#6B7EF2',
    purple: '#8B5CF6',
    pink: '#EC4899',
  },
  // ... more colors
}
```

### Fonts
Update `index.html` to change fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet">
```

## 📄 License

All rights reserved © 2026 AutoCodeLabs

## 🤝 Support

For questions or support, contact: amit@autocodelabs.com

---

Built with ❤️ by AutoCodeLabs
# AutoCodeLabs
