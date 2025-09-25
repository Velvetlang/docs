"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Navigation component for the Velvet documentation site
 * Provides responsive navigation with mobile menu
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/concept", label: "Concept" },
    { href: "/architecture", label: "Architecture" },
    { href: "/syntax", label: "Syntaxe" },
    { href: "/examples", label: "Exemples" },
  ];

  return (
    <>
      {/* Development Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">
            🚧 Le langage est en cours de développement - Version alpha
          </span>
        </div>
      </div>
      
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl">Velvet</span>
            <Badge variant="secondary" className="ml-2">
              v0.1
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="ml-4">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" className="w-full mt-4">
                Commencer
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
