import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SmileIcon as Tooth, Smile, Sparkles, Shield, Scissors, AlignJustify, Brush, Activity } from "lucide-react"

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <p className="text-pink-500 font-medium uppercase">SERVIÇOS</p>
          <h2 className="text-3xl font-bold text-navy-blue mt-2">Agende sua consulta</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <ServiceCard
            icon={<Tooth className="h-6 w-6 text-purple-600" />}
            title="Ortodontia"
            description="Soluções discretas e confortáveis para corrigir o posicionamento dentário e problemas de mordida."
            bgColor="bg-blue-50"
          />
          <ServiceCard
            icon={<Smile className="h-6 w-6 text-purple-600" />}
            title="Restaurações"
            description="Recuperamos a estética e funcionalidade dos seus dentes utilizando materiais de última geração e técnicas avançadas."
            bgColor="bg-indigo-50"
          />
          <ServiceCard
            icon={<Sparkles className="h-6 w-6 text-purple-600" />}
            title="Clareamento"
            description="Procedimento não invasivo que remove manchas e descolorações, devolvendo a luminosidade natural aos seus dentes."
            bgColor="bg-pink-50"
          />
          <ServiceCard
            icon={<Shield className="h-6 w-6 text-purple-600" />}
            title="Prevenção"
            description="Nossa abordagem preventiva inclui limpeza profissional, remoção de placa bacteriana e tártaro, aplicação de flúor e selantes."
            bgColor="bg-red-50"
          />
          <ServiceCard
            icon={<Scissors className="h-6 w-6 text-purple-600" />}
            title="Cirurgias"
            description="Realizamos intervenções específicas como extrações e correções gengivais, com técnicas minimamente invasivas."
            bgColor="bg-green-50"
          />
          <ServiceCard
            icon={<AlignJustify className="h-6 w-6 text-purple-600" />}
            title="Invisalign"
            description="Transforme seu sorriso sem aparelho fixo. Os alinhadores invisalign utilizam tecnologia 3D para tratamento transparente."
            bgColor="bg-yellow-50"
          />
          <ServiceCard
            icon={<Brush className="h-6 w-6 text-purple-600" />}
            title="Limpeza Profissional"
            description="Essencial para remover placa e tártaro, prevenindo cáries e problemas gengivais para um sorriso saudável."
            bgColor="bg-purple-50"
          />
          <ServiceCard
            icon={<Activity className="h-6 w-6 text-purple-600" />}
            title="Tratamento de Bruxismo"
            description="Abordagem especializada para o hábito involuntário de ranger ou apertar os dentes com soluções personalizadas."
            bgColor="bg-orange-50"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos atendimento personalizado com as mais modernas técnicas e equipamentos para garantir o melhor
            tratamento para sua saúde bucal.
          </p>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  bgColor: string
}

function ServiceCard({ icon, title, description, bgColor }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-2xs">
      <CardHeader className={`${bgColor} flex items-center justify-center p-6`}>
        <div className="bg-white p-3 rounded-lg shadow-2xs">{icon}</div>
      </CardHeader>
      <CardContent className="pt-4 text-center">
        <h3 className="font-bold text-navy-blue mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

