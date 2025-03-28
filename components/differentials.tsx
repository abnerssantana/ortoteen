import type React from "react"
import { Shield, Cpu, Users, Heart } from "lucide-react"

export function Differentials() {
  return (
    <section className="py-16 bg-light-blue">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-pink-500 font-medium uppercase">DIFERENCIAIS</p>
          <h2 className="text-3xl font-bold text-navy-blue mt-2">Cuidados especializados com experiência</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Na Ortoteen, priorizamos seu conforto e bem-estar, oferecendo atendimento humanizado e tratamentos
            personalizados que garantem resultados excepcionais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <DifferentialCard
            icon={<Shield className="h-6 w-6 text-purple-600" />}
            title="Segurança Prioritária"
            description="Seguimos rigorosos protocolos de biossegurança para garantir seu atendimento com total tranquilidade"
          />
          <DifferentialCard
            icon={<Cpu className="h-6 w-6 text-purple-600" />}
            title="Tecnologia Avançada"
            description="Utilizamos equipamentos modernos e técnicas inovadoras para garantir tratamentos eficientes e confortáveis"
          />
          <DifferentialCard
            icon={<Users className="h-6 w-6 text-purple-600" />}
            title="Serviços Completos"
            description="Desde consultas preventivas até tratamentos ortodônticos avançados"
          />
          <DifferentialCard
            icon={<Heart className="h-6 w-6 text-purple-600" />}
            title="Atendimento Humanizado"
            description="Recebemos todos os pacientes com empatia e cuidado, sem julgamentos e com total atenção às necessidades"
          />
        </div>
      </div>
    </section>
  )
}

interface DifferentialCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function DifferentialCard({ icon, title, description }: DifferentialCardProps) {
  return (
    <div className="flex gap-4">
      <div className="bg-white p-3 rounded-lg h-fit">{icon}</div>
      <div>
        <h3 className="font-bold text-navy-blue mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

