"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, Sparkles } from "lucide-react";

export function Specialist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-2xl bg-navy-blue p-8 md:p-12 shadow-xl overflow-hidden relative"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />

          <div className="grid gap-8 lg:grid-cols-2 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-300 mb-4">
                <Sparkles size={14} className="mr-2 text-pink-300" />
                <span>ESPECIALISTAS EM FAZER VOCÊ SORRIR</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Inovação e Conforto no Cuidado Odontológico
              </h2>

              <p className="mt-4 text-blue-100 md:text-lg">
                Seu sorriso é único, e no nosso consultório de odontologia, somos empenhados em oferecer um atendimento excepcional com detalhes que fazem toda a diferença.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg group"
                  size="lg"
                  asChild
                >
                  <Link href="/contato" className="flex items-center">
                    <span>Marque Sua Consulta</span>
                    <Phone className="ml-2 group-hover:animate-pulse" size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden">

                <Image
                  src="/taci.png"
                  alt="Dra. Taciana Palamoni - Especialista em Ortodontia"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />

                {/* Light overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-transparent to-transparent opacity-20"></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 pt-8 border-t border-blue-800/50 text-center"
          >
            <p className="text-blue-200 italic">
              "Transformando sorrisos, transformando vidas"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}