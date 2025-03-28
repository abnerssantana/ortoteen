"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone } from "lucide-react";

export function CallToAction() {
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
          
          <div className="grid gap-6 lg:grid-cols-2 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Comece sua transformação hoje
              </h2>
              <p className="mt-4 text-blue-100 md:text-xl">
                Agende uma consulta de avaliação gratuita e descubra o tratamento ideal para o seu sorriso.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
            >
              <Button 
                className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg group"
                size="lg"
                asChild
              >
                <Link href="/contato" className="flex items-center">
                  <span>Agendar Consulta</span>
                  <Phone className="ml-2 group-hover:animate-pulse" size={16} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contato">
                  Fale Conosco
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}