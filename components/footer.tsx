"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Clock, MapPin, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <footer ref={ref} className="bg-navy-blue text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-blue-400"></div>
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Image 
                src="/flogo.png"
                alt="Logo Ortoteen" 
                width={220} 
                height={90}
                className="h-auto w-auto" 
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-blue-100 max-w-md text-center md:text-left mb-8"
            >
              Há mais de duas décadas, buscamos a melhor qualidade na prestação de serviços e 
              cuidados odontológicos especializados, transformando sorrisos e vidas em São José do Rio Preto.
            </motion.p>
          </motion.div>
          
          {/* Column 2: Social Media */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">REDES SOCIAIS</h3>
            <div className="flex gap-6">
              <Link href="https://instagram.com/dratacianapalamoni" 
                className="text-white hover:text-pink-300  flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-pink-500 p-3 rounded-full hover:bg-pink-500/90 ">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="text-xs mt-2">Instagram</span>
              </Link>
              
              <Link href="https://tiktok.com/@dratacianapalamoni" 
                className="text-white hover:text-pink-300  flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-pink-500 p-3 rounded-full hover:bg-pink-500/30 ">
                  <FaTiktok className="h-6 w-6" />
                </div>
                <span className="text-xs mt-2">TikTok</span>
              </Link>
            </div>
          </motion.div>
          
          {/* Column 3: Contact information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">CONTATO & INFORMAÇÕES</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <div className="bg-pink-500 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">WHATSAPP</p>
                  <Link 
                    href="https://api.whatsapp.com/send?phone=5517981141014&text=Olá,%20eu%20gostaria%20de%20agendar%20uma%20Avaliação!" 
                    className="text-white text-lg hover:text-pink-300 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    17 98114-1014
                  </Link>
                  <p className="text-blue-200 text-sm mt-1">Clique para enviar mensagem</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <div className="bg-pink-500 p-3 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">HORÁRIO DE ATENDIMENTO</p>
                  <p className="text-white text-lg">Segunda a Sexta</p>
                  <p className="text-blue-200 text-sm">09:00 - 18:00</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <div className="bg-pink-500 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">ENDEREÇO</p>
                  <p className="text-white">Avenida Emílio Trevisan 655, Sala 609</p>
                  <p className="text-white">Bom Jardim - São José do Rio Preto - SP</p>
                  <Link 
                    href="https://maps.google.com/?q=Avenida+Emílio+Trevisan+655,+Sala+609,+São+José+do+Rio+Preto" 
                    className="text-blue-200 text-sm hover:text-pink-300 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no Google Maps →
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-100"
        >
          <p>© {new Date().getFullYear()} Dra. Taciana Palamoni - Todos os direitos reservados</p>
        </motion.div>
      </div>
    </footer>
  );
}