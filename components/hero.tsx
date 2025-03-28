import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-light-blue py-16">
      <div className="absolute inset-0 z-0">
        <svg className="h-full w-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-122 231.107C-15.1667 154.44 252.4 15.5067 466 59.1067C679.6 102.707 758.167 334.44 784 446.107C837.833 405.44 968.9 343.707 1074.5 410.107C1180.1 476.507 1232.33 554.44 1245 584.607C1303.17 552.94 1435.8 504.507 1502 561.107C1568.2 617.707 1557.67 726.44 1546 774.607"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />
          <path
            d="M-122 331.107C-15.1667 254.44 252.4 115.507 466 159.107C679.6 202.707 758.167 434.44 784 546.107C837.833 505.44 968.9 443.707 1074.5 510.107C1180.1 576.507 1232.33 654.44 1245 684.607C1303.17 652.94 1435.8 604.507 1502 661.107C1568.2 717.707 1557.67 826.44 1546 874.607"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="container relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-navy-blue">
              Excelência em Ortodontia desde 2000
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Referência em São José do Rio Preto, próximo ao Plaza Shopping. Combinamos tecnologia avançada e
              atendimento especializado para todas as idades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">Marque sua consulta</Button>
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-full">
                  <Phone className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-pink-500 font-medium">FALE CONOSCO</p>
                  <p className="text-navy-blue font-medium">17 98114-1014</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Paciente em consulta odontológica"
                className="rounded-lg object-cover"
                width={500}
                height={400}
              />
              <div className="absolute top-4 left-4 bg-purple-600 p-2 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 3C8.5 3 5.5 5.5 5.5 9C5.5 10.3 6 11.5 7 12.5L12 17.5L17 12.5C18 11.5 18.5 10.3 18.5 9C18.5 5.5 15.5 3 12 3Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-16 text-center">
        <h2 className="text-3xl font-bold text-navy-blue">Seu sorriso perfeito, nossa especialidade.</h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-2"></div>
      </div>
    </section>
  )
}

