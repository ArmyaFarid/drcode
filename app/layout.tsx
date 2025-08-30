import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Farid Armya Ben BAKOUAN - Full Stack Developer",
  description:
    "Full stack developer with 2+ years of experience in designing, deploying, and maintaining scalable web applications. Proficient in Java, PHP, Python, AWS, and DevOps practices.",
  generator: "v0.app",
  keywords: "Full Stack Developer, Java, PHP, Python, AWS, DevOps, Web Development, Burkina Faso",
  authors: [{ name: "Farid Armya Ben BAKOUAN" }],
  openGraph: {
    title: "Farid Armya Ben BAKOUAN - Full Stack Developer",
    description: "Full stack developer specializing in scalable web applications and cloud solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
