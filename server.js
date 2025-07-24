const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from dist directory
app.use('/PORTFOLIO', express.static(path.join(__dirname, 'dist')));

// Handle SPA routing
app.get('/PORTFOLIO/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Redirect root to /PORTFOLIO/
app.get('/', (req, res) => {
  res.redirect('/PORTFOLIO/');
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running at http://localhost:${PORT}/PORTFOLIO/`);
  console.log(`📱 This simulates your GitHub Pages deployment`);
  console.log(`🔗 Open: http://localhost:${PORT}/PORTFOLIO/`);
});
