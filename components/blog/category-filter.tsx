"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BLOG_CONFIG } from "@/lib/blog-config";
import { useRouter, usePathname } from "next/navigation";

export function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine active category from URL
  const activeCategory = pathname.startsWith('/blog/categoria/') 
    ? pathname.split('/').pop() 
    : '';
  
  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === '') {
      router.push('/blog');
    } else {
      router.push(`/blog/categoria/${categorySlug}`);
    }
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant={activeCategory === '' ? "default" : "outline"}
          className={activeCategory === '' ? "bg-pink-500 hover:bg-pink-600 text-white" : ""}
          onClick={() => handleCategoryChange('')}
        >
          Todos
        </Button>
      </motion.div>
      
      {BLOG_CONFIG.categoriesList.map((category) => (
        <motion.div
          key={category.slug}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant={activeCategory === category.slug ? "default" : "outline"}
            className={activeCategory === category.slug ? "bg-pink-500 hover:bg-pink-600 text-white" : ""}
            onClick={() => handleCategoryChange(category.slug)}
          >
            {category.name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
