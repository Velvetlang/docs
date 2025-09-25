import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";

/**
 * Footer component for the Velvet documentation site
 * Provides links to social media and project information
 */
export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl">Velvet</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Un langage de programmation conçu pour la conception-first, 
              avec une syntaxe concise et des fonctionnalités avancées.
            </p>
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/concept" className="text-muted-foreground hover:text-foreground transition-colors">
                  Concept
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="text-muted-foreground hover:text-foreground transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/syntax" className="text-muted-foreground hover:text-foreground transition-colors">
                  Syntaxe
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  Exemples
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">
                  Guide de démarrage
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="text-muted-foreground hover:text-foreground transition-colors">
                  Référence API
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tutoriels
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold">Communauté</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/velvet-lang" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com/velvet_lang" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Velvet. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 md:mt-0">
            Fait avec <Heart className="h-4 w-4 mx-1 text-red-500" /> par l'équipe Velvet
          </p>
        </div>
      </div>
    </footer>
  );
}
