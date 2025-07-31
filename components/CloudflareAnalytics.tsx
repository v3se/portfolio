import Script from 'next/script'

interface CloudflareAnalyticsProps {
  token?: string
  src?: string
}

/**
 * Cloudflare Web Analytics component
 * @param {string} token - Cloudflare Analytics token (required)
 * @param {string} src - Custom script source URL (optional, defaults to Cloudflare's CDN)
 */
export const CloudflareAnalytics = ({
  token,
  src = 'https://static.cloudflareinsights.com/beacon.min.js',
}: CloudflareAnalyticsProps) => {
  if (!token) {
    return null
  }

  return <Script strategy="lazyOnload" src={src} data-cf-beacon={JSON.stringify({ token })} defer />
}

export default CloudflareAnalytics
