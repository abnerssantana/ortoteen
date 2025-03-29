"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  Sparkles,
  Shield,
  Smile,
  Clock,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Animation variants
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingBadges = [
    { icon: <Shield size={14} />, text: "Segurança Prioritária", delay: 0 },
    { icon: <Smile size={14} />, text: "Tratamentos de Qualidade", delay: 0.8 },
    { icon: <Clock size={14} />, text: "Atendimento Humanizado", delay: 1.6 }
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-10 pb-16 overflow-hidden px-4 bg-light-blue">
      {/* Background wave image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/wave-background.png"
          alt="Background"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-60"
        />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-blue-100 rounded-full blur-3xl opacity-60"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bottom-0 right-1/4 bg-pink-100 rounded-full blur-3xl opacity-50"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pattern-dots text-navy-blue"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-500 mb-4">
                <Sparkles size={14} className="mr-2 text-pink-500" />
                <span>Ortodontia Especializada</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-navy-blue"
            >
              Excelência em <span className="text-pink-500 font-extrabold">Ortodontia</span> desde 2000
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-navy-blue mb-8 max-w-xl"
            >
              Referência em São José do Rio Preto, combinamos tecnologia avançada e
              atendimento especializado para transformar sorrisos em todas as idades.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white rounded-full group"
                asChild
              >
                <Link href="/contato">
                  <Calendar size={16} className="mr-2" />
                  <span>Marque sua consulta</span>
                </Link>
              </Button>

              <div className="flex items-center gap-2 p-2">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Phone className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-pink-500 font-medium">FALE CONOSCO</p>
                  <p className="text-2xl text-navy-blue font-bold">17 98114-1014</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <div className="relative mt-16 hidden md:block">
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: badge.delay,
                    duration: 0.5
                  }}
                  className="absolute"
                  style={{
                    left: `${index * 25}%`,
                    top: `${index * 15}px`
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + index,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm border border-pink-200 text-xs py-1.5 px-3 shadow-sm">
                      <span className="mr-1.5 text-pink-500">{badge.icon}</span>
                      <span className="text-navy-blue">{badge.text}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block" // Adicionado "hidden md:block"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                className="relative z-0"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
              >
                <Image
                  src="/home.png"
                  alt="Paciente em consulta odontológica"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-5 right-10 p-3 bg-white/90 backdrop-blur-sm border border-pink-100 rounded-lg shadow-lg z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <Smile className="h-6 w-6 text-pink-500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-22 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
          <ChevronDown size={20} className="text-pink-500" />
        </div>
      </motion.div>
    </section>
  );
}