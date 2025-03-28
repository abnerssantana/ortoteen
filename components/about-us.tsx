"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

export function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"
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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -z-10 top-0 right-0 w-full h-full bg-pink-100 rounded-lg transform translate-x-4 -translate-y-4"></div>
            <img
              src="/placeholder.jpg"
              alt="Dentista atendendo paciente"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            
            {/* Floating element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-pink-200"
            >
              <div className="flex items-center gap-2">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-navy-blue font-semibold text-sm">24 anos<br/>de experiência</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-500 mb-2">
              <span>INOVAÇÃO E CONFORTO NO CUIDADO ODONTOLÓGICO</span>
            </div>
            
            <h2 className="text-3xl font-bold text-navy-blue">
              Especialistas em fazer você <span className="text-pink-500">sorrir</span>
            </h2>
            
            <p className="text-gray-600">
              Seu sorriso é único, e no nosso consultório de odontologia, somos empenhados em oferecer um atendimento
              excepcional que fazem toda a diferença.
            </p>
            
            <div className="space-y-4 mt-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                  <Check className="h-4 w-4 text-pink-500" />
                </div>
                <p className="text-gray-700">24 anos no mercado - Experiência alinhada à modernidade</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                  <Check className="h-4 w-4 text-pink-500" />
                </div>
                <p className="text-gray-700">
                  20 especialidades - Serviços completos nas principais especialidades odontológicas
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                  <Check className="h-4 w-4 text-pink-500" />
                </div>
                <p className="text-gray-700">
                  5 estrelas em satisfação - Nota máxima nas avaliações por nossos clientes
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}