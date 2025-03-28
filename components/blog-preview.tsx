import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function BlogPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-pink-500 font-medium uppercase">BLOG</p>
          <h2 className="text-3xl font-bold text-navy-blue mt-2">Dicas para sua saúde bucal</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <BlogCard
            date="26 Fev"
            category="ORTODONTIA"
            title="Quanto Custa o Tratamento Ortodôntico: Guia Completo de Investimento"
            description="Entenda os fatores que influenciam o preço do tratamento ortodôntico e descubra..."
            imageUrl="/placeholder.svg?height=200&width=400"
          />
          <BlogCard
            date="26 Fev"
            category="SAÚDE BUCAL"
            title="Dentes do Siso: Tudo o Que Você Precisa Saber"
            description="Descubra os desafios, sintomas e quando a remoção dos dentes do siso é necessária..."
            imageUrl="/placeholder.svg?height=200&width=400"
          />
          <BlogCard
            date="26 Fev"
            category="SAÚDE BUCAL"
            title="Saúde Bucal e Estresse: Como Cuidar do Seu Sorriso em Tempos Difíceis"
            description="Descubra como o estresse pode afetar sua saúde bucal e aprenda estratégias práticas..."
            imageUrl="/placeholder.svg?height=200&width=400"
          />
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/blog" className="flex items-center text-pink-500 font-medium">
            Todos os posts <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  date: string
  category: string
  title: string
  description: string
  imageUrl: string
}

function BlogCard({ date, category, title, description, imageUrl }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm">
      <div className="relative">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-white rounded-lg px-2 py-1 text-center">
          <p className="text-navy-blue font-bold text-sm">{date.split(" ")[0]}</p>
          <p className="text-navy-blue text-xs">{date.split(" ")[1]}</p>
        </div>
      </div>
      <CardContent className="pt-4">
        <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-200 mb-2">{category}</Badge>
        <h3 className="font-bold text-navy-blue mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="text-gray-500 text-sm">26/2/24</CardFooter>
    </Card>
  )
}

