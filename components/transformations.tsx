"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface TransformationCardProps {
  title: string;
  duration: string;
  delay?: number;
}

function TransformationCard({ title, duration, delay = 0 }: TransformationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="border-none shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">
        <div className="grid grid-cols-1 grid-rows-2 gap-1">
          <div className="relative">
            <img
              src="/placeholder.jpg"
              alt="Antes do tratamento"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs py-1 px-2 rounded">Antes</div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.jpg"
              alt="Depois do tratamento"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs py-1 px-2 rounded">Depois</div>
          </div>
        </div>
        <CardContent className="pt-4">
          <h3 className="font-bold text-navy-blue text-center">{title}</h3>
        </CardContent>
        <CardFooter className="text-center text-gray-500 text-sm">{duration}</CardFooter>
      </Card>
    </motion.div>
  );
}

export function Transformations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const transformationsData = [
    {
      title: "Correção de mordida cruzada e arcadas estreitas com aparelho invisível",
      duration: "Tratamento: 18 meses"
    },
    {
      title: "Correção da mordida aberta com aparelho estético",
      duration: "Tratamento: 12 meses"
    },
    {
      title: "Fechamento de espaços com aparelho autoligado",
      duration: "Tratamento: 14 meses"
    }
  ];

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
            className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-500 mb-4"
          >
            <Sparkles size={14} className="mr-2 text-pink-500" />
            <span>CASOS REAIS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold text-navy-blue mb-4"
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

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          {transformationsData.map((transformation, index) => (
            <TransformationCard
              key={transformation.title}
              title={transformation.title}
              duration={transformation.duration}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
          <button className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}