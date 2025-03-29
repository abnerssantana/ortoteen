"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles, ArrowRight, Calendar, Clock, Rss } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/lib/mdx";

interface BlogPreviewProps {
  posts: BlogPost[];
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const formattedDate = formatDate(post.frontMatter.date);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <Card className="overflow-hidden border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
          <div className="relative overflow-hidden">
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={post.frontMatter.coverImage || "/placeholder.jpg"} 
                  alt={post.frontMatter.title} 
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </div>
          
          <CardContent className="pt-4 flex-grow">
            <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{formattedDate}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{post.readingTime.text}</span>
              </div>
            </div>
            
            <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-200 mb-2">{post.frontMatter.category}</Badge>
            <h3 className="font-bold text-navy-blue mb-2 group-hover:text-pink-500 transition-colors text-lg line-clamp-2">{post.frontMatter.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{post.frontMatter.excerpt}</p>
          </CardContent>
          
          <CardFooter className="text-gray-500 text-sm border-t border-pink-50 flex justify-between items-center">
            <span className="text-pink-500 font-medium">Ler mais</span>
            <motion.div 
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 3 }}
            >
              <ArrowRight size={16} className="text-pink-500" />
            </motion.div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      
      {/* Animated background elements */}
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
      
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-100 to-pink-100 blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, -5, 0]
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
            <Rss size={14} className="mr-2 text-white" />
            <span>Blog</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy-blue mb-2"
          >
            Dicas para sua saúde bucal
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Artigos informativos e dicas para manter seu sorriso radiante e sua saúde bucal em dia.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
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
            className="flex items-center text-white bg-pink-500 hover:bg-pink-600 transition-colors group px-6 py-3 rounded-full shadow-md"
          >
            Todos os posts 
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}