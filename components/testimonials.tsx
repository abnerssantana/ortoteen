import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-16 bg-light-blue">
      <div className="container">
        <div className="text-center mb-6">
          <p className="text-pink-500 font-medium uppercase">O QUE NOSSOS PACIENTES DIZEM</p>
          <h2 className="text-3xl font-bold text-navy-blue mt-2">Sorrisos que falam por nós!</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <p className="text-gray-600 mb-4">
              A confiança e o sorriso dos nossos pacientes são nossa maior recompensa. Cada depoimento reflete o
              compromisso em proporcionar um atendimento acolhedor e de excelência em cada consulta.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <TestimonialCard
            name="Victor Hugo"
            text="Desde a primeira consulta, antes do início do tratamento, já pude constatar que a Dra. Taciana era uma ótima profissional, e ela conseguiu passar uma sensação de que todo o processo seria o mais rápido e menos desconfortável possível. Hoje, depois de termos concluído um tratamento de 2 anos em 1 ano e 7 meses, só posso dizer que a impressão inicial não estava à altura."
            rating={5}
          />
          <TestimonialCard
            name="Camila Eduarda"
            text="Excelente profissional desde o começo do tratamento até o fim. Super indico e recomendo. Obrigado por tudo."
            rating={5}
          />
          <TestimonialCard
            name="Luciana Dias"
            text="Maravilhoso desde o atendimento (a Vitória secretária e auxiliar maravilhosa, super educada e prestativa), até seu último dia de tratamento. Profissional ímpar, responsável e muito dedicada!!! Super indico, garanto que ficarão satisfeitos com o resultado. Parabéns Dra Taciana seu atendimento e profissionalismo são impecáveis"
            rating={5}
          />
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button className="p-2 rounded-full bg-pink-100 text-pink-500">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-navy-blue">1 / 2</span>
          <button className="p-2 rounded-full bg-pink-100 text-pink-500">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  text: string
  rating: number
}

function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="pt-6">
        <p className="text-gray-600 text-sm">{text}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-navy-blue">{name}</p>
          </div>
        </div>
        <div className="flex">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
        </div>
      </CardFooter>
    </Card>
  )
}

