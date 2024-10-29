import { GoogleAnalytics } from '@next/third-parties/google'
import { twMerge } from 'tailwind-merge'

import { ThemeProvider } from '@shared/provider'

import { THEME_COLORS } from '@entities/colors'
import { playfairDisplay } from '@entities/fonts'

export async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={twMerge(
          playfairDisplay.className,
          THEME_COLORS.bg,
          THEME_COLORS.text,
          'text-base'
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID!} />
    </html>
  )
}
