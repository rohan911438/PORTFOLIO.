#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add .nojekyll file if it doesn't exist
    if [ ! -f "dist/.nojekyll" ]; then
        touch dist/.nojekyll
        echo "📝 Added .nojekyll file"
    fi
    
    echo "🎉 Project is ready for deployment!"
    echo "📍 You can now:"
    echo "   1. Commit and push to main branch for automatic deployment"
    echo "   2. Or run 'npm run deploy' for manual deployment"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
