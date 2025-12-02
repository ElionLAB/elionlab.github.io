# LM Research Lab Website

A professional, static website for a Language Model research lab, designed for deployment on GitHub Pages.

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (User/Organization Site)

1. Create a new repository named `username.github.io` (replace `username` with your GitHub username)
2. Clone this repository and push to your new repo:
   ```bash
   git clone <this-repo>
   cd labweb
   git remote set-url origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```
3. Your site will be live at `https://username.github.io`

### Option 2: Deploy to GitHub Pages (Project Site)

1. Push this code to any repository
2. Go to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at `https://username.github.io/repository-name`

## 📁 Directory Structure

```
labweb/
├── index.html              # Home page
├── about.html              # About the lab
├── publications.html       # Research publications
├── projects.html           # Research projects
├── team.html               # Team members
├── contact.html            # Contact information
├── README.md               # This file
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    ├── js/
    │   └── main.js         # JavaScript for interactivity
    ├── images/
    │   ├── logos/          # Lab logo and partner logos
    │   ├── team/           # Team member photos
    │   └── projects/       # Project images
    └── files/              # PDFs (papers, CVs, posters)
```

## ✏️ Updating Content

### Adding Team Members

1. Add a photo to `assets/images/team/` (recommended: 200x200px, JPG/PNG/SVG)
2. Edit `team.html` and add a new team card:

```html
<article class="card team-card">
    <img src="assets/images/team/new-member.jpg" alt="Name" class="team-photo">
    <h3 class="team-name">Dr. New Member</h3>
    <p class="team-role">Position</p>
    <p class="team-bio">Brief bio here.</p>
    <div class="team-links">
        <a href="mailto:email@university.edu" aria-label="Email">📧</a>
        <a href="https://scholar.google.com" target="_blank" aria-label="Google Scholar">🎓</a>
    </div>
</article>
```

### Adding Publications

Edit `publications.html` and add a new publication item:

```html
<div class="publication-item">
    <span class="publication-year">Venue 2024</span>
    <h3 class="publication-title">Paper Title</h3>
    <p class="publication-authors">Author 1, Author 2, Author 3</p>
    <p class="publication-venue">Conference/Journal Name, Year</p>
    <div class="publication-links">
        <a href="assets/files/paper.pdf">PDF</a>
        <a href="https://arxiv.org/abs/xxxx.xxxxx" target="_blank">arXiv</a>
        <a href="https://github.com/repo" target="_blank">Code</a>
    </div>
</div>
```

### Adding Projects

Edit `projects.html` and add a new project card:

```html
<article class="card">
    <img src="assets/images/projects/new-project.jpg" alt="Project Name" class="card-image">
    <div class="card-content">
        <span class="publication-year">Ongoing</span>
        <h3 class="card-title">Project Title</h3>
        <p class="card-text">Project description here.</p>
        <div class="publication-links">
            <a href="https://github.com/repo" target="_blank">GitHub</a>
            <a href="publications.html">Papers</a>
        </div>
    </div>
</article>
```

### Updating Contact Information

Edit `contact.html` to update:
- Address
- Email addresses
- Phone number
- Office hours
- Social media links

### Replacing Placeholder Images

Replace the SVG placeholders with actual images:
- **Logo**: Replace `assets/images/logos/logo.svg` with your lab logo
- **Team photos**: Replace files in `assets/images/team/` with actual photos
- **Project images**: Replace files in `assets/images/projects/`

Recommended image sizes:
- Logo: 200x50px (SVG preferred)
- Team photos: 200x200px (square, will be displayed as circle)
- Project images: 600x300px

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #1a365d;      /* Main brand color */
    --primary-light: #2c5282;      /* Lighter variant */
    --secondary-color: #3182ce;    /* Accent color */
    /* ... more variables */
}
```

### Changing Fonts

The site uses Google Fonts. To change fonts, update the `<link>` tag in each HTML file and the CSS variables:

```css
:root {
    --font-primary: 'Your Font', sans-serif;
    --font-heading: 'Your Heading Font', serif;
}
```

## 📝 Content Management with Markdown (Optional)

For easier content management, you can use a static site generator like Jekyll (natively supported by GitHub Pages) or a build script.

### Using Jekyll (Recommended for GitHub Pages)

1. Create a `_config.yml` file:
   ```yaml
   title: LM Research Lab
   description: Language Model Research
   baseurl: ""
   markdown: kramdown
   ```

2. Convert HTML files to use Jekyll layouts and Markdown content
3. GitHub Pages will automatically build your site

### Manual Markdown Conversion

For simple updates, you can:
1. Write content in Markdown
2. Use an online converter (like [Markdown to HTML](https://markdowntohtml.com/))
3. Paste the HTML into the appropriate section

## 🔧 Technical Details

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

### Accessibility Features

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)
- Screen reader friendly

### Performance

- No external JavaScript frameworks
- Minimal CSS (custom, no framework)
- SVG images for logos and icons
- Lazy loading support for images
- Optimized for fast loading

## 📄 License

This template is provided for educational and research purposes. Feel free to modify and use it for your research lab website.

## 🤝 Contributing

To contribute improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions about this template, please open an issue on GitHub.

---

**Built with ❤️ for the research community**

