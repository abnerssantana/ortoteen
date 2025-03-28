import { Check } from "lucide-react"

export function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-full h-full bg-pink-100 rounded-lg transform translate-x-4 -translate-y-4"></div>
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Dentista atendendo paciente"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-pink-500 font-medium uppercase">INOVAÇÃO E CONFORTO NO CUIDADO ODONTOLÓGICO</p>
            <h2 className="text-3xl font-bold text-navy-blue">Especialistas em fazer você sorrir</h2>
            <p className="text-gray-600">
              Seu sorriso é único, e no nosso consultório de odontologia, somos empenhados em oferecer um atendimento
              excepcional que fazem toda a diferença.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-2">
                <div className="bg-pink-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-pink-500" />
                </div>
                <p className="text-gray-700">24 anos no mercado - Experiência alinhada à modernidade</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-pink-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-pink-500" />
                </div>
                <p className="text-gray-700">
                  20 especialidades - Serviços completos nas principais especialidades odontológicas
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-pink-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-pink-500" />
                </div>
                <p className="text-gray-700">
                  5 estrelas em satisfação - Nota máxima nas avaliações por nossos clientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

