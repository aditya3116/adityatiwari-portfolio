# Website Deployment Guide for adityatiwari.eu

## 🚀 Deploying to GoDaddy Hosting

### Step 1: Access GoDaddy Hosting Control Panel
1. Log in to your GoDaddy account
2. Go to "My Products" → "Web Hosting"
3. Click "Manage" next to your hosting plan
4. Access the "File Manager" or "cPanel"

### Step 2: Upload Files
1. **Navigate to the public_html folder** (or www folder)
2. **Upload all files from the deployment folder:**
   - `index.html` (main page)
   - `adityatiwari_cv.pdf` (your resume)
   - `css/` folder (all stylesheets)
   - `js/` folder (all JavaScript files)
   - `img/` folder (all images)

### Step 3: Verify File Structure
Your website should have this structure:
```
public_html/
├── index.html
├── adityatiwari_cv.pdf
├── css/
│   ├── style.css
│   ├── plugins.css
│   ├── responsive.css
│   └── plugins/
├── js/
│   ├── custom-v2.js
│   ├── jquery-3.1.1.min.js
│   └── plugins.js
└── img/
    ├── content4.jpg
    ├── cert-bg.jpg
    └── [other images]
```

### Step 4: Test Your Website
1. Visit `http://adityatiwari.eu` in your browser
2. Check that all sections load properly
3. Test the download resume functionality
4. Verify the typing animation works

## 🔧 Alternative: Deploy to GitHub Pages (Free)

If you prefer a free hosting option:

### Step 1: Create GitHub Repository
1. Go to GitHub.com and create a new repository
2. Name it: `adityatiwari-portfolio`

### Step 2: Upload Files
1. Upload all files from the deployment folder to the repository
2. Commit and push the changes

### Step 3: Enable GitHub Pages
1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch and "/ (root)" folder
4. Your site will be available at: `https://yourusername.github.io/adityatiwari-portfolio`

### Step 4: Connect Custom Domain
1. In GitHub Pages settings, add `adityatiwari.eu` as custom domain
2. Update your GoDaddy DNS settings to point to GitHub Pages

## 🌐 DNS Configuration for adityatiwari.eu

### GoDaddy DNS Settings:
1. Go to GoDaddy Domain Management
2. Click "DNS" for adityatiwari.eu
3. Add these records:

**For GoDaddy Hosting:**
- Type: A Record
- Name: @
- Value: [Your hosting IP address from GoDaddy]

**For GitHub Pages:**
- Type: CNAME
- Name: @
- Value: yourusername.github.io

## 📧 Email Setup (Optional)
If you want email@adityatiwari.eu:
1. Purchase email hosting from GoDaddy
2. Configure MX records in DNS settings
3. Set up email client

## 🔍 Post-Deployment Checklist
- [ ] Website loads at adityatiwari.eu
- [ ] All images display correctly
- [ ] Resume download works
- [ ] Typing animation functions
- [ ] Mobile responsiveness works
- [ ] Contact form works (if enabled)
- [ ] SSL certificate is active (https://)

## 🆘 Troubleshooting
- **Images not loading:** Check file paths and case sensitivity
- **CSS not working:** Verify css folder is uploaded correctly
- **JavaScript errors:** Check browser console for errors
- **Domain not working:** Wait 24-48 hours for DNS propagation

## 📞 Support
- GoDaddy Support: 24/7 phone and chat
- GitHub Pages: Documentation and community forums
- Your website files are ready in the deployment folder! 