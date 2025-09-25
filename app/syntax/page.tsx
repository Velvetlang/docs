import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Eye, 
  Lock, 
  Users, 
  GitBranch, 
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Layers
} from "lucide-react";

/**
 * Syntax page showcasing Velvet's language syntax
 * Covers visibility, interfaces, classes, and advanced features
 */
export default function SyntaxPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🔣 Syntaxe du Langage
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Syntaxe Velvet
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une syntaxe concise et puissante, inspirée de TypeScript mais optimisée 
            pour la conception architecturale et l'approche conception-first.
          </p>
        </div>

        {/* Language Overview */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Caractéristiques du Langage
                </CardTitle>
                <CardDescription>
                  Fichier .vlv, full OOP, compilé AOT via ANTLR
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Full OOP avec héritage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Compilation AOT (Ahead of Time)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Grammaire ANTLR</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Compatible TypeScript</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Exceptions vérifiées</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Override des opérateurs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Design patterns intégrés</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Multi-langage</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visibility System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">👁️ Système de Visibilité</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contrôle d'Accès Granulaire</h3>
              <p className="text-muted-foreground mb-6">
                Velvet propose un système de visibilité explicite avec des symboles clairs 
                pour chaque niveau d'accès.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono">+</Badge>
                  <span>Public - Accessible partout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono">-</Badge>
                  <span>Private - Accessible uniquement dans la classe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono">#</Badge>
                  <span>Protected - Accessible dans la hiérarchie</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono">~</Badge>
                  <span>Friendship-private - Contrôle granulaire</span>
                </div>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Exemple de Visibilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
{`class Personnage {
  - age: number          // Private
  # health: number        // Protected
  + name: string         // Public
  ~ secret: string       // Friendship-private
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interfaces */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🔌 Interfaces</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Définition d'Interface
                </CardTitle>
                <CardDescription>
                  Propriétés et fonctions NON IMPLEMENTES, tout est PUBLIC uniquement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="interface" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="interface">Interface</TabsTrigger>
                    <TabsTrigger value="implementation">Implémentation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="interface" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`interface IHero {
  something: number
  faire()
  autre()
}`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="implementation" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`class Lancelot : IHero {
  something = 0
  
  faire() {
    // Implémentation
  }
  
  autre() {
    // Implémentation
  }
}`}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Classes & Inheritance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🏛️ Classes & Héritage</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-blue-500" />
                  Héritage Classique
                </CardTitle>
                <CardDescription>
                  OOP classique avec support des abstractions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
{`abstract class Animal {
  # {abstract} cry()
  + move()
}

class Dog : Animal {
  {ovr} cry() // Override
  {ovr} move() // Override
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-500" />
                  Classes Sealed par Défaut
                </CardTitle>
                <CardDescription>
                  Sécurité par défaut, héritage explicite
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Classes non abstraites sont sealed par défaut</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Pour autoriser l'héritage : <code>open class</code></span>
                  </div>
                  <pre className="bg-muted p-3 rounded text-xs">
                    <code>
{`open class BaseClass {
  // Héritage autorisé
}

class SealedClass {
  // Héritage interdit par défaut
}`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">⚡ Fonctionnalités Avancées</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Méthodes Statiques
                </CardTitle>
                <CardDescription>
                  Mot-clé "stc" dans le schéma, syntaxe normale dans le code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="schema" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="schema">Schéma</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="schema" className="mt-4">
                    <pre className="bg-muted p-3 rounded text-xs">
                      <code>
{`class Animal {
  + {stc} cry()
}`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="code" className="mt-4">
                    <pre className="bg-muted p-3 rounded text-xs">
                      <code>
{`Animal {
  cry() {
    // Méthode statique
  }
}`}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-green-500" />
                  Empty Classes
                </CardTitle>
                <CardDescription>
                  Typedef avec mot-clé empty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
{`class Personnage

empty Protagonist : Personnage
empty Enemy : Personnage`}
                  </code>
                </pre>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Permet d'utiliser Protagonist ou Enemy comme des classes différentes 
                    sans générer de fichier séparé.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Operator Overloading */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🔢 Override des Opérateurs</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Opérateurs Personnalisés
                </CardTitle>
                <CardDescription>
                  Override d'opérateurs très basique pour les opérations courantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="schema" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="schema">Schéma</TabsTrigger>
                    <TabsTrigger value="implementation">Implémentation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="schema" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`class Wallet {
  oprt plus(Wallet operand)
  oprt minus(Wallet operand)
  oprt multiply(Wallet operand)
  oprt divide(Wallet operand)
  oprt equals(Wallet operand)
}`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="implementation" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`Wallet {
  plus(Wallet operand) {
    this.quantity + operand.quantity
  }
  minus(Wallet operand) { /* ... */ }
  multiply(Wallet operand) { /* ... */ }
  divide(Wallet operand) { /* ... */ }
  equals(Wallet operand) { /* ... */ }
}`}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Design Patterns */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🧰 Design Patterns Intégrés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  TClone
                </CardTitle>
                <CardDescription>
                  Pattern Clone automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-3 rounded text-xs">
                  <code>
{`class Ammo : TClone { ... }`}
                  </code>
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                  ➡️ Génère automatiquement une méthode Clone()
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-blue-500" />
                  TFactory
                </CardTitle>
                <CardDescription>
                  Pattern Factory automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-3 rounded text-xs">
                  <code>
{`class User : TFactory { ... }`}
                  </code>
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                  ➡️ Génère automatiquement des méthodes de création
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-green-500" />
                  TBuilder
                </CardTitle>
                <CardDescription>
                  Pattern Builder automatique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-3 rounded text-xs">
                  <code>
{`class Config : TBuilder { ... }`}
                  </code>
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                  ➡️ Génère automatiquement un builder fluent
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-2xl">Prêt à voir des exemples ?</CardTitle>
              <CardDescription className="text-lg">
                Découvrez Velvet en action avec des exemples concrets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/examples" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Voir les exemples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href="/getting-started" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  Guide de démarrage
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
