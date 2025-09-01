# Image Setup Guide

## Required Images

This portfolio requires the following images to be placed in the `public/` directory:

### 1. Profile Image
- **File**: `public/profile.jpg`
- **Size**: 400x400px (square)
- **Format**: JPG or WebP
- **Usage**: Profile photo in about page and social media
- **Current**: Placeholder file (replace with actual photo)

### 2. Open Graph Image
- **File**: `public/og-image.jpg`
- **Size**: 1200x630px (16:9 ratio)
- **Format**: JPG or WebP
- **Usage**: Social media sharing (Facebook, Twitter, LinkedIn)
- **Current**: Placeholder file (replace with actual image)

### 3. Apple Touch Icon
- **File**: `public/apple-touch-icon.png`
- **Size**: 180x180px (square)
- **Format**: PNG
- **Usage**: iOS home screen icon
- **Current**: Placeholder file (replace with actual icon)

### 4. Resume PDF
- **File**: `public/resume.pdf`
- **Format**: PDF
- **Usage**: Downloadable resume
- **Current**: Placeholder file (replace with actual resume)

## Image Optimization

### Recommended Tools
- **Image Compression**: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Format Conversion**: Convert to WebP for better performance
- **Resizing**: Use [Canva](https://canva.com/) or [Figma](https://figma.com/)

### Best Practices
1. **Compress images** to reduce file size
2. **Use WebP format** when possible for better performance
3. **Optimize for web** (72 DPI is sufficient)
4. **Keep file sizes under 500KB** for profile images
5. **Use descriptive filenames** for better SEO

## Implementation

The portfolio includes a custom `Image` component that handles:
- **Loading states** with skeleton animation
- **Error fallbacks** to placeholder images
- **Next.js Image optimization** for better performance
- **Responsive design** with proper aspect ratios

### Usage Example
```tsx
import { Image } from '@/components/ui/image'

<Image
  src="/profile.jpg"
  alt="Matheus Abrahão - Software Engineer"
  width={400}
  height={400}
  className="rounded-full"
  priority={true}
/>
```

## Current Status

✅ **Services page removed** - No longer accessible at `/services`
✅ **Navigation updated** - Services links removed from menu
✅ **Language set to Portuguese** - Default language is now `pt-BR`
✅ **Image placeholders created** - Ready for actual images
✅ **Build successful** - No TypeScript or linting errors
✅ **SEO optimized** - Proper meta tags and structured data

## Next Steps

1. **Replace placeholder images** with actual photos and graphics
2. **Add your resume PDF** to the public directory
3. **Test social media sharing** with the OG image
4. **Verify mobile responsiveness** on different devices
5. **Test language switching** between Portuguese and English

## File Structure

```
public/
├── profile.jpg          # Your profile photo
├── og-image.jpg         # Social media sharing image
├── apple-touch-icon.png # iOS home screen icon
├── resume.pdf          # Downloadable resume
├── favicon.ico         # Browser favicon (already exists)
└── manifest.json       # PWA manifest (already exists)
```

## Performance Notes

- All images are optimized using Next.js Image component
- Lazy loading is enabled for non-critical images
- Placeholder images show during loading
- Error states gracefully fall back to placeholders
- Images are automatically optimized for different screen sizes
