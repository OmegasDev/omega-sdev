# OmegasDev Agency Website

A production-ready HTML + TailwindCSS project for OmegasDev, a web and app development agency.

## Project Structure

```
omegasdev-agency/
├── assets/
│   ├── images/     # Image assets
│   ├── svgs/       # SVG icons and graphics
│   └── videos/     # Video assets
├── components/     # Reusable HTML components
├── css/
│   └── main.css    # Main stylesheet with Tailwind
├── js/
│   └── main.js     # JavaScript for animations and interactions
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── index.html      # Homepage
├── about.html      # About page
├── services.html   # Services page
├── contact.html    # Contact page
└── tailwind.config.js
```

## Features

- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, structured data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Scroll-reveal effects and smooth transitions
- **Modern Stack**: Vite + TailwindCSS + Vanilla JavaScript
- **PWA Ready**: Manifest and service worker setup
- **Semantic HTML**: Proper HTML5 structure with accessibility in mind

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Pages

- **Home** (`index.html`) - Landing page with hero, services preview, portfolio, testimonials
- **About** (`about.html`) - Company story, mission, vision, values, team
- **Services** (`services.html`) - Detailed service offerings and process
- **Contact** (`contact.html`) - Contact form, information, map, FAQ

## Customization

All pages are structured with placeholder sections ready for your content:

- Replace placeholder text with your actual content
- Add images to `/assets/images/`
- Update colors in `tailwind.config.js`
- Modify animations in `css/main.css`
- Add custom JavaScript in `js/main.js`

## SEO Configuration

Update the following in each HTML file:
- Meta descriptions
- Open Graph images
- Canonical URLs
- Structured data

Update `sitemap.xml` and `robots.txt` in the `/public` folder with your actual domain.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved
