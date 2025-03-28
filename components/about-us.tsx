"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Check, Award, Calendar, Star } from "lucide-react";
import Image from "next/image";

export function AboutUs() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

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
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-blue-100 blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
          ref={ref}
        >
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -z-10 -top-5 -left-5 w-full h-full bg-pink-100 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.div 
              className="absolute -z-20 -bottom-5 -right-5 w-full h-full bg-blue-50 rounded-lg opacity-70"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            {/* Image container with effects */}
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-xl"
              style={{ 
                y: imageY,
                scale: imageScale
              }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              {/* Overlay that appears on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-navy-blue/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end"
              >
                <div className="p-6 text-white">
                  <h3 className="font-semibold text-navy-blue">Dra. Taciana Palamoni</h3>
                  <p className="text-sm text-pink-500">Ortodontista • CRO-SP 12345</p>
                </div>
              </motion.div>
              
              <div className="relative h-[500px] w-full">
                <Image
                  src="/drataciana.jpeg"
                  alt="Dra. Taciana Palamoni - Especialista em Ortodontia"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-pink-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Award className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <p className="text-navy-blue font-bold text-lg">24 anos</p>
                  <p className="text-gray-600 text-sm font-medium">de excelência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div 
              className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-500 mb-2"
              whileHover={{ y: -3, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Dra. Taciana Palamoni</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue">
              Especialista em <span className="text-pink-500 relative">
                Ortodontia
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-pink-200"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                ></motion.span>
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Cirurgiã-Dentista formada pela Universidade de Alfenas - MG (2000), com título de Especialista em Ortodontia e Ortopedia Funcional dos Maxilares pela São Leopoldo Mandic de Campinas - SP (2007). Membro da Sociedade Brasileira de Toxina Botulínica desde 2017.
            </p>

            <div className="space-y-4 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                  <Calendar className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-gray-700 font-medium">24 anos no mercado - Experiência alinhada à modernidade</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-gray-700 font-medium">
                  20 especialidades - Serviços completos nas principais especialidades odontológicas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                  <Star className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-gray-700 font-medium">
                  5 estrelas em satisfação - Nota máxima nas avaliações por nossos clientes
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-8"
            >
              <motion.button
                className="px-8 py-3 bg-pink-500 text-white rounded-full font-medium flex items-center gap-2 hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Agende sua consulta
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}