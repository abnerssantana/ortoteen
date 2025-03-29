"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Clock, MapPin, Phone } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Image
                src="/placeholder-logo.png"
                alt="Logo Ortoteen"
                width={150}
                height={60}
                className="h-20 w-auto"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-blue-100 max-w-md"
            >
              Há mais de duas décadas, buscamos a melhor qualidade na prestação de serviços e cuidados odontológicos
              especializados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <p className="text-white font-medium mb-2">SIGA NAS REDES</p>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="text-white hover:text-pink-300 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://facebook.com" className="text-white hover:text-pink-300 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4">CONTATO & INFORMAÇÕES</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800 p-2 rounded-full mt-1">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">WHATSAPP</p>
                      <Link
                        href="https://api.whatsapp.com/send?phone=5517981141014&text=Olá,%20eu%20gostaria%20de%20agendar%20uma%20Avaliação!"
                        className="text-white"
                      >
                        17 98114-1014
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800 p-2 rounded-full mt-1">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">HORÁRIO DE FUNCIONAMENTO</p>
                      <p className="text-white">09:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800 p-2 rounded-full mt-1">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">ONDE ESTAMOS</p>
                      <p className="text-white">Avenida Emílio Trevisan 655, Sala 609</p>
                      <p className="text-white">Bom Jardim São José do Rio Preto - SP</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/sobre" className="text-blue-100 hover:text-white transition-colors">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos" className="text-blue-100 hover:text-white transition-colors">
                      Nossos Serviços
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato" className="text-blue-100 hover:text-white transition-colors">
                      Contato
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
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