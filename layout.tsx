import Script from 'next/script'
import ClientProviders from '@/components/ClientProviders'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>

        {/* Simple Analytics - Privacy-friendly */}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />

        {/* Conversion Tracking */}
        <Script id="conversion-tracking" strategy="afterInteractive">
          {`
            window.trackEvent = function(eventName, data) {
              if (typeof sa_event !== 'undefined') {
                sa_event(eventName);
              }
              // Add more tracking services as needed
              console.log('Event:', eventName, data);
            };
          `}
        </Script>
      </body>
    </html>
  )
}
