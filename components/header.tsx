"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
// Import dos componentes do Shadcn
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// Import de ícones
import {
  Menu,
  Phone,
  Calendar,
  X
} from "lucide-react";

// Links de navegação
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Serviços", path: "#services" },
  { name: "Sobre", path: "#sobre" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contato" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Detectar scroll para mudar aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container px-4 sm:px-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-10">
          <motion.span 
            className="text-2xl font-bold text-navy-blue transition-colors hover:text-navy-blue"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Ortoteen
          </motion.span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <ul className="flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={`
                    text-sm font-medium transition-colors hover:text-pink-500 px-3 py-2 inline-block
                    ${pathname === link.path || 
                    (pathname.startsWith(link.path) && link.path !== "/")
                      ? "text-pink-500 font-semibold"
                      : "text-navy-blue"}
                  `}
                >
                  {link.name}
                </Link>
                {/* Indicador de ativo */}
                {(pathname === link.path || 
                 (pathname.startsWith(link.path) && link.path !== "/")) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-pink-500 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-sm ml-4"
            size="sm"
            asChild
          >
            <Link href="/contato" className="flex items-center gap-1.5">
              <Phone size={14} /> 
              <span>Agendar</span>
            </Link>
          </Button>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-navy-blue">
                <Menu size={24} />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0 border-l border-pink-100">
              <div className="flex flex-col h-full bg-white">
                <div className="p-4 border-b border-pink-100 flex justify-between items-center">
                  <Link 
                    href="/" 
                    className="text-xl font-bold text-navy-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    Ortoteen
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-navy-blue"
                  >
                    <X size={18} />
                  </Button>
                </div>
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                  <AnimatePresence>
                    {navLinks.map((link, index) => (
                      <motion.div 
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ 
                          delay: index * 0.05,
                          duration: 0.3
                        }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={link.path}
                            className={`
                              flex items-center text-base font-medium transition-colors py-3 px-3 rounded-md hover:bg-pink-50
                              ${pathname === link.path || 
                              (pathname.startsWith(link.path) && link.path !== "/")
                                ? "text-pink-500 bg-pink-50/50"
                                : "text-navy-blue"}
                            `}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>
                <div className="p-4 border-t border-pink-100 bg-light-blue/30">
                  <SheetClose asChild>
                    <Button
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full"
                      asChild
                    >
                      <Link href="/contato" className="flex items-center justify-center gap-2">
                        <Calendar size={16} />
                        Agendar Consulta
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}