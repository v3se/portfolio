import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
  description: 'How we handle your data and privacy on this site.',
})

export default function Privacy() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Privacy Policy
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          How we handle your data and privacy on this site.
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <h2>Information We Collect</h2>
        
        <h3>Analytics Data</h3>
        <p>This site uses privacy-focused analytics to understand how visitors use the site:</p>
        <ul>
          <li><strong>Cloudflare Web Analytics</strong>: Cookie-free, anonymous visitor statistics including page views, referrers, and general location data (country/region level only)</li>
          <li><strong>Umami Analytics</strong>: Privacy-focused, GDPR-compliant analytics that tracks page views and basic usage patterns</li>
        </ul>
        <p>Both services collect only anonymous, aggregated data and cannot identify individual visitors. No personal information is collected or stored.</p>

        <h3>Comments</h3>
        <p>Comments are powered by <strong>Giscus</strong>, which uses GitHub Discussions. When you comment:</p>
        <ul>
          <li>Your GitHub profile information is used according to GitHub's privacy policy</li>
          <li>Comments are stored on GitHub, not on our servers</li>
          <li>You control your GitHub data through your GitHub account settings</li>
        </ul>

        <h3>No Cookies</h3>
        <p>This site does not use tracking cookies or store personal data in your browser.</p>

        <h2>Data Usage</h2>
        <p>The anonymous data we collect is used solely to:</p>
        <ul>
          <li>Understand which content is most valuable to visitors</li>
          <li>Improve site performance and user experience</li>
          <li>Monitor basic site metrics like page views and traffic sources</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>This site uses the following third-party services:</p>
        <ul>
          <li><strong>GitHub</strong> (for comments via Giscus)</li>
          <li><strong>Cloudflare</strong> (for web analytics and CDN)</li>
          <li><strong>Umami</strong> (for privacy-focused analytics)</li>
          <li><strong>Vercel</strong> (for hosting)</li>
        </ul>
        <p>Each service has its own privacy policy governing how they handle data.</p>

        <h2>Your Rights</h2>
        <p>Since we don't collect personal data, there's no personal data to access, modify, or delete. However, you can:</p>
        <ul>
          <li>Disable JavaScript to prevent analytics tracking</li>
          <li>Use browser privacy features or ad blockers</li>
          <li>Contact us with any privacy concerns</li>
        </ul>

        <h2>Contact</h2>
        <p>Questions about this privacy policy? Email: <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a></p>

        <h2>Updates</h2>
        <p>This privacy policy may be updated occasionally. Check this page for the latest version.</p>

        <p><em>Last updated: August 24, 2025</em></p>
      </div>
    </div>
  )
}
