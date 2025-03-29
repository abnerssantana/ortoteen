"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Sparkles, Quote } from "lucide-react";

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
}

export function Testimonials () {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: TestimonialData[] = [
    {
      quote: "Desde a primeira consulta, antes do início do tratamento, já pude constatar que a Dra. Taciana era uma ótima profissional, e ela conseguiu passar uma sensação de que todo o processo seria o mais rápido e menos desconfortável possível. Hoje, depois de termos concluído um tratamento de 2 anos em 1 ano e 7 meses, só posso dizer que a impressão inicial não estava à altura.",
      author: "Victor Hugo",
      role: "Paciente há 2 anos"
    },
    {
      quote: "Excelente profissional desde o começo do tratamento até o fim. Super indico e recomendo. Obrigado por tudo.",
      author: "Camila Eduarda",
      role: "Paciente há 1 ano"
    },
    {
      quote: "Maravilhoso desde o atendimento (a Vitória secretária e auxiliar maravilhosa, super educada e prestativa), até seu último dia de tratamento. Profissional ímpar, responsável e muito dedicada!!! Super indico, garanto que ficarão satisfeitos com o resultado. Parabéns Dra Taciana seu atendimento e profissionalismo são impecáveis",
      author: "Luciana Dias",
      role: "Paciente há 3 anos"
    }
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setActiveSlide((prev) => {
      if (prev === 0) return testimonials.length - 1;
      return prev - 1;
    });
  };

  // Auto-rotation functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change testimonial every 5 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-rotation when user interacts
  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false);
    callback();
    
    // Restart auto-rotation after 10 seconds of inactivity
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section 
      ref={ref} 
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-pink-400"></div>
      <motion.div 
        className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"
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
            className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-purple text-white mb-4"
          >
            <Sparkles size={14} className="mr-2 text-white" />
            <span>O QUE NOSSOS PACIENTES DIZEM</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy-blue mb-2"
          >
            Sorrisos que falam por nós!
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { 
                opacity: index === activeSlide ? 1 : 0.5, 
                y: 0,
                scale: index === activeSlide ? 1 : 0.95
              } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.2,
                ease: "easeOut" 
              }}
              className={`${index !== activeSlide ? "hidden md:block" : ""}`}
            >
              <Card className={`bg-white ${index === activeSlide ? 'border-pink-200 shadow-lg' : 'border-gray-100'}`}>
                <CardContent className="pt-6">
                  <Quote className="text-pink-400 w-8 h-8 mb-4 opacity-60" />
                  <p className="text-gray-600 text-sm">
                    {index === activeSlide ? (
                      <motion.span
                        key={`full-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {testimonial.quote}
                      </motion.span>
                    ) : (
                      <motion.span
                        key={`truncated-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="line-clamp-3"
                      >
                        {testimonial.quote}
                      </motion.span>
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-navy-blue">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile view for testimonials - Show only active */}
        <div className="md:hidden mt-8">
          <Card className="bg-white border-pink-200 shadow-lg">
            <CardContent className="pt-6">
              <Quote className="text-pink-400 w-8 h-8 mb-4 opacity-60" />
              <motion.p 
                key={activeSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 text-sm"
              >
                {testimonials[activeSlide].quote}
              </motion.p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>
                    {testimonials[activeSlide].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-navy-blue">{testimonials[activeSlide].author}</p>
                  <p className="text-xs text-gray-500">{testimonials[activeSlide].role}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button 
            onClick={() => handleManualNavigation(prevSlide)}
            className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => setActiveSlide(index))}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeSlide ? "bg-pink-500 w-6" : "bg-pink-200"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={() => handleManualNavigation(nextSlide)}
            className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}