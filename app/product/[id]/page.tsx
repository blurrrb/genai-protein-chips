'use client';
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const product = {
    id: params.id,
    name: params.id === "1" ? "Classic Salted" : "Indian Masala",
    description:
      params.id === "1"
        ? "Our original flavor with a perfect balance of salt and crunch, now with added protein."
        : "Bold spices and aromatic herbs create this authentic Indian flavor experience.",
    longDescription:
      "Experience the perfect balance of crunch and flavor with our premium CrunchFuel chips. Made from carefully selected potatoes and infused with high-quality whey protein, these chips deliver a satisfying snack experience with the added benefit of 10% protein content. Whether you're looking for a post-workout treat or a more nutritious alternative to regular chips, CrunchFuel are the perfect choice for the health-conscious snacker who doesn't want to compromise on taste.",
    image: params.id === "1" ? "/images/classic-salted.webp" : "/images/indian-masala.webp",
    accentColor: params.id === "1" ? "#F9A826" : "#F26419",
    images: [
      "/images/classic-salted.webp",
      "/images/indian-masala.webp",
      "/images/coming-soon.webp",
      "/images/hero-product.webp",
    ],
    sizes: [
      { size: "30g", price: 1.99 },
      { size: "50g", price: 2.99 },
      { size: "100g", price: 4.99 },
    ],
    ingredients:
      "Potatoes, Sunflower Oil, Whey Protein Isolate (10%), Salt, Natural Flavors, Yeast Extract, Onion Powder, Garlic Powder.",
    nutritionalInfo: [
      { name: "Calories", value: "150 kcal" },
      { name: "Protein", value: "10g" },
      { name: "Carbohydrates", value: "15g" },
      { name: "Fat", value: "9g" },
      { name: "Fiber", value: "1g" },
      { name: "Salt", value: "0.5g" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[#1D3557]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg border bg-white">
            <div className="relative aspect-square">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-white">
                <div className="relative aspect-square">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl font-bold text-[#0D0D0D]">{product.name} CrunchFuel</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-[#F9A826] text-[#F9A826]" />
                <Star className="h-5 w-5 fill-[#F9A826] text-[#F9A826]" />
                <Star className="h-5 w-5 fill-[#F9A826] text-[#F9A826]" />
                <Star className="h-5 w-5 fill-[#F9A826] text-[#F9A826]" />
                <Star className="h-5 w-5 text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(42 reviews)</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-[#2A9D8F]/20 px-2.5 py-0.5 text-xs font-medium text-[#2A9D8F]">
                In Stock
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                style={{ backgroundColor: product.accentColor }}
              >
                10% Protein
              </span>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-[#0D0D0D]">Description</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-[#0D0D0D]">Size</h2>
              <RadioGroup defaultValue="100g" className="mt-2 flex gap-4">
                {product.sizes.map((size) => (
                  <div key={size.size} className="flex flex-col items-center">
                    <Label
                      htmlFor={`size-${size.size}`}
                      className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-lg border bg-white p-2 text-center shadow-sm [&:has(:checked)]:border-[#E63946] [&:has(:checked)]:ring-1 [&:has(:checked)]:ring-[#E63946]"
                    >
                      <RadioGroupItem id={`size-${size.size}`} value={size.size} className="sr-only" />
                      <span className="text-sm font-medium">{size.size}</span>
                      <span className="text-xs text-[#2A9D8F]">
                        {size.size === "100g" ? "10g" : size.size === "50g" ? "5g" : "3g"} protein
                      </span>
                    </Label>
                    <span className="mt-1 text-sm font-medium">${size.price.toFixed(2)}</span>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md border">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none">
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="w-12 text-center">1</div>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
              <div className="text-2xl font-bold text-[#0D0D0D]">$4.99</div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="flex-1 bg-[#E63946] hover:bg-[#d02331]">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1 border-[#1D3557] text-[#1D3557]">
                <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="h-8 px-2 text-[#1D3557]">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4 space-y-4">
              <p className="text-gray-600">{product.longDescription}</p>
              <ul className="ml-6 list-disc text-gray-600">
                <li>10% protein content</li>
                <li>No artificial colors or preservatives</li>
                <li>Suitable for vegetarians</li>
                <li>Gluten-free</li>
                <li>Made with premium potatoes</li>
              </ul>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-4">
              <p className="text-gray-600">{product.ingredients}</p>
              <p className="mt-4 text-sm text-gray-500">
                Allergen Information: Contains milk. Manufactured in a facility that also processes soy and nuts.
              </p>
            </TabsContent>
            <TabsContent value="nutrition" className="mt-4">
              <div className="rounded-lg border">
                <div className="border-b bg-[#F7F7F7] p-4">
                  <h3 className="text-sm font-semibold">Nutrition Facts</h3>
                  <p className="text-xs text-gray-500">Per 100g serving</p>
                </div>
                <div className="divide-y p-4">
                  {product.nutritionalInfo.map((item) => (
                    <div key={item.name} className="flex justify-between py-2">
                      <span className={item.name === "Protein" ? "font-bold text-[#2A9D8F]" : "text-gray-600"}>
                        {item.name}
                      </span>
                      <span className={item.name === "Protein" ? "font-bold text-[#2A9D8F]" : "text-gray-600"}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

