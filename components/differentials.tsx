"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Cpu, Users, Heart, Sparkles } from "lucide-react";

interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function DifferentialCard({ icon, title, description, delay = 0 }: DifferentialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 group"
    >
      <motion.div 
        className="bg-white p-3 rounded-lg h-fit shadow-sm"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="font-bold text-navy-blue mb-2 group-hover:text-pink-500 transition-colors">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const differentialsData = [
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Segurança Prioritária",
      description: "Seguimos rigorosos protocolos de biossegurança para garantir seu atendimento com total tranquilidade"
    },
    {
      icon: <Cpu className="h-6 w-6 text-purple-600" />,
      title: "Tecnologia Avançada",
      description: "Utilizamos equipamentos modernos e técnicas inovadoras para garantir tratamentos eficientes e confortáveis"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Serviços Completos",
      description: "Desde consultas preventivas até tratamentos ortodônticos avançados"
    },
    {
      icon: <Heart className="h-6 w-6 text-purple-600" />,
      title: "Atendimento Humanizado",
      description: "Recebemos todos os pacientes com empatia e cuidado, sem julgamentos e com total atenção às necessidades"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"
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
            <span>DIFERENCIAIS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold text-navy-blue mb-4"
          >
            Cuidados especializados com experiência
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Na Ortoteen, priorizamos seu conforto e bem-estar, oferecendo atendimento humanizado e tratamentos
            personalizados que garantem resultados excepcionais.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {differentialsData.map((differential, index) => (
            <DifferentialCard
              key={differential.title}
              icon={differential.icon}
              title={differential.title}
              description={differential.description}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}