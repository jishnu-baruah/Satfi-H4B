import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientRoot } from "@/components/ClientRoot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Satsfi",
  description: "Intent-centric DeFi Neobank",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientRoot>
        {children}
          </ClientRoot>
        </ThemeProvider>
      </body>
    </html>
  )
}
