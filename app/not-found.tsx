"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 bg-light-blue">
      {/* Background wave image - same as hero */}
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

      <div className="container max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-pink-500 mb-4">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Página não encontrada</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Ops! Parece que o sorriso que você está procurando não está aqui. 
            A página que você tentou acessar não existe ou pode ter sido movida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            className="bg-white border border-pink-200 text-pink-500 hover:bg-pink-50 group"
            size="lg"
            asChild
          >
            <Link href="javascript:history.back()">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Link>
          </Button>

          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white group"
            size="lg"
            asChild
          >
            <Link href="/">
              <Home size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              Página inicial
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}