# COVER - Website

Official website for COVER - The Ultimate Path Puzzle Game

## 🎨 Design Theme

The website follows a **neon cyberpunk aesthetic** matching the game's visual identity:
- Neon purple (#a855f7) as primary color
- Neon cyan (#22d3ee) as secondary color
- Dark black background with glowing effects
- Orbitron font for that futuristic look

## 📁 Structure

```
cover_html/
├── index.html          # Homepage
├── support.html        # Support & FAQ page
├── privacy-policy.html # Privacy policy page
├── styles.css          # All styles
├── script.js           # Interactive features
└── README.md           # This file
```

## 🚀 Features

### Homepage (index.html)
- Hero section with animated neon lines
- Features grid showcasing game highlights
- Gameplay instructions
- Screenshots placeholders
- Download section with App Store/Google Play buttons
- Responsive footer

### Support Page (support.html)
- Comprehensive FAQ organized by categories
- Contact section with multiple support channels
- Terms of Service preview

### Privacy Policy (privacy-policy.html)
- GDPR compliant
- CCPA compliant
- Child-friendly (COPPA)
- Covers all AdMob integrations
- Clear and transparent

## 🛠️ Setup & Usage

### 1. Quick Start
Simply open `index.html` in a web browser. No build process required!

### 2. Hosting Options

#### Option A: GitHub Pages (Free & Easy)
```bash
# In your repository
git add cover_html/
git commit -m "Add website"
git push

# Then enable GitHub Pages in repository settings
# Point it to /cover_html directory
```

#### Option B: Netlify (Free with CI/CD)
1. Create account at netlify.com
2. Drag & drop the `cover_html` folder
3. Your site is live in seconds!

#### Option C: Custom Domain
Upload files to your web hosting via FTP:
- index.html → root directory
- All other files → root directory

### 3. Update Store Links

Before going live, update these in `index.html`:

```html
<!-- Line ~205-225: Replace # with real links -->
<a href="https://apps.apple.com/app/your-app-id" class="store-button app-store">
<a href="https://play.google.com/store/apps/details?id=com.yourgame.cover" class="store-button google-play">
```

### 4. Add Social Media Links

Update social links in footer (all HTML files):
```html
<!-- Replace # with your actual social media URLs -->
<a href="https://tiktok.com/@youraccount" aria-label="TikTok">🎵</a>
<a href="https://instagram.com/youraccount" aria-label="Instagram">📷</a>
<a href="https://twitter.com/youraccount" aria-label="Twitter">🐦</a>
<a href="https://youtube.com/@youraccount" aria-label="YouTube">📺</a>
```

### 5. Add Screenshots

Replace the placeholder screenshots:
1. Take 4 screenshots from the game (use SCREENSHOT_MODE)
2. Save as: `menu.png`, `levels.png`, `gameplay.png`, `victory.png`
3. Update `index.html` around line 150:

```html
<div class="screenshots-grid">
    <img src="menu.png" alt="Menu Screen">
    <img src="levels.png" alt="Level Selection">
    <img src="gameplay.png" alt="Gameplay">
    <img src="victory.png" alt="Victory Screen">
</div>
```

### 6. Add Favicon

Create a favicon:
```html
<!-- Add to <head> of all HTML files -->
<link rel="icon" type="image/png" href="favicon.png">
```

## 📧 Update Email Addresses

Replace placeholder emails throughout:
- `support@covergame.com` → your real support email
- `privacy@covergame.com` → your privacy contact
- `feedback@covergame.com` → your feedback email
- `legal@covergame.com` → your legal contact

You can use the same email for all if you want.

## 🎯 SEO Optimization

### 1. Add Google Analytics (optional)

Add before `</head>` in all HTML files:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Create sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/support.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.com/privacy-policy.html</loc>
    <priority>0.5</priority>
  </url>
</urlset>
```

### 3. Create robots.txt

```
User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

## 🎨 Customization

### Change Colors

Edit `styles.css` root variables:
```css
:root {
    --neon-purple: #a855f7;  /* Primary */
    --neon-cyan: #22d3ee;    /* Secondary */
    --neon-pink: #ec4899;    /* Accent 1 */
    --neon-orange: #fb923c;  /* Accent 2 */
    --neon-green: #4ade80;   /* Accent 3 */
}
```

### Change Font

Replace in all HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700;900&display=swap" rel="stylesheet">
```

Then update `styles.css`:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 📱 Mobile Responsive

The site is fully responsive and works on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

Test on different devices before launch!

## ✅ Pre-Launch Checklist

- [ ] Update App Store links
- [ ] Update Google Play links
- [ ] Add real screenshots
- [ ] Update email addresses
- [ ] Add social media links
- [ ] Test all links
- [ ] Add favicon
- [ ] Test on mobile devices
- [ ] Spell check all content
- [ ] Add Google Analytics (optional)
- [ ] Create sitemap.xml
- [ ] Test contact forms/emails
- [ ] Verify privacy policy is accurate

## 🌐 Useful Links for Hosting

- **GitHub Pages**: https://pages.github.com/
- **Netlify**: https://www.netlify.com/
- **Vercel**: https://vercel.com/
- **Cloudflare Pages**: https://pages.cloudflare.com/

All offer free hosting for static sites!

## 🎬 Adding Video

To add a gameplay video to the homepage:

1. Host video on YouTube
2. Replace the "Watch Trailer" button in `index.html`:

```html
<a href="https://youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" class="btn btn-secondary">
    <span class="btn-icon">▶️</span> Watch Trailer
</a>
```

Or embed it directly:
```html
<div class="video-container">
    <iframe width="560" height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        frameborder="0" allowfullscreen>
    </iframe>
</div>
```

## 🐛 Troubleshooting

**Issue**: Styles not loading
- **Fix**: Make sure `styles.css` is in the same folder as HTML files

**Issue**: JavaScript not working
- **Fix**: Check browser console for errors (F12)

**Issue**: Mobile menu not appearing
- **Fix**: Resize browser to <768px width to test

**Issue**: Links not working
- **Fix**: Replace all `#` placeholders with real URLs

## 📞 Support

For website issues, contact: webmaster@covergame.com

---

**Made with ❤️ for COVER**
