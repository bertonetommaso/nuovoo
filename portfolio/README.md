# Product Designer Portfolio

A contemporary portfolio site focused on affordance and balanced aesthetics, built with React, Framer Motion, and React Router.

## Features

- **Smooth Navigation**: Animated navigation with scroll-aware header and mobile menu
- **Interactive Project Cards**: Hover effects and smooth transitions between pages
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Scroll Animations**: Elements animate into view as you scroll
- **Project Detail Pages**: Dedicated pages for each project with process breakdown

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **CSS Variables** - Theming and design tokens

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── Navigation.jsx    # Main navigation component
│   ├── pages/
│   │   ├── Home.jsx          # Homepage with hero, projects, about, contact
│   │   └── ProjectDetail.jsx # Individual project pages
│   ├── data/
│   │   └── projects.js       # Project data configuration
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Component styles
│   ├── index.css             # Global styles and CSS variables
│   └── main.jsx              # Entry point
├── public/
│   └── favicon.svg           # Site favicon
└── index.html                # HTML template
```

## Customization

### Adding Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
  id: 'project-id',
  title: 'Project Title',
  category: 'Category',
  year: '2024',
  description: 'Short description',
  longDescription: 'Full project description',
  image: '/projects/image.jpg',
  images: ['/projects/image-1.jpg', '/projects/image-2.jpg'],
  process: [
    { step: 'Step Name', description: 'Step description' }
  ],
  tags: ['Tag1', 'Tag2']
}
```

### Styling

- CSS variables in `index.css` control colors, typography, and spacing
- Component styles are in `App.css`
- Dark mode is automatically applied based on system preferences

### Images

Replace placeholder divs with actual `<img>` tags or picture components in the project files. Image paths should be placed in the `public/` folder or imported as assets.

## License

MIT
