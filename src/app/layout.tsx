import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/themeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Firefly OS - Minimal & Secure",
  description: "Firefly is a minimal operating system built from scratch in Rust, focusing on safety, efficiency, and modern system programming. It features a custom kernel, memory-safe architecture, and direct hardware control without relying on existing OS frameworks.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
