import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Ortoteen - Ortodontia para todas as idades",
  description: "Excelência em Ortodontia desde 2000. Referência em São José do Rio Preto, combinamos tecnologia avançada e atendimento especializado para transformar sorrisos em todas as idades.",
  generator: 'Abner Santana - Fastlogia'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  )
}