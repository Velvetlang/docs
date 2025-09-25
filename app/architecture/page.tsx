import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Code,
  GitBranch,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

/**
 * Architecture page explaining Velvet's build system and architecture features
 * Covers scaffolding, dependencies, and advanced features
 */
export default function ArchitecturePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🏗️ Architecture & Build
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Architecture Velvet
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Velvet structure vos projets avec un système de build
            intelligent et des fonctionnalités architecturales avancées.
          </p>
        </div>

        {/* Build System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🔨 Système de Build</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Scaffold Automatique</h3>
              <p className="text-muted-foreground mb-6">
                Velvet génère automatiquement vos classes et méthodes à partir de votre schéma conceptuel.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Commande dédiée</p>
                    <code className="text-sm bg-muted px-2 py-1 rounded">velvet scaffold</code>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Intégration IDE</p>
                    <p className="text-sm text-muted-foreground">Support complet dans votre éditeur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Mise à jour intelligente</p>
                    <p className="text-sm text-muted-foreground">Génère uniquement ce qui manque</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Exemple de génération
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="schema" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="schema">Schéma</TabsTrigger>
                    <TabsTrigger value="generated">Généré</TabsTrigger>
                  </TabsList>
                  <TabsContent value="schema" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`class Personnage {
  - inventory : GameItem[]
  + move()
}`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="generated" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`export class Personnage {
  private inventory: GameItem[] = [];
  
  public move(): void {
    throw new Error("Wait for its implementation");
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

        {/* Dependencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🧩 Gestion des Dépendances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Dépendance sans schéma</CardTitle>
                <CardDescription>
                  Utilisable via @blackbox(nomDependanceSansSchema)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Aucun contrôle structurel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Aucune erreur bloquante
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Dépendance avec schéma</CardTitle>
                <CardDescription>
                  Utilisation: @nomDépendance.Entité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Autocomplétion dans schéma
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Hints si utilisé sans conception
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🎭 Fonctionnalités Avancées</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Mock & Testing
                </CardTitle>
                <CardDescription>
                  Création automatique de mocks pour vos tests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Le tag @mock peut être mis sur l'interface ou les classes concrètes.
                  </p>
                  <pre className="bg-muted p-3 rounded text-xs">
                    <code>
{`class Personnage @mock {
  - id @primaryKey
  - name
  - secret @secret @omit
}`}
                    </code>
                  </pre>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Génère modèle EF classique</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Ajoute toDto() automatique</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-blue-500" />
                  Friendship & Visibilité
                </CardTitle>
                <CardDescription>
                  Contrôle d'accès granulaire entre classes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Accès sélectif à des fonctions/propriétés depuis certaines classes.
                  </p>
                  <pre className="bg-muted p-3 rounded text-xs">
                    <code>
{`+ class AuthFactory ~ UtilisateurSecret {
  creerUtilisateur(nom, token) { ... }
}`}
                    </code>
                  </pre>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Limite la création via factory</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Exposition Automatique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🔗 Exposition Automatique</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Délégation automatique de comportement
                </CardTitle>
                <CardDescription>
                  Au lieu de réécrire les méthodes, exposez-les automatiquement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="before" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="before">Avant (TypeScript)</TabsTrigger>
                    <TabsTrigger value="after">Après (Velvet)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="before" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`class Personnage implements CanAttack {
  const attack = new Attack();
  
  const life = attack.life;
  
  + makeDammage(number x) {
    attack.makeDammage(x)
  }
  
  + changeEquipment(){
    attack.changeEquipment(x)
  }
}`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="after" className="mt-4">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`class Personnage {
  var attack = new Attack()
  
  exp attack.CanAttack
}`}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Résultat :</strong> Personnage implémente automatiquement CanAttack
                    et délègue tout le comportement nécessaire aux fonctions d'Attack.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Render & Visualization */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🎨 Visualisation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-purple-500" />
                  Render PlantUML
                </CardTitle>
                <CardDescription>
                  Visualisez votre architecture avec des diagrammes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Commande: <code>velvet --render</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Destination personnalisée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Intégration IDE</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  Extensions du Langage
                </CardTitle>
                <CardDescription>
                  Tags spécifiques pour différents contextes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">@db</Badge>
                    <span className="text-sm">ORM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">@ui</Badge>
                    <span className="text-sm">Interface utilisateur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">@api</Badge>
                    <span className="text-sm">API REST</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl">Prêt à explorer la syntaxe ?</CardTitle>
              <CardDescription className="text-lg">
                Découvrez la syntaxe concise et puissante de Velvet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/syntax"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Découvrir la syntaxe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/examples"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Voir les exemples
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
