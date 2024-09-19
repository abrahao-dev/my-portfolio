import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Link from 'next/link'
import { Code } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matheus Abrahão - Software Engineer',
  description: 'Backend and Mobile Developer | Swift | C | Java | SQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
              <nav className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <Code className="h-6 w-6" />
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Matheus Abrahão</span>
                </Link>
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                    About
                  </Link>
                  <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
                    Projects
                  </Link>
                  <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                    Contact
                  </Link>
                  <ModeToggle />
                </div>
              </nav>
            </div>
          </header>
          <main className="container mx-auto mt-8 px-4">
            {children}
          </main>
          <footer className="mt-8 p-4 bg-background text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Matheus Abrahão. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}