import { Button } from "@/components/ui/button"

export function Specialist() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-navy-blue rounded-lg -z-10 transform -translate-x-4 -translate-y-4"></div>
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Dra. Taciana Palamoni"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-pink-500 font-medium uppercase">DRA. TACIANA PALAMONI</p>
            <h2 className="text-3xl font-bold text-navy-blue">Especialista em Ortodontia</h2>
            <p className="text-gray-600">
              Cirurgia Dentista Formada pela Universidade de Alfenas MG (2000). Título de Especialista em Ortodontia e
              Ortopedia Funcional dos Maxilares pela São Leopoldo Mandic de Campinas SP (2007). Membro da Sociedade
              Brasileira de Toxina Botulínica (2017).
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full mt-4">Marque sua consulta</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

