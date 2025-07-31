# Cloudflare Analytics Integration

This project now includes support for Cloudflare Web Analytics alongside the existing Pliny analytics providers.

## Setup Instructions

1. **Get your Cloudflare Analytics token:**
   - Log in to your Cloudflare dashboard
   - Navigate to "Analytics & Logs" > "Web Analytics"
   - Create a new site or select an existing one
   - Copy the provided analytics token

2. **Configure the environment variable:**
   - Add the following to your `.env.local` file:

   ```
   NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your-cloudflare-token-here
   ```

3. **The analytics will automatically be included** when you build and deploy your site.

## How it works

- The custom `CloudflareAnalytics` component loads the Cloudflare Web Analytics script
- It follows the same pattern as other Pliny analytics providers
- The script is loaded with `lazyOnload` strategy for optimal performance
- Only loads in production mode (same as other analytics providers)

## Configuration

The Cloudflare Analytics configuration is defined in `data/siteMetadata.js`:

```javascript
analytics: {
  // ... other analytics providers
  cloudflareAnalytics: {
    token: process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN,
  },
}
```

## Security

- The Cloudflare Analytics domain (`static.cloudflareinsights.com`) has been added to the Content Security Policy in `next.config.js`
- The token is safely loaded from environment variables

## Verification

When properly configured, you should see a script tag like this in your page source:

```html
<script
  defer
  src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token":"your-token"}'
></script>
```

## Files Modified

- `components/CloudflareAnalytics.tsx` - New custom analytics component
- `data/siteMetadata.js` - Added Cloudflare Analytics configuration
- `app/layout.tsx` - Integrated the component into the main layout
- `next.config.js` - Updated CSP to allow Cloudflare scripts
- `.env.example` - Added example environment variable
