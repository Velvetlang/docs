import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Lightbulb,
  FileText,
  Code,
  GitBranch,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

/**
 * Concept page showcasing the core philosophy of Velvet
 * Explains the conception-first approach and key principles
 */
export default function ConceptPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🎯 Conception-First
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Le Concept Velvet
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Velvet révolutionne la programmation en plaçant la <strong>conception</strong>
            au cœur du processus de développement. Concevez d'abord, codez ensuite.
          </p>
        </div>

        {/* Core Philosophy */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">💡 Pourquoi Conception-First ?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Le terme <em>Conception-first</em> peut paraître redondant, mais justement :
                trop de développeurs l'esquivent pour "aller plus vite"… et finissent dans la mouise.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                  💡 Rappel : il vaut mieux modifier un schéma en 30 secondes que du code en 3 jours.
                </p>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Fichier concept.vlv
                </CardTitle>
                <CardDescription>
                  Définissez votre architecture avant d'écrire une seule ligne de code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
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
          </div>
        </section>

        {/* Key Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🏗️ Principes Fondamentaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Fichier Obligatoire</CardTitle>
                <CardDescription>
                  Chaque package contenant des classes doit avoir un fichier concept.vlv
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Décrit les entités et leurs propriétés
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ne contient ni instanciation, ni corps de fonction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Scaffold Automatique</CardTitle>
                <CardDescription>
                  Génération automatique des classes à partir du schéma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Commande: <code>velvet scaffold</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Génère les propriétés et méthodes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Refactor Basé sur Schéma</CardTitle>
                <CardDescription>
                  Validation automatique des modifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Hints automatiques pour les ajouts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Erreurs pour les modifications non planifiées
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🔄 Workflow Velvet</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <CardTitle>Concevoir</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Définissez votre architecture dans concept.vlv
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <CardTitle>Scaffold</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Générez automatiquement vos classes
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <CardTitle>Implémenter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Codez la logique métier dans vos classes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">✨ Avantages</h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <span>Architecture claire dès le départ</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  En définissant votre architecture avant de coder, vous évitez les refactorings
                  coûteux et maintenez une vision claire de votre projet.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span>Développement plus rapide</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Le scaffold automatique vous fait gagner du temps en générant le code boilerplate,
                  vous permettant de vous concentrer sur la logique métier.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Moins d'erreurs</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  La validation automatique détecte les incohérences entre votre schéma et votre code,
                  réduisant les bugs et améliorant la qualité.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <GitBranch className="h-5 w-5 text-purple-500" />
                  <span>Maintenance facilitée</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Les modifications d'architecture sont détectées automatiquement,
                  facilitant la maintenance et l'évolution de votre code.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-2xl">Prêt à découvrir l'architecture ?</CardTitle>
              <CardDescription className="text-lg">
                Explorez les fonctionnalités avancées de Velvet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/architecture"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Découvrir l'architecture
                </a>
                <a
                  href="/syntax"
                  className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Voir la syntaxe
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
