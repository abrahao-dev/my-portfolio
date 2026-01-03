# Apple SF Pro Fonts Setup

## Overview
This project uses Apple's SF Pro Display and SF Pro Text fonts for an authentic iOS aesthetic. These fonts need to be manually downloaded from Apple's website.

## Download Instructions

1. **Visit Apple's SF Fonts Page:**
   - Go to: https://developer.apple.com/fonts/
   - Click on "SF Pro" to download

2. **Extract the Fonts:**
   - Unzip the downloaded file
   - Locate the `.woff2` font files (or convert from `.otf` if needed)

3. **Required Font Files:**
   Place these files in `src/app/fonts/`:

   **SF Pro Display:**
   - `SF-Pro-Display-Regular.woff2`
   - `SF-Pro-Display-Medium.woff2`
   - `SF-Pro-Display-Semibold.woff2`
   - `SF-Pro-Display-Bold.woff2`

   **SF Pro Text:**
   - `SF-Pro-Text-Regular.woff2`
   - `SF-Pro-Text-Medium.woff2`
   - `SF-Pro-Text-Semibold.woff2`

## Converting OTF to WOFF2 (if needed)

If you only have `.otf` files, convert them using:

### Online Tools:
- https://cloudconvert.com/otf-to-woff2
- https://convertio.co/otf-woff2/

### Command Line (with fonttools):
```bash
pip install fonttools brotli
pyftsubset font.otf --output-file=font.woff2 --flavor=woff2
```

## Fallback Fonts

The app is configured with fallback fonts, so it will use system fonts if SF Pro fonts are not available:
- macOS/iOS: Uses `-apple-system` (SF Pro is the system font)
- Windows: Falls back to 'Segoe UI'
- Linux: Falls back to system sans-serif

## Verification

After adding the font files, restart the dev server:
```bash
npm run dev
```

The fonts should load automatically. Check browser DevTools → Network tab to verify font loading.

## License Note

Apple SF Pro fonts are proprietary and subject to Apple's licensing terms. They are free to use for developing apps for Apple platforms but check the license for commercial usage restrictions.
