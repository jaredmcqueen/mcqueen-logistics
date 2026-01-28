# Favicon Testing Guide

## Quick Start
Run your development server and test the favicon implementation:

```bash
pnpm dev
```

Then visit `http://localhost:3000` and check the following:

## Desktop Browser Testing

### Chrome/Edge
1. Check the browser tab - you should see the McQueen Logistics favicon
2. Open DevTools → Application → Manifest
   - Verify "McQueen Logistics" appears as the app name
   - Check that icons load correctly
3. Test dark mode:
   - Open DevTools → Settings → Appearance → Dark
   - The favicon should adapt to dark mode (SVG has built-in dark mode support)

### Firefox
1. Check the browser tab for the favicon
2. Right-click the page → View Page Info → Media
   - Verify all favicon files are listed and loading

### Safari
1. Check the browser tab for the favicon
2. Try bookmarking the page - the bookmark should show the favicon

## Mobile Testing

### iOS Safari
1. Visit the site on an iPhone/iPad
2. Tap the Share button → Add to Home Screen
3. Verify the icon looks correct on the home screen
4. Launch the app from the home screen - it should open in standalone mode

### Android Chrome
1. Visit the site on an Android device
2. Check the browser tab for the favicon
3. Menu → Add to Home Screen
4. Verify the icon appears correctly on the home screen

## What to Look For

### ✅ Success Indicators
- Favicon appears in browser tabs
- Favicon adapts to dark mode (if using dark theme)
- iOS home screen icon looks sharp and correct
- Android home screen icon looks sharp and correct
- PWA install prompt shows correct branding
- Browser address bar shows theme color (#ffffff)

### ❌ Common Issues
- **Favicon not showing**: Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- **Old favicon showing**: Browser cache - try incognito/private mode
- **Blurry icons on mobile**: Check that high-res PNG files are being used
- **Manifest errors**: Check browser console for 404 errors

## Files Served

All these files should be accessible at their respective URLs:
- `http://localhost:3000/favicon.svg`
- `http://localhost:3000/favicon.ico`
- `http://localhost:3000/favicon-96x96.png`
- `http://localhost:3000/apple-touch-icon.png`
- `http://localhost:3000/site.webmanifest`
- `http://localhost:3000/web-app-manifest-192x192.png`
- `http://localhost:3000/web-app-manifest-512x512.png`

## Production Testing

After building for production:

```bash
pnpm build
pnpm start
```

Test the same checklist above to ensure favicons work in the production build.

## Troubleshooting

### Favicon not updating
1. Clear browser cache completely
2. Try incognito/private browsing mode
3. Check browser DevTools Console for 404 errors
4. Verify files exist in the `public/` directory

### Manifest not loading
1. Check browser Console for errors
2. Verify `site.webmanifest` is valid JSON
3. Check that icon paths in manifest are correct
4. Ensure Content-Type header is `application/manifest+json`

### Dark mode not working
1. Verify you're using the SVG favicon (not PNG/ICO)
2. Check that the SVG file contains the dark mode CSS
3. Test in a browser that supports SVG favicons (Chrome, Firefox, Safari)

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| SVG Favicon | ✅ | ✅ | ✅ | ✅ |
| Dark Mode Favicon | ✅ | ✅ | ✅ | ✅ |
| Web Manifest | ✅ | ✅ | ✅ | ✅ |
| Apple Touch Icon | N/A | N/A | ✅ | N/A |

## Next Steps

Once testing is complete and favicons display correctly:
1. Commit the changes to version control
2. Deploy to staging/production
3. Test on production URL
4. Verify PWA installation works correctly
