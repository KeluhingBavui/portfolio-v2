import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { NavigationBar } from '@/components/custom/nav-bar'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: 'Daniel Wan',
    description: 'I plan, design, build, test and deploy software',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={GeistSans.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavigationBar />
                    <main className='container mx-auto'>
                        {children}
                    </main>
                    <footer className="container mx-auto py-4">
                        <Link href="https://github.com/KeluhingBavui/portfolio-v2" target="_blank">
                            <p className="text-center text-sm text-muted-foreground hover:text-white transition-all">
                                © Designed & Built by Daniel Wan Jonathan · 2024
                            </p>
                        </Link>
                    </footer>
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
