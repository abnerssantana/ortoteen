"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

// Service data from provided array
const HOME_SERVICES = [
  {
    icon: "/assets/icons/home_features_fullservice-d.svg",
    altText: "ortodontia",
    title: "Ortodontia",
    text: "Soluções discretas e confortáveis para corrigir o posicionamento dentário e problemas de mordida."
  },
  {
    icon: "/assets/icons/home_services_implants.svg",
    altText: "restaurações",
    title: "Restaurações",
    text: "Recuperamos a estética e funcionalidade dos seus dentes utilizando materiais de última geração e técnicas avançadas."
  },
  {
    icon: "/assets/icons/home_features_no-judgement.svg",
    altText: "clareamento",
    title: "Clareamento",
    text: "Procedimento não invasivo que remove manchas e descolorações, devolvendo a luminosidade natural aos seus dentes."
  },
  {
    icon: "/assets/icons/home_services_whitening.svg",
    altText: "prevenção",
    title: "Prevenção",
    text: "Nossa abordagem preventiva inclui limpeza profissional, remoção de placa bacteriana e tártaro, aplicação de flúor e selantes."
  },
  {
    icon: "/assets/icons/home_services_dentures.svg",
    altText: "cirurgias",
    title: "Cirurgias",
    text: "Realizamos intervenções específicas como extrações e correções gengivais, com técnicas minimamente invasivas."
  },
  {
    icon: "/assets/icons/home_features_invisalign.png",
    altText: "invisalign",
    title: "Invisalign",
    text: "Transforme seu sorriso sem aparelho fixo. Os alinhadores Invisalign utilizam tecnologia 3D para tratamento transparente."
  },
  {
    icon: "/assets/icons/home_services_whitening.svg",
    altText: "limpeza profissional",
    title: "Limpeza Profissional",
    text: "Essencial para remover placa e tártaro, prevenindo cáries e problemas gengivais para um sorriso saudável."
  },
  {
    icon: "/assets/icons/home_services_dentures.svg",
    altText: "tratamento de bruxismo",
    title: "Tratamento de Bruxismo",
    text: "Abordagem especializada para o hábito involuntário de ranger ou apertar os dentes com soluções personalizadas."
  }
];

// Background colors for each card
const bgColors = [
  "bg-blue-50",
  "bg-red-50",
  "bg-pink-50",
  "bg-indigo-50",
  "bg-green-50",
  "bg-yellow-50", 
  "bg-purple-50",
  "bg-orange-50"
];

interface ServiceCardProps {
  icon: string;
  altText: string;
  title: string;
  description: string;
  bgColor: string;
  delay?: number;
}

function ServiceCard({ icon, altText, title, description, bgColor, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-lg">
        <CardHeader className={`${bgColor} flex items-center justify-center p-6`}>
          <motion.div 
            className="bg-white p-1 rounded-lg shadow-md w-20 h-20 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src={icon} 
              alt={altText} 
              width={100} 
              height={100}
              className="object-contain"
            />
          </motion.div>
        </CardHeader>
        <CardContent className="pt-4 text-center">
          <h3 className="font-bold text-navy-blue mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-pink-400"></div>
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
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
            <span>Nossos Serviços</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy-blue mb-2"
          >
            Agende sua consulta
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Oferecemos atendimento personalizado com as mais modernas técnicas e equipamentos 
            para garantir o melhor tratamento para sua saúde bucal.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {HOME_SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              altText={service.altText}
              title={service.title}
              description={service.text}
              bgColor={bgColors[index % bgColors.length]}
              delay={0.1 + (index * 0.05)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}