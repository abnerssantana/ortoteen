"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Smile, 
  Shield, 
  Scissors, 
  AlignJustify, 
  Brush, 
  Activity,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  delay?: number;
}

function ServiceCard({ icon, title, description, bgColor, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300">
        <CardHeader className={`${bgColor} flex items-center justify-center p-6`}>
          <motion.div 
            className="bg-white p-3 rounded-lg shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
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

  const servicesData = [
    {
      icon: <Smile className="h-6 w-6 text-purple-600" />,
      title: "Ortodontia",
      description: "Soluções discretas e confortáveis para corrigir o posicionamento dentário e problemas de mordida.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Scissors className="h-6 w-6 text-purple-600" />,
      title: "Cirurgias",
      description: "Realizamos intervenções específicas como extrações e correções gengivais, com técnicas minimamente invasivas.",
      bgColor: "bg-green-50"
    },
    {
      icon: <AlignJustify className="h-6 w-6 text-purple-600" />,
      title: "Invisalign",
      description: "Transforme seu sorriso sem aparelho fixo. Os alinhadores invisalign utilizam tecnologia 3D para tratamento transparente.",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-purple-600" />,
      title: "Clareamento",
      description: "Procedimento não invasivo que remove manchas e descolorações, devolvendo a luminosidade natural aos seus dentes.",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Prevenção",
      description: "Nossa abordagem preventiva inclui limpeza profissional, remoção de placa bacteriana e tártaro, aplicação de flúor e selantes.",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Brush className="h-6 w-6 text-purple-600" />,
      title: "Limpeza Profissional",
      description: "Essencial para remover placa e tártaro, prevenindo cáries e problemas gengivais para um sorriso saudável.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Activity className="h-6 w-6 text-purple-600" />,
      title: "Tratamento de Bruxismo",
      description: "Abordagem especializada para o hábito involuntário de ranger ou apertar os dentes com soluções personalizadas.",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Smile className="h-6 w-6 text-purple-600" />,
      title: "Restaurações",
      description: "Recuperamos a estética e funcionalidade dos seus dentes utilizando materiais de última geração e técnicas avançadas.",
      bgColor: "bg-red-50"
    }
  ];

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
            className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-500 mb-4"
          >
            <Sparkles size={14} className="mr-2 text-pink-500" />
            <span>Nossos Serviços</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold text-navy-blue mb-4"
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
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
              delay={0.1 + (index * 0.05)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}