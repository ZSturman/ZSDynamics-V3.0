const fs = require('fs');
const path = require('path');

// Static HTML templates for each route
const routes = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects', 
  '/contact': 'Contact'
};

const outputDir = './docs';

function generateStaticHTML() {
  console.log('Generating static HTML files...');
  
  // Read the main index.html
  const indexPath = path.join(outputDir, 'index.html');
  const baseHTML = fs.readFileSync(indexPath, 'utf8');
  
  // For each route, create a folder with index.html
  Object.keys(routes).forEach(route => {
    if (route === '/') return; // Skip root, already exists
    
    const routePath = path.join(outputDir, route);
    const filePath = path.join(routePath, 'index.html');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(routePath)) {
      fs.mkdirSync(routePath, { recursive: true });
    }
    
    // Update the HTML title and create the file
    let routeHTML = baseHTML.replace(
      '<title>Zachary Sturman</title>',
      `<title>Zachary Sturman - ${routes[route]}</title>`
    );
    
    // Update asset paths to work from subdirectories
    routeHTML = routeHTML.replace(/src="\.\/assets\//g, 'src="../assets/');
    routeHTML = routeHTML.replace(/href="\.\/assets\//g, 'href="../assets/');
    
    fs.writeFileSync(filePath, routeHTML);
    console.log(`Generated: ${filePath}`);
  });
  
  console.log('Static HTML generation complete!');
}

generateStaticHTML();