import Link from "next/link"
import { Instagram, Facebook, Clock, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-blue text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-6">
              <img src="/placeholder.svg?height=100&width=100" alt="Logo Ortoteen" className="h-24 w-24" />
            </div>
            <p className="text-blue-100 max-w-md">
              Há mais de duas décadas, buscamos a melhor qualidade na prestação de serviços e cuidados odontológicos
              especializados.
            </p>
            <div className="mt-6">
              <p className="text-white font-medium mb-2">SIGA NAS REDES</p>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="text-white hover:text-pink-300 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://facebook.com" className="text-white hover:text-pink-300 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-4">CONTATO & INFORMAÇÕES</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800 p-2 rounded-full mt-1">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">WHATSAPP</p>
                      <p className="text-white">17 98114-1014</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800 p-2 rounded-full mt-1">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">HORÁRIO DE FUNCIONAMENTO</p>
                      <p className="text-white">09:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800 p-2 rounded-full mt-1">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">ONDE ESTAMOS</p>
                      <p className="text-white">Avenida Emílio Trevisan 655, Sala 609</p>
                      <p className="text-white">Bom Jardim São José do Rio Preto - SP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/sobre" className="text-blue-100 hover:text-white transition-colors">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos" className="text-blue-100 hover:text-white transition-colors">
                      Nossos Serviços
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato" className="text-blue-100 hover:text-white transition-colors">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Serviços</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/servicos/ortodontia" className="text-blue-100 hover:text-white transition-colors">
                      Ortodontia
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos/clareamento" className="text-blue-100 hover:text-white transition-colors">
                      Clareamento
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos/invisalign" className="text-blue-100 hover:text-white transition-colors">
                      Invisalign
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos/prevencao" className="text-blue-100 hover:text-white transition-colors">
                      Prevenção
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>© Dra. Taciana Palamoni - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}

