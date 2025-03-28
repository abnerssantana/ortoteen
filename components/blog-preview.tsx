"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  date: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

function BlogCard({ date, category, title, description, imageUrl, delay = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
        <div className="relative">
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-4 left-4 bg-white rounded-lg px-2 py-1 text-center shadow-md">
            <p className="text-navy-blue font-bold text-sm">{date.split(" ")[0]}</p>
            <p className="text-navy-blue text-xs">{date.split(" ")[1]}</p>
          </div>
        </div>
        <CardContent className="pt-4">
          <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-200 mb-2">{category}</Badge>
          <h3 className="font-bold text-navy-blue mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
        <CardFooter className="text-gray-500 text-sm">26/2/24</CardFooter>
      </Card>
    </motion.div>
  );
}

export function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const blogPostsData = [
    {
      date: "26 Fev",
      category: "ORTODONTIA",
      title: "Quanto Custa o Tratamento Ortodôntico: Guia Completo de Investimento",
      description: "Entenda os fatores que influenciam o preço do tratamento ortodôntico e descubra...",
      imageUrl: "/placeholder.jpg"
    },
    {
      date: "26 Fev",
      category: "SAÚDE BUCAL",
      title: "Dentes do Siso: Tudo o Que Você Precisa Saber",
      description: "Descubra os desafios, sintomas e quando a remoção dos dentes do siso é necessária...",
      imageUrl: "/placeholder.jpg"
    },
    {
      date: "26 Fev",
      category: "SAÚDE BUCAL",
      title: "Saúde Bucal e Estresse: Como Cuidar do Seu Sorriso em Tempos Difíceis",
      description: "Descubra como o estresse pode afetar sua saúde bucal e aprenda estratégias práticas...",
      imageUrl: "/placeholder.jpg"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"
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
            <span>BLOG</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold text-navy-blue mb-4"
          >
            Dicas para sua saúde bucal
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPostsData.map((post, index) => (
            <BlogCard
              key={post.title}
              date={post.date}
              category={post.category}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/blog" 
            className="flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors group"
          >
            Todos os posts 
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}