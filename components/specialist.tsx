"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Award, GraduationCap, Phone } from "lucide-react";
import Link from "next/link";

export function Specialist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-pink-400"></div>
      <motion.div
        className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-navy-blue rounded-lg -z-10 transform -translate-x-4 -translate-y-4"></div>
            <img
              src="/placeholder.jpg"
              alt="Dra. Taciana Palamoni"
              className="w-full rounded-lg object-cover shadow-xl"
            />

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg border border-navy-blue/10"
            >
              <div className="flex items-center gap-2">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-navy-blue font-medium text-sm">Especialista em<br />Ortodontia</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg border border-navy-blue/10"
            >
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-navy-blue font-medium text-sm">Formada pela<br />Universidade de Alfenas</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-500 mb-2">
              <Sparkles size={14} className="mr-2 text-pink-500" />
              <span>DRA. TACIANA PALAMONI</span>
            </div>

            <h2 className="text-3xl font-bold text-navy-blue">
              Especialista em Ortodontia
            </h2>

            <p className="text-gray-600">
              Cirurgia Dentista Formada pela Universidade de Alfenas MG (2000). Título de Especialista em Ortodontia e
              Ortopedia Funcional dos Maxilares pela São Leopoldo Mandic de Campinas SP (2007). Membro da Sociedade
              Brasileira de Toxina Botulínica (2017).
            </p>

            <div className="space-y-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="bg-pink-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-navy-blue font-medium">Experiência Comprovada</p>
                  <p className="text-sm text-gray-600">Mais de 20 anos de atuação especializada</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-navy-blue font-medium">Formação Especializada</p>
                  <p className="text-sm text-gray-600">Constante atualização em técnicas avançadas</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-pink-500 hover:bg-pink-600 text-white rounded-full group"
                size="lg"
                asChild
              >
                <Link href="/contato">
                  <span>Marque sua consulta</span>
                  <Phone className="ml-2 group-hover:scale-110 transition-transform" size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}