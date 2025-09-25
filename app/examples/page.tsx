"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Gamepad2, 
  ShoppingCart, 
  Users, 
  Database,
  Play,
  Copy,
  Check,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

/**
 * Examples page showcasing practical Velvet code examples
 * Interactive examples with different scenarios
 */
export default function ExamplesPage() {
  const [copiedExample, setCopiedExample] = useState<string | null>(null);

  const copyToClipboard = (text: string, exampleId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedExample(exampleId);
    setTimeout(() => setCopiedExample(null), 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🎮 Exemples Pratiques
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Exemples Velvet
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez Velvet à travers des exemples concrets et pratiques. 
            Du jeu vidéo à l'e-commerce, explorez différents cas d'usage.
          </p>
        </div>

        {/* Game Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🎮 Exemple : Jeu Vidéo</h2>
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="concept" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="concept">Concept</TabsTrigger>
                <TabsTrigger value="implementation">Implémentation</TabsTrigger>
                <TabsTrigger value="generated">TypeScript Généré</TabsTrigger>
              </TabsList>

              <TabsContent value="concept" className="mt-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5" />
                      concept.vlv - Système de Jeu
                    </CardTitle>
                    <CardDescription>
                      Architecture complète d'un système de jeu avec inventaire, combat et progression
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline">Jeu RPG</Badge>
                      <button
                        onClick={() => copyToClipboard(gameConcept, "game-concept")}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        {copiedExample === "game-concept" ? (
                          <>
                            <Check className="h-4 w-4 text-green-500" />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copier
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`module Game {
  // Items du jeu
  class GameItem {
    - id: string
    - name: string
    - value: number
    - rarity: ItemRarity
    + use(target: Personnage)
  }

  enum ItemRarity {
    Common
    Rare
    Epic
    Legendary
  }

  // Personnage principal
  class Personnage {
    - id: string
    - name: string
    - level: number
    - experience: number
    - health: number
    - maxHealth: number
    - inventory: GameItem[]
    - equipment: Equipment
    
    + move(direction: Direction)
    + attack(target: Personnage)
    + useItem(item: GameItem)
    + levelUp()
    + takeDamage(amount: number)
  }

  // Équipement
  class Equipment {
    - weapon: Weapon?
    - armor: Armor?
    - accessory: Accessory?
    
    + getTotalStats(): Stats
  }

  // Armes
  class Weapon : GameItem {
    - damage: number
    - durability: number
    - weaponType: WeaponType
    
    + attack(target: Personnage)
  }

  enum WeaponType {
    Sword
    Bow
    Staff
    Dagger
  }

  // Armures
  class Armor : GameItem {
    - defense: number
    - durability: number
    - armorType: ArmorType
    
    + reduceDamage(amount: number): number
  }

  enum ArmorType {
    Helmet
    Chestplate
    Leggings
    Boots
  }

  // Statistiques
  class Stats {
    - strength: number
    - agility: number
    - intelligence: number
    - vitality: number
    
    + calculateHealth(): number
    + calculateDamage(): number
  }

  // Direction de mouvement
  enum Direction {
    North
    South
    East
    West
  }
}`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="implementation" className="mt-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Code Velvet - Personnage
                    </CardTitle>
                    <CardDescription>
                      Implémentation des méthodes principales du personnage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline">Personnage.vlv</Badge>
                      <button
                        onClick={() => copyToClipboard(gameImplementation, "game-impl")}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        {copiedExample === "game-impl" ? (
                          <>
                            <Check className="h-4 w-4 text-green-500" />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copier
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`Personnage {
  id = ""
  name = ""
  level = 1
  experience = 0
  health = 100
  maxHealth = 100
  inventory = []
  equipment = new Equipment()
  
  move(direction: Direction) {
    // Logique de déplacement selon la direction
    switch (direction) {
      case Direction.North:
        // Déplacer vers le nord
        break
      case Direction.South:
        // Déplacer vers le sud
        break
      case Direction.East:
        // Déplacer vers l'est
        break
      case Direction.West:
        // Déplacer vers l'ouest
        break
    }
  }
  
  attack(target: Personnage) {
    if (this.equipment.weapon) {
      const damage = this.equipment.weapon.damage
      target.takeDamage(damage)
    } else {
      // Attaque à mains nues
      target.takeDamage(5)
    }
  }
  
  useItem(item: GameItem) {
    item.use(this)
    // Retirer l'item de l'inventaire après utilisation
    this.inventory = this.inventory.filter(i => i !== item)
  }
  
  levelUp() {
    this.level++
    this.maxHealth += 10
    this.health = this.maxHealth
    // Augmenter les stats
  }
  
  takeDamage(amount: number) {
    const actualDamage = this.equipment.armor?.reduceDamage(amount) ?? amount
    this.health -= actualDamage
    
    if (this.health <= 0) {
      // Le personnage est mort
      this.health = 0
    }
  }
}`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="generated" className="mt-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      TypeScript Généré
                    </CardTitle>
                    <CardDescription>
                      Code TypeScript généré automatiquement par Velvet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline">Personnage.ts</Badge>
                      <button
                        onClick={() => copyToClipboard(gameGenerated, "game-gen")}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        {copiedExample === "game-gen" ? (
                          <>
                            <Check className="h-4 w-4 text-green-500" />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copier
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`export class Personnage {
  private id: string = "";
  private name: string = "";
  private level: number = 1;
  private experience: number = 0;
  private health: number = 100;
  private maxHealth: number = 100;
  private inventory: GameItem[] = [];
  private equipment: Equipment = new Equipment();
  
  public move(direction: Direction): void {
    // Logique de déplacement selon la direction
    switch (direction) {
      case Direction.North:
        // Déplacer vers le nord
        break;
      case Direction.South:
        // Déplacer vers le sud
        break;
      case Direction.East:
        // Déplacer vers l'est
        break;
      case Direction.West:
        // Déplacer vers l'ouest
        break;
    }
  }
  
  public attack(target: Personnage): void {
    if (this.equipment.weapon) {
      const damage = this.equipment.weapon.damage;
      target.takeDamage(damage);
    } else {
      // Attaque à mains nues
      target.takeDamage(5);
    }
  }
  
  public useItem(item: GameItem): void {
    item.use(this);
    // Retirer l'item de l'inventaire après utilisation
    this.inventory = this.inventory.filter(i => i !== item);
  }
  
  public levelUp(): void {
    this.level++;
    this.maxHealth += 10;
    this.health = this.maxHealth;
    // Augmenter les stats
  }
  
  public takeDamage(amount: number): void {
    const actualDamage = this.equipment.armor?.reduceDamage(amount) ?? amount;
    this.health -= actualDamage;
    
    if (this.health <= 0) {
      // Le personnage est mort
      this.health = 0;
    }
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

        {/* E-commerce Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🛒 Exemple : E-commerce</h2>
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="concept" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="concept">Concept</TabsTrigger>
                <TabsTrigger value="implementation">Implémentation</TabsTrigger>
                <TabsTrigger value="generated">TypeScript Généré</TabsTrigger>
              </TabsList>

              <TabsContent value="concept" className="mt-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      concept.vlv - Système E-commerce
                    </CardTitle>
                    <CardDescription>
                      Architecture d'un système e-commerce avec utilisateurs, produits et commandes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline">E-commerce</Badge>
                      <button
                        onClick={() => copyToClipboard(ecommerceConcept, "ecommerce-concept")}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        {copiedExample === "ecommerce-concept" ? (
                          <>
                            <Check className="h-4 w-4 text-green-500" />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copier
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`module ECommerce {
  // Utilisateur
  class User {
    - id: string
    - email: string
    - password: string
    - firstName: string
    - lastName: string
    - address: Address
    - orders: Order[]
    - cart: Cart
    
    + login(email: string, password: string): boolean
    + logout()
    + addToCart(product: Product, quantity: number)
    + checkout(): Order
    + getOrderHistory(): Order[]
  }

  // Adresse
  class Address {
    - street: string
    - city: string
    - postalCode: string
    - country: string
    
    + isValid(): boolean
    + format(): string
  }

  // Produit
  class Product {
    - id: string
    - name: string
    - description: string
    - price: number
    - stock: number
    - category: Category
    - images: string[]
    
    + isAvailable(): boolean
    + reduceStock(quantity: number)
    + increaseStock(quantity: number)
  }

  // Catégorie
  class Category {
    - id: string
    - name: string
    - description: string
    - parentCategory: Category?
    
    + getSubCategories(): Category[]
    + getProducts(): Product[]
  }

  // Panier
  class Cart {
    - items: CartItem[]
    - total: number
    
    + addItem(product: Product, quantity: number)
    + removeItem(productId: string)
    + updateQuantity(productId: string, quantity: number)
    + calculateTotal(): number
    + clear()
  }

  // Item du panier
  class CartItem {
    - product: Product
    - quantity: number
    - price: number
    
    + getSubtotal(): number
  }

  // Commande
  class Order {
    - id: string
    - user: User
    - items: OrderItem[]
    - total: number
    - status: OrderStatus
    - shippingAddress: Address
    - createdAt: Date
    
    + process()
    + ship()
    + cancel()
    + getStatus(): OrderStatus
  }

  // Item de commande
  class OrderItem {
    - product: Product
    - quantity: number
    - price: number
    
    + getSubtotal(): number
  }

  // Statut de commande
  enum OrderStatus {
    Pending
    Processing
    Shipped
    Delivered
    Cancelled
  }
}`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="implementation" className="mt-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Code Velvet - User
                    </CardTitle>
                    <CardDescription>
                      Implémentation des méthodes principales de l'utilisateur
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline">User.vlv</Badge>
                      <button
                        onClick={() => copyToClipboard(ecommerceImplementation, "ecommerce-impl")}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        {copiedExample === "ecommerce-impl" ? (
                          <>
                            <Check className="h-4 w-4 text-green-500" />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copier
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`User {
  id = ""
  email = ""
  password = ""
  firstName = ""
  lastName = ""
  address = new Address()
  orders = []
  cart = new Cart()
  
  login(email: string, password: string): boolean {
    // Vérifier les identifiants
    return this.email === email && this.password === password
  }
  
  logout() {
    // Nettoyer la session
    this.cart.clear()
  }
  
  addToCart(product: Product, quantity: number) {
    if (product.isAvailable()) {
      this.cart.addItem(product, quantity)
    }
  }
  
  checkout(): Order {
    const order = new Order()
    order.user = this
    order.items = this.cart.items.map(item => new OrderItem(item.product, item.quantity, item.price))
    order.total = this.cart.calculateTotal()
    order.status = OrderStatus.Pending
    order.shippingAddress = this.address
    order.createdAt = new Date()
    
    // Ajouter la commande à l'historique
    this.orders.push(order)
    
    // Vider le panier
    this.cart.clear()
    
    return order
  }
  
  getOrderHistory(): Order[] {
    return this.orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }
}`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="generated" className="mt-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      TypeScript Généré
                    </CardTitle>
                    <CardDescription>
                      Code TypeScript généré automatiquement par Velvet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline">User.ts</Badge>
                      <button
                        onClick={() => copyToClipboard(ecommerceGenerated, "ecommerce-gen")}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        {copiedExample === "ecommerce-gen" ? (
                          <>
                            <Check className="h-4 w-4 text-green-500" />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copier
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`export class User {
  private id: string = "";
  private email: string = "";
  private password: string = "";
  private firstName: string = "";
  private lastName: string = "";
  private address: Address = new Address();
  private orders: Order[] = [];
  private cart: Cart = new Cart();
  
  public login(email: string, password: string): boolean {
    // Vérifier les identifiants
    return this.email === email && this.password === password;
  }
  
  public logout(): void {
    // Nettoyer la session
    this.cart.clear();
  }
  
  public addToCart(product: Product, quantity: number): void {
    if (product.isAvailable()) {
      this.cart.addItem(product, quantity);
    }
  }
  
  public checkout(): Order {
    const order = new Order();
    order.user = this;
    order.items = this.cart.items.map(item => new OrderItem(item.product, item.quantity, item.price));
    order.total = this.cart.calculateTotal();
    order.status = OrderStatus.Pending;
    order.shippingAddress = this.address;
    order.createdAt = new Date();
    
    // Ajouter la commande à l'historique
    this.orders.push(order);
    
    // Vider le panier
    this.cart.clear();
    
    return order;
  }
  
  public getOrderHistory(): Order[] {
    return this.orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
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

        {/* More Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🚀 Plus d'Exemples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Gestion d'Utilisateurs</CardTitle>
                <CardDescription>
                  Système d'authentification et de gestion des profils
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Authentification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Profils utilisateurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Rôles et permissions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>API REST</CardTitle>
                <CardDescription>
                  Architecture d'API avec contrôleurs et services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Contrôleurs REST</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Services métier</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Validation des données</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Microservices</CardTitle>
                <CardDescription>
                  Architecture de microservices avec communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Services indépendants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Communication inter-services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Gestion des erreurs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-2 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="text-2xl">Prêt à commencer ?</CardTitle>
              <CardDescription className="text-lg">
                Lancez-vous dans votre premier projet Velvet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/getting-started" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Guide de démarrage
                </a>
                <a 
                  href="/tutorials" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Tutoriels interactifs
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

// Example code strings
const gameConcept = `module Game {
  class GameItem {
    - id: string
    - name: string
    - value: number
    - rarity: ItemRarity
    + use(target: Personnage)
  }

  enum ItemRarity {
    Common
    Rare
    Epic
    Legendary
  }

  class Personnage {
    - id: string
    - name: string
    - level: number
    - experience: number
    - health: number
    - maxHealth: number
    - inventory: GameItem[]
    - equipment: Equipment
    
    + move(direction: Direction)
    + attack(target: Personnage)
    + useItem(item: GameItem)
    + levelUp()
    + takeDamage(amount: number)
  }
}`;

const gameImplementation = `Personnage {
  id = ""
  name = ""
  level = 1
  experience = 0
  health = 100
  maxHealth = 100
  inventory = []
  equipment = new Equipment()
  
  move(direction: Direction) {
    // Logique de déplacement selon la direction
    switch (direction) {
      case Direction.North:
        // Déplacer vers le nord
        break
      case Direction.South:
        // Déplacer vers le sud
        break
      case Direction.East:
        // Déplacer vers l'est
        break
      case Direction.West:
        // Déplacer vers l'ouest
        break
    }
  }
  
  attack(target: Personnage) {
    if (this.equipment.weapon) {
      const damage = this.equipment.weapon.damage
      target.takeDamage(damage)
    } else {
      // Attaque à mains nues
      target.takeDamage(5)
    }
  }
}`;

const gameGenerated = `export class Personnage {
  private id: string = "";
  private name: string = "";
  private level: number = 1;
  private experience: number = 0;
  private health: number = 100;
  private maxHealth: number = 100;
  private inventory: GameItem[] = [];
  private equipment: Equipment = new Equipment();
  
  public move(direction: Direction): void {
    // Logique de déplacement selon la direction
    switch (direction) {
      case Direction.North:
        // Déplacer vers le nord
        break;
      case Direction.South:
        // Déplacer vers le sud
        break;
      case Direction.East:
        // Déplacer vers l'est
        break;
      case Direction.West:
        // Déplacer vers l'ouest
        break;
    }
  }
  
  public attack(target: Personnage): void {
    if (this.equipment.weapon) {
      const damage = this.equipment.weapon.damage;
      target.takeDamage(damage);
    } else {
      // Attaque à mains nues
      target.takeDamage(5);
    }
  }
}`;

const ecommerceConcept = `module ECommerce {
  class User {
    - id: string
    - email: string
    - password: string
    - firstName: string
    - lastName: string
    - address: Address
    - orders: Order[]
    - cart: Cart
    
    + login(email: string, password: string): boolean
    + logout()
    + addToCart(product: Product, quantity: number)
    + checkout(): Order
    + getOrderHistory(): Order[]
  }

  class Product {
    - id: string
    - name: string
    - description: string
    - price: number
    - stock: number
    - category: Category
    - images: string[]
    
    + isAvailable(): boolean
    + reduceStock(quantity: number)
    + increaseStock(quantity: number)
  }
}`;

const ecommerceImplementation = `User {
  id = ""
  email = ""
  password = ""
  firstName = ""
  lastName = ""
  address = new Address()
  orders = []
  cart = new Cart()
  
  login(email: string, password: string): boolean {
    // Vérifier les identifiants
    return this.email === email && this.password === password
  }
  
  logout() {
    // Nettoyer la session
    this.cart.clear()
  }
  
  addToCart(product: Product, quantity: number) {
    if (product.isAvailable()) {
      this.cart.addItem(product, quantity)
    }
  }
}`;

const ecommerceGenerated = `export class User {
  private id: string = "";
  private email: string = "";
  private password: string = "";
  private firstName: string = "";
  private lastName: string = "";
  private address: Address = new Address();
  private orders: Order[] = [];
  private cart: Cart = new Cart();
  
  public login(email: string, password: string): boolean {
    // Vérifier les identifiants
    return this.email === email && this.password === password;
  }
  
  public logout(): void {
    // Nettoyer la session
    this.cart.clear();
  }
  
  public addToCart(product: Product, quantity: number): void {
    if (product.isAvailable()) {
      this.cart.addItem(product, quantity);
    }
  }
}`;
