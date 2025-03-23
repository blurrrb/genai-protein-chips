"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/app/cart/cartContext";


interface ProductSize {
  size: string
  price: number
}

interface Product {
  id: number
  name: string
  description: string
  image: string
  accentColor: string
  sizes: ProductSize[]
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0].size)
  const { toast } = useToast()
  const {addToCart} = useCart();


  const selectedSizeObj = product.sizes.find((size) => size.size === selectedSize)

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    })
    addToCart(selectedSizeObj.id)
  }

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#0D0D0D]">{product.name}</h3>
        <span
          className="rounded-full px-3 py-1 text-xs font-medium text-white"
          style={{ backgroundColor: product.accentColor }}
        >
          10% Protein
        </span>
      </div>
      <p className="mb-6 text-gray-600">{product.description}</p>
      <div className="relative mx-auto h-[200px] w-[200px]">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-6">
        <div className="mb-4">
          <div className="mb-2 font-medium text-[#0D0D0D]">Size</div>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {product.sizes.map((size) => (
                <SelectItem key={size.size} value={size.size}>
                  {size.size} - ${size.price.toFixed(2)}
                  <span className="ml-2 text-[#2A9D8F]">
                    ({size.size === "100g" ? "10g" : size.size === "50g" ? "5g" : "3g"} protein)
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#0D0D0D]">${selectedSizeObj?.price.toFixed(2)}</div>
          <div className="text-sm font-medium text-[#2A9D8F]">
            {selectedSize === "100g" ? "10g protein" : selectedSize === "50g" ? "5g protein" : "3g protein"}
          </div>
        </div>
        <Button onClick={handleAddToCart} className="w-full bg-[#E63946] hover:bg-[#d02331]">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </div>
    </div>
  )
}

