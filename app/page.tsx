'use client';

import Image from "next/image"
import { ArrowRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import NutritionInfo from "@/components/nutrition-info"
import { Faq } from "@/components/faq"
import ComparisonSection from "@/components/comparison-section"
import Link from "next/link"
import NewsletterSection from "./sections/newsletter"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Classic Salted",
      description: "Our original flavor with a perfect balance of salt and crunch, now with added protein.",
      image: "/images/classic-salted.webp",
      accentColor: "#F9A826",
      sizes: [
        { size: "30g", price: 45, id: "classic-salted-30g" },
        { size: "50g", price: 75, id: "classic-salted-50g" },
        { size: "100g", price: 150, id: "classic-salted-100g" },
      ],
    },
    {
      id: 2,
      name: "Indian Masala",
      description: "Bold spices and aromatic herbs create this authentic Indian flavor experience.",
      image: "/images/indian-masala.webp",
      accentColor: "#F26419",
      sizes: [
        { size: "30g", price: 45, id: "indian-masala-30g" },
        { size: "50g", price: 75, id: "indian-masala-50g" },
        { size: "100g", price: 150, id: "indian-masala-100g" },
      ],
    },
  ]

  const upcomingFlavors = [
    {
      id: 3,
      name: "Sour Cream & Onion",
      image: "/images/coming-soon.webp",
      accentColor: "#2A9D8F",
    },
    {
      id: 4,
      name: "Fiery Chili",
      image: "/images/coming-soon.webp",
      accentColor: "#E63946",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center bg-[#F7F7F7]">
        <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-20">
          <div className="flex flex-col justify-center">
            <Image src="/images/crunchfuel-logo.png" alt="CrunchFuel Logo" width={300} height={100} className="mb-6" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#0D0D0D] sm:text-5xl md:text-6xl">
              Protein That <span className="text-[#E63946]">Crunches</span>
            </h1>
            <p className="mb-8 text-xl text-gray-700">
              Premium potato chips with 10% whey protein. The perfect balance of taste and nutrition.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/#product">
                <Button size="lg" className="bg-[#E63946] hover:bg-[#d02331]">
                  Shop Now <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/#aboutus">
                <Button variant="outline" size="lg" className="border-[#1D3557] text-gray-300">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[400px]">
              <Image
                src="/images/hero-product.webp"
                alt="CrunchFuel Hero Product"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0D0D0D] sm:text-4xl">Our Flavors</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover our range of protein-packed chips, crafted for taste and nutrition.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[#1D3557] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">The Protein Difference</h2>
            <p className="mx-auto max-w-2xl text-gray-200">
              See how CrunchFuel stacks up against regular potato chips.
            </p>
          </div>
          <ComparisonSection />
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0D0D0D] sm:text-4xl">Nutrition Information</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We believe in transparency. Here's exactly what goes into our CrunchFuel chips.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <NutritionInfo />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="aboutus" className="bg-[#F7F7F7] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0D0D0D] sm:text-4xl">Our Unique Process</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At CrunchFuel, we've revolutionized the snack industry by developing a proprietary process that
                  infuses premium potato chips with whey protein without compromising on taste or texture.
                </p>
                <p>
                  Our chips are made from carefully selected potatoes, sliced to the perfect thickness, and then cooked
                  in small batches. During our unique manufacturing process, we incorporate high-quality whey protein
                  that seamlessly integrates with the potato starch.
                </p>
                <p>
                  The result? A delicious, crunchy chip that delivers 10% protein by weight – making it the perfect
                  snack for health-conscious individuals who don't want to sacrifice flavor.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image src="/images/manufacturing.webp" alt="Our Manufacturing Process" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0D0D0D] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">Got questions about CrunchFuel? We've got answers.</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Faq />
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-[#1D3557] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Coming Soon</h2>
            <p className="mx-auto max-w-2xl text-gray-200">
              We're always innovating. Check out the exciting new flavors we're working on.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {upcomingFlavors.map((flavor) => (
              <div
                key={flavor.id}
                className="group relative overflow-hidden rounded-lg bg-white p-6 text-[#0D0D0D] shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{flavor.name}</h3>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium text-white"
                    style={{ backgroundColor: flavor.accentColor }}
                  >
                    Coming Soon
                  </span>
                </div>
                <div className="relative mx-auto h-[200px] w-[200px]">
                  <Image
                    src={flavor.image || "/placeholder.svg"}
                    alt={flavor.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 text-center">
                  <Link href="/#newsletter">
                    <Button variant="outline" className="border-[#1D3557] text-gray-300">
                      Get Notified
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  )
}

