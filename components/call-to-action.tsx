import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="rounded-lg bg-navy-blue p-8 md:p-12 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Comece sua transformação hoje
              </h2>
              <p className="mt-4 text-blue-100 md:text-xl">
                Agende uma consulta de avaliação gratuita e descubra o tratamento ideal para o seu sorriso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Agendar Consulta</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

