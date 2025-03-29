"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  coverImage: string;
  delay?: number;
}

export function PostCard({
  slug,
  title,
  excerpt,
  date,
  category,
  readingTime,
  coverImage,
  delay = 0
}: PostCardProps) {
  const formattedDate = formatDate(date);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <Card className="overflow-hidden border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
          <div className="relative overflow-hidden">
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image 
                  src={coverImage || "/placeholder.jpg"} 
                  alt={title} 
                  width={600}
                  height={400}
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
                <span>{readingTime}</span>
              </div>
            </div>
            
            <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-200 mb-2">{category}</Badge>
            <h3 className="font-bold text-navy-blue mb-2 group-hover:text-pink-500 transition-colors text-lg line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
          </CardContent>
          
          <CardFooter className="text-gray-500 text-sm border-t border-pink-50 flex justify-between items-center">
            <span className="text-pink-500 font-medium mt-3">Ler mais</span>
            <motion.div 
              className="text-pink-500 mt-3"
              whileHover={{ x: 3 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
