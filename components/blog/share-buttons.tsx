"use client";

import { useState, useEffect } from "react";
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  Share2Icon, 
  CheckIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [url, setUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="flex flex-col items-center my-12 space-y-4">
      <h3 className="text-lg font-medium text-navy-blue">Compartilhar</h3>
      <div className="flex space-x-3">
        <motion.div whileHover={{ y: -3 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                "_blank"
              );
            }}
          >
            <FacebookIcon className="h-4 w-4 text-pink-500" />
            <span className="sr-only">Compartilhar no Facebook</span>
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ y: -3 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
                "_blank"
              );
            }}
          >
            <TwitterIcon className="h-4 w-4 text-pink-500" />
            <span className="sr-only">Compartilhar no Twitter</span>
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ y: -3 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              window.open(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                "_blank"
              );
            }}
          >
            <LinkedinIcon className="h-4 w-4 text-pink-500" />
            <span className="sr-only">Compartilhar no LinkedIn</span>
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ y: -3 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={copyToClipboard}
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-green-500" />
            ) : (
              <Share2Icon className="h-4 w-4 text-pink-500" />
            )}
            <span className="sr-only">Copiar link</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}