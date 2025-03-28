import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-navy-blue">Ortoteen</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/sobre" className="text-navy-blue hover:text-navy-blue/80 transition-colors font-medium">
            Sobre
          </Link>
          <Link href="/servicos" className="text-navy-blue hover:text-navy-blue/80 transition-colors font-medium">
            Serviços
          </Link>
          <Link href="/blog" className="text-navy-blue hover:text-navy-blue/80 transition-colors font-medium">
            Blog
          </Link>
        </nav>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">Agendar Consulta</Button>
      </div>
    </header>
  )
}

