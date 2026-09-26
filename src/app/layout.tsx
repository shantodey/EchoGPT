import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { siteContent } from "@/content/siteContent"

const { metadata: meta } = siteContent

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [...meta.keywords],
  authors: [{ name: siteContent.brand.builtBy, url: siteContent.urls.website }],
  creator: siteContent.brand.builtBy,
  openGraph: {
    title: meta.socialTitle,
    description: meta.socialDescription,
    url: siteContent.urls.website,
    siteName: siteContent.brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.socialTitle,
    description: meta.socialDescription,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
