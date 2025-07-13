# Portfolio Website

A modern, responsive portfolio website built with React and Vite. This portfolio showcases skills, projects, and provides a way for potential clients or employers to get in touch.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional design with smooth animations
- **Component-Based**: Modular React components for easy maintenance
- **Smooth Navigation**: Scroll-to-section navigation with smooth scrolling
- **Contact Form**: Interactive contact form with validation
- **Skills Showcase**: Visual representation of technical skills with progress bars
- **Project Gallery**: Filterable project showcase with live demo and GitHub links
- **Fast Performance**: Built with Vite for optimal build times and performance

## Components

### Header
- Fixed navigation bar with smooth scroll links
- Mobile-responsive hamburger menu
- Modern glassmorphism design

### Home
- Hero section with call-to-action buttons
- Animated background elements
- Professional introduction

### About
- Personal information and background
- Statistics cards showing experience metrics
- Core values and principles

### Skills
- Technical skills with interactive progress bars
- Categorized skill sets (Frontend, Backend, Tools)
- Professional experience timeline

### Projects
- Filterable project gallery
- Project cards with technology tags
- Links to live demos and GitHub repositories
- Featured project highlighting

### Contact
- Interactive contact form
- Contact information cards
- Social media links
- Form validation and submission feedback

### Footer
- Additional navigation links
- Social media links
- Copyright information
- Back-to-top functionality

## Tech Stack

- **Frontend**: React 18, CSS3, HTML5
- **Build Tool**: Vite
- **Styling**: Modern CSS with CSS Variables, Flexbox, Grid
- **Fonts**: Google Fonts (Inter)
- **Icons**: Emoji icons for modern, universal appeal

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information
Update the following files with your personal information:

1. **Components**: Update text content in each component file
2. **Contact Information**: Update email, phone, and social media links
3. **Skills**: Modify the skills arrays in `Skills.jsx`
4. **Projects**: Update the projects array in `Projects.jsx`
5. **Images**: Replace placeholder emojis with actual images

### Styling
- Modify CSS variables in `index.css` for global color scheme
- Update individual component CSS files for specific styling
- Fonts can be changed by updating the Google Fonts import

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `App.jsx`
3. Update the navigation in `Header.jsx`

## Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import project from GitHub for seamless deployment
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the build files to an S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: upaharjana@2004.com
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/upaharjana)
- GitHub: [GitHub Profile](https://github.com/upaharjana)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
