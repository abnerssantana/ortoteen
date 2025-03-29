"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export function Transformations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const isMobile = useIsMobile();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Dados dos casos de transformação
  const caseGroups = [
    // Primeiro conjunto de casos
    [
      {
        image: "/assets/casos/caso1.jpeg",
        title: "Correção de mordida cruzada e arcadas estreitas com aparelho invisível",
        duration: "Tratamento: 18 meses"
      },
      {
        image: "/assets/casos/caso2.jpeg",
        title: "Correção da mordida aberta com aparelho estético",
        duration: "Tratamento: 12 meses"
      },
      {
        image: "/assets/casos/caso3.jpeg",
        title: "Fechamento de espaços com aparelho autoligado",
        duration: "Tratamento: 14 meses"
      }
    ],
    // Segundo conjunto de casos
    [
      {
        image: "/assets/casos/caso4.jpeg",
        title: "Alinhamento dos dentes",
        duration: "Tratamento: 16 meses"
      },
      {
        image: "/assets/casos/caso5.jpeg",
        title: "Correção de assimetria das arcadas com aparelho fixo",
        duration: "Tratamento: 11 meses"
      },
      {
        image: "/assets/casos/caso6.jpeg",
        title: "Correção de mordida profunda",
        duration: "Tratamento: 20 meses"
      }
    ],
    // Terceiro conjunto de casos
    [
      {
        image: "/assets/casos/caso7.jpeg",
        title: "Avanço mandibular e correção da mordida profunda",
        duration: "Tratamento: 16 meses"
      },
      {
        image: "/assets/casos/caso8.jpeg",
        title: "Correção com Invisalign",
        duration: "Tratamento: 11 meses"
      },
      {
        image: "/assets/casos/caso9.jpeg",
        title: "Arcadas mais largas e alinhadas",
        duration: "Tratamento: 20 meses"
      }
    ]
  ];

  // Flatten the case groups for mobile view
  const allCases = caseGroups.flat();

  // Funções de navegação para desktop
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseGroups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseGroups.length - 1 : prev - 1));
  };

  // Funções de navegação para mobile
  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % allCases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev === 0 ? allCases.length - 1 : prev - 1));
  };

  // Auto-slider functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        if (isMobile) {
          nextCase();
        } else {
          nextSlide();
        }
      }, 6000); // Change slide every 6 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isMobile, currentSlide, currentCase]);

  // Pause auto-rotation when user interacts
  const handleManualNavigation = (callback: () => void) => {
    // Pause auto-rotation
    setIsAutoPlaying(false);
    
    // Execute the navigation callback
    callback();
    
    // Clear existing interval if any
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    // Restart auto-rotation after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-purple rounded-full text-white mb-4"
          >
            <Users size={14} className="mr-2 text-white" />
            <span>Casos reais</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy-blue mb-2"
          >
            Transformações que Inspiram
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Veja o impacto dos nossos tratamentos ortodônticos na vida de nossos pacientes
          </motion.p>
        </motion.div>

        {/* Desktop View (3 cards grid) */}
        {!isMobile && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:grid gap-6 md:grid-cols-3 mt-8"
          >
            {caseGroups[currentSlide].map((caseItem, index) => (
              <motion.div
                key={`desktop-${currentSlide}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="border-none shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 h-full">
                  <div className="relative overflow-hidden pt-[75%]"> {/* 4:3 aspect ratio */}
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-navy-blue text-center line-clamp-2 min-h-12">{caseItem.title}</h3>
                  </CardContent>
                  <CardFooter className="text-center text-gray-500 text-sm">{caseItem.duration}</CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Mobile View (Single card with animation) */}
        {isMobile && (
          <div className="md:hidden mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${currentCase}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-sm"
              >
                <Card className="border-none shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 h-full">
                  <div className="relative overflow-hidden pt-[75%]"> {/* 4:3 aspect ratio */}
                    <Image
                      src={allCases[currentCase].image}
                      alt={allCases[currentCase].title}
                      fill
                      sizes="(max-width: 768px) 100vw"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-navy-blue text-center">{allCases[currentCase].title}</h3>
                  </CardContent>
                  <CardFooter className="text-center text-gray-500 text-sm">{allCases[currentCase].duration}</CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Navigation controls - different for mobile and desktop */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {isMobile ? (
            // Mobile navigation
            <>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleManualNavigation(prevCase)}
                className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
                aria-label="Caso anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <div className="flex gap-2 overflow-x-auto py-2 max-w-[60vw] justify-center">
                {allCases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNavigation(() => setCurrentCase(index))}
                    className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                      index === currentCase ? "bg-pink-500 w-6" : "bg-pink-200"
                    }`}
                    aria-label={`Ver caso ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleManualNavigation(nextCase)}
                className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
                aria-label="Próximo caso"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </>
          ) : (
            // Desktop navigation
            <>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleManualNavigation(prevSlide)}
                className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
                aria-label="Conjunto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <div className="flex gap-2">
                {caseGroups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNavigation(() => setCurrentSlide(index))}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-pink-500 w-6" : "bg-pink-200"
                    }`}
                    aria-label={`Ver conjunto de casos ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleManualNavigation(nextSlide)}
                className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
                aria-label="Próximo conjunto"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}