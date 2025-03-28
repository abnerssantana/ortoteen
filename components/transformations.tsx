import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Transformations() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-6">
          <p className="text-pink-500 font-medium uppercase">CASOS REAIS</p>
          <h2 className="text-3xl font-bold text-navy-blue mt-2">Transformações que Inspiram</h2>
          <p className="text-gray-600 mt-4">
            Veja o impacto dos nossos tratamentos ortodônticos na vida de nossos pacientes
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <TransformationCard
            title="Correção de mordida cruzada e arcadas estreitas com aparelho invisível"
            duration="Tratamento: 18 meses"
          />
          <TransformationCard
            title="Correção da mordida aberta com aparelho estético"
            duration="Tratamento: 12 meses"
          />
          <TransformationCard title="Fechamento de espaços com aparelho autoligado" duration="Tratamento: 14 meses" />
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button className="p-2 rounded-full bg-pink-100 text-pink-500">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
          <button className="p-2 rounded-full bg-pink-100 text-pink-500">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

interface TransformationCardProps {
  title: string
  duration: string
}

function TransformationCard({ title, duration }: TransformationCardProps) {
  return (
    <Card className="border-none shadow-2xs overflow-hidden">
      <div className="grid grid-cols-1 grid-rows-2 gap-1">
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Antes do tratamento"
          className="w-full h-48 object-cover"
        />
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Depois do tratamento"
          className="w-full h-48 object-cover"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-bold text-navy-blue text-center">{title}</h3>
      </CardContent>
      <CardFooter className="text-center text-gray-500 text-sm">{duration}</CardFooter>
    </Card>
  )
}

