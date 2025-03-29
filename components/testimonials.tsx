"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Sparkles, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials-data";

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate the indices for the 3 visible testimonials on desktop
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % testimonials.length);
    }
    return indices;
  };

  // Function to go to next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => {
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
  }, [isAutoPlaying, activeIndex]);

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

  const visibleIndices = getVisibleIndices();

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
            <span>O que nossos pacientes dizem</span>
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

        {/* Desktop View (3 testimonials) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleIndices.map((index, i) => (
              <motion.div
                key={`desktop-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: i * 0.1,
                    ease: "easeOut" 
                  }
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                <Card className="h-full bg-white border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <Quote className="text-pink-400 w-8 h-8 mb-4 opacity-60" />
                    <p className="text-gray-600 text-sm">
                      {testimonials[index].quote}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonials[index].avatarSrc || "/placeholder-user.jpg"} />
                        <AvatarFallback>
                          {testimonials[index].author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-navy-blue">{testimonials[index].author}</p>
                        <p className="text-xs text-gray-500">{testimonials[index].role}</p>
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
          </AnimatePresence>
        </div>

        {/* Mobile view (1 testimonial) */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${activeIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="bg-white border-gray-100 shadow-md">
                <CardContent className="pt-6">
                  <Quote className="text-pink-400 w-8 h-8 mb-4 opacity-60" />
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeIndex].quote}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonials[activeIndex].avatarSrc || "/placeholder-user.jpg"} />
                      <AvatarFallback>
                        {testimonials[activeIndex].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-navy-blue">{testimonials[activeIndex].author}</p>
                      <p className="text-xs text-gray-500">{testimonials[activeIndex].role}</p>
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
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <motion.button 
            onClick={() => handleManualNavigation(prevSlide)}
            className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
            aria-label="Depoimento anterior"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => setActiveIndex(index))}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-pink-500 w-6" : "bg-pink-200"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
          <motion.button 
            onClick={() => handleManualNavigation(nextSlide)}
            className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
            aria-label="Próximo depoimento"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}