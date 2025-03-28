"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  baseUrl: string;
}

export function Pagination({ totalPages, currentPage, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;
  
  // Only show up to 5 page numbers
  const pageNumbers = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
    if (totalPages <= 5) return i + 1;
    
    // If the current page is near the beginning
    if (currentPage <= 3) return i + 1;
    
    // If the current page is near the end
    if (currentPage >= totalPages - 2) return totalPages - 4 + i;
    
    // If the current page is in the middle
    return currentPage - 2 + i;
  });
  
  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {currentPage > 1 && (
        <motion.div whileHover={{ x: -2 }}>
          <Button 
            variant="outline" 
            size="icon"
            asChild
          >
            <Link href={`${baseUrl}/${currentPage - 1}`}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Link>
          </Button>
        </motion.div>
      )}
      
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={currentPage === pageNumber ? "default" : "outline"}
          className={currentPage === pageNumber ? "bg-pink-500 hover:bg-pink-600" : ""}
          size="sm"
          asChild
        >
          <Link href={`${baseUrl}/${pageNumber}`}>
            {pageNumber}
          </Link>
        </Button>
      ))}
      
      {currentPage < totalPages && (
        <motion.div whileHover={{ x: 2 }}>
          <Button 
            variant="outline" 
            size="icon"
            asChild
          >
            <Link href={`${baseUrl}/${currentPage + 1}`}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Link>
          </Button>
        </motion.div>
      )}
    </div>
  );
}