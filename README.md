# 🚀 Rohan Kumar - Personal Portfolio

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deployment](https://img.shields.io/badge/Status-Live-brightgreen.svg)](https://rohan911438.github.io/portfolio)

> A modern, responsive portfolio website showcasing expertise in Machine Learning, Data Science, and Web Development. Built with React and Vite, featuring a sleek dark theme and interactive components.

## 🌟 Live Demo

**🔗 [Visit Portfolio](https://rohan911438.github.io/PORTFOLIO)**

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

## 👨‍💻 About

Hi! I'm **Rohan Kumar**, a 2nd Year Information Technology student at Government College of Engineering and Ceramic Technology, Kolkata. I'm passionate about Machine Learning, AI, and building interactive applications that solve real-world problems.

### 🎯 Current Focus
- **Machine Learning & AI**: Building intelligent systems and data-driven applications
- **Web Development**: Creating responsive, interactive web applications
- **Data Science**: Analyzing data to extract meaningful insights
- **Open Source**: Contributing to projects and sharing knowledge

## ✨ Features

### 🎨 Design & UX
- **Modern Dark Theme**: Professional black theme with cyan accents
- **Fully Responsive**: Optimized for all devices (mobile-first approach)
- **Smooth Animations**: Interactive hover effects and smooth transitions
- **Loading Animations**: Enhanced user experience with smooth page transitions

### 🛠️ Technical Features
- **Component-Based Architecture**: Modular React components for scalability
- **Fast Performance**: Built with Vite for optimal loading times
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

### 📱 Sections
- **🏠 Home**: Hero section with animated introduction
- **👤 About**: Personal background, statistics, and education timeline
- **🎓 Education**: Academic journey from elementary to current BTech
- **🏆 Certifications**: Professional courses and credentials
- **💼 Skills**: Interactive skill bars with categorized expertise
- **📊 Projects**: 14+ ML/Data Science projects with live demos
- **📞 Contact**: Interactive form with social media links

## 🛠️ Tech Stack

### Frontend
- ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)

### Styling & Design
- **CSS Variables**: Dynamic theming system
- **Flexbox & Grid**: Modern layout techniques
- **Google Fonts**: Inter & JetBrains Mono
- **Responsive Design**: Mobile-first approach

### Development Tools
- **ESLint**: Code quality and consistency
- **Vite HMR**: Hot Module Replacement for fast development
- **Git**: Version control and collaboration

## 📸 Screenshots

### Desktop View
```
🖥️ Hero Section       🖥️ Skills Section     🖥️ Projects Gallery
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│   Rohan Kumar   │   │  Skills & Tech  │   │   14+ Projects  │
│  ML Enthusiast  │   │   Progress Bars │   │  Filter & Cards │
│  [View Projects]│   │  Experience Timeline│   │  GitHub & Demos │
└─────────────────┘   └─────────────────┘   └─────────────────┘
```

### Mobile View
```
📱 Responsive Design    📱 Navigation Menu    📱 Project Cards
┌─────────────┐        ┌─────────────┐       ┌─────────────┐
│ Rohan Kumar │        │    ☰ Menu   │       │   Project   │
│ Introduction│        │  • Home     │       │   Details   │
│   Skills    │        │  • About    │       │ [GitHub][Demo]│
│  Projects   │        │  • Skills   │       │             │
│  Contact    │        │  • Contact  │       │   Tech Tags │
└─────────────┘        └─────────────┘       └─────────────┘
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohan911438/PORTFOLIO.git
   cd PORTFOLIO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── 📁 public/
│   ├── profile-photo.jpg
│   └── vite.svg
├── 📁 src/
│   ├── 📁 components/
│   │   ├── About.jsx & About.css
│   │   ├── Contact.jsx & Contact.css
│   │   ├── Footer.jsx & Footer.css
│   │   ├── Header.jsx & Header.css
│   │   ├── Home.jsx & Home.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── ProjectsFixed.jsx
│   │   └── Skills.jsx & Skills.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css (Global styles & CSS variables)
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

## 🎨 Customization

### Personal Information
1. **Update contact details** in `Contact.jsx`
2. **Modify skills** in `Skills.jsx`
3. **Add/remove projects** in `ProjectsFixed.jsx`
4. **Change education info** in `About.jsx`

### Styling
```css
/* Update colors in src/index.css */
:root {
  --primary-color: #00d4ff;      /* Main accent color */
  --bg-primary: #000000;         /* Background color */
  --text-primary: #ffffff;       /* Text color */
  --card-bg: #0a0a0a;           /* Card background */
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add navigation link in `Header.jsx`

## 🌐 Deployment

### GitHub Pages (Recommended)
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"homepage": "https://rohan911438.github.io/PORTFOLIO",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Alternative Platforms
- **Netlify**: Connect GitHub repo for auto-deploy
- **Vercel**: Import project for seamless deployment
- **AWS S3**: Upload build files to S3 bucket

## 📊 Portfolio Highlights

### 🤖 Machine Learning Projects
- **Student Performance Prediction**: End-to-end ML pipeline with Flask
- **MLflow Wine Quality**: Complete MLOps with experiment tracking
- **ANN Churn Prediction**: Deep learning for customer retention
- **Stock Price Prediction**: Financial forecasting with LSTM

### 📈 Data Science Projects
- **Diwali Sales EDA**: Comprehensive data analysis
- **Sentiment Analysis**: NLP for text classification
- **Image Classification**: Computer vision with CNNs

### 🌐 Web Development
- **Portfolio Website**: This responsive React application
- **Interactive Visualizations**: Data visualization tools

## 🔗 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-rohan911438-181717?logo=github)](https://github.com/rohan911438)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rohan%20Kumar-0A66C2?logo=linkedin)](https://www.linkedin.com/in/rohan-kumar-1a60b7314/)
[![Email](https://img.shields.io/badge/Email-123131rkorohan%40gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:123131rkorohan@gmail.com)
[![Twitter](https://img.shields.io/badge/Twitter-ROHANKUMAR77238-1DA1F2?logo=twitter&logoColor=white)](https://x.com/ROHANKUMAR77238)

### 📧 Contact Information
- **Email**: [123131rkorohan@gmail.com](mailto:123131rkorohan@gmail.com)
- **Location**: Kolkata, India
- **Institution**: Government College of Engineering & Ceramic Technology

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the lightning-fast build tool
- **Google Fonts** for beautiful typography
- **GitHub** for hosting and version control

## 📈 Stats

![GitHub Stars](https://img.shields.io/github/stars/rohan911438/PORTFOLIO?style=social)
![GitHub Forks](https://img.shields.io/github/forks/rohan911438/PORTFOLIO?style=social)
![GitHub Issues](https://img.shields.io/github/issues/rohan911438/PORTFOLIO)
![GitHub Last Commit](https://img.shields.io/github/last-commit/rohan911438/PORTFOLIO)

---

<div align="center">

**⭐ If you like this portfolio, please give it a star! ⭐**

Made with ❤️ by [Rohan Kumar](https://github.com/rohan911438)

</div>
