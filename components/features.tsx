import { Smile, Shield, Clock, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-blue">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl">Por que escolher a Ortoteen para o tratamento ortodôntico</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Smile className="h-10 w-10 text-pink-500" />
              <CardTitle className="text-navy-blue">Especialistas em Adolescentes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Profissionais especializados no tratamento ortodôntico para adolescentes, compreendendo suas
                necessidades específicas.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-pink-500" />
              <CardTitle className="text-navy-blue">Tecnologia Avançada</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Utilizamos as técnicas e equipamentos mais modernos para garantir tratamentos eficientes e confortáveis.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-pink-500" />
              <CardTitle className="text-navy-blue">Tratamentos Rápidos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Métodos que reduzem o tempo de tratamento sem comprometer a qualidade e os resultados.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Award className="h-10 w-10 text-pink-500" />
              <CardTitle className="text-navy-blue">Resultados Garantidos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Compromisso com a excelência e satisfação dos nossos pacientes, com resultados duradouros.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

