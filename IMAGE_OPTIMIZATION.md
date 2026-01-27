# Image Optimization

This project uses `vite-plugin-imagemin` to automatically optimize images during production builds.

## How It Works

When you run `pnpm build`, all images in the `public/` directory are automatically compressed and optimized:

- **JPEG/JPG**: Compressed using mozjpeg with 80% quality
- **PNG**: Optimized using optipng (level 7) and pngquant (80-90% quality)
- **GIF**: Optimized using gifsicle (level 7)
- **SVG**: Optimized using svgo

## Current Logos

The following certification logos are optimized and displayed on the homepage:

- `/SWAM.png` - SWaM Certification
- `/eva-logo.jpg` - eVA Certification
- `/micro.png` - Micro Business Certification

## Configuration

The optimization settings are configured in `vite.config.ts`. You can adjust the quality settings if needed:

```typescript
viteImagemin({
  mozjpeg: {
    quality: 80, // Adjust JPEG quality (0-100)
  },
  pngquant: {
    quality: [0.8, 0.9], // Adjust PNG quality range
    speed: 4,
  },
  // ... other settings
})
```

## Performance Benefits

- Reduced file sizes for faster page loads
- Better Core Web Vitals scores
- Improved user experience, especially on slower connections
- Automatic optimization - no manual intervention needed

## Development vs Production

- **Development** (`pnpm dev`): Images are served as-is for faster builds
- **Production** (`pnpm build`): Images are automatically optimized

## Adding New Images

Simply add images to the `public/` directory and reference them in your code. They will be automatically optimized during the build process.
