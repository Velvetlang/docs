import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Building, 
  Zap, 
  Shield, 
  GitBranch, 
  Palette,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import Link from "next/link";

/**
 * Home page component showcasing Velvet programming language
 * Features hero section, key features, and code examples
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🌟 Conception-First
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Velvet
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Un langage de programmation conçu pour la <strong>conception-first</strong>, 
              avec une syntaxe concise et des fonctionnalités avancées qui vous permettent 
              de concevoir avant de coder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Voir les exemples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi Velvet ?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Il vaut mieux modifier un schéma en 30 secondes que du code en 3 jours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Conception-First</CardTitle>
                <CardDescription>
                  Définissez votre architecture dans un fichier concept.vlv avant d'écrire une seule ligne de code.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-pink-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Scaffold Automatique</CardTitle>
                <CardDescription>
                  Générez automatiquement vos classes et méthodes à partir de votre schéma conceptuel.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Exposition Automatique</CardTitle>
                <CardDescription>
                  Déléguez automatiquement le comportement entre classes avec le mot-clé exp.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Friendship & Visibilité</CardTitle>
                <CardDescription>
                  Contrôlez l'accès aux propriétés et méthodes avec un système de visibilité granulaire.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Syntaxe Concise</CardTitle>
                <CardDescription>
                  Une syntaxe inspirée de TypeScript mais optimisée pour la conception architecturale.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Multi-langage</CardTitle>
                <CardDescription>
                  Compile vers TypeScript, avec support prévu pour d'autres langages.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Exemples de Code</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez la puissance de Velvet à travers des exemples concrets
            </p>
          </div>

          <Tabs defaultValue="concept" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="concept">Concept</TabsTrigger>
              <TabsTrigger value="implementation">Implémentation</TabsTrigger>
              <TabsTrigger value="generated">Généré</TabsTrigger>
            </TabsList>

            <TabsContent value="concept" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Fichier concept.vlv
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`module Game {
  class GameItem {
    - name: string
    - value: number
  }

  class Personnage {
    - age: number
    - inventory: GameItem[]
    + move()
    + attack(target: Personnage)
  }
}`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="implementation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Code Velvet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`Personnage {
  age = 0
  
  move() {
    // Logique de déplacement
  }
  
  attack(target: Personnage) {
    // Logique d'attaque
  }
}`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="generated" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    TypeScript généré
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`export class Personnage {
  private age: number = 0;
  private inventory: GameItem[] = [];
  
  public move(): void {
    // Logique de déplacement
  }
  
  public attack(target: Personnage): void {
    // Logique d'attaque
  }
}`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez la révolution de la programmation conception-first
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Star className="mr-2 h-5 w-5" />
              Commencer le tutoriel
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Voir la documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
