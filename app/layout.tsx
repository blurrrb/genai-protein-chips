'use client';
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider, useCart } from "@/app/cart/cartContext";

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "CrunchFuel - Premium Potato Chips with 10% Whey Protein",
//   description:
//     "Protein that crunches. Delicious potato chips with 10% whey protein for the perfect balance of taste and nutrition.",
//     generator: 'v0.dev'
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CartProvider>
      <RootLayoutHTML children={children}/>
    </CartProvider>
  )
}

function RootLayoutHTML({  children }: Readonly<{ children: React.ReactNode}>) {
  const {getCartCount} = useCart();

  return (<html lang="en">
    <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <header className="sticky top-0 z-50 border-b bg-white">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/crunchfuel-logo.png" alt="CrunchFuel Logo" width={150} height={50} />
            </Link>
            <nav className="hidden md:flex md:items-center md:gap-6">
              <Link href="/#product" className="text-sm font-medium text-[#0D0D0D] transition-colors hover:text-[#E63946]">
                Products
              </Link>
              <Link href="/#nutrition" className="text-sm font-medium text-[#0D0D0D] transition-colors hover:text-[#E63946]">
                Nutrition
              </Link>
              <Link href="/#aboutus" className="text-sm font-medium text-[#0D0D0D] transition-colors hover:text-[#E63946]">
                About Us
              </Link>
              <Link href="/#faq" className="text-sm font-medium text-[#0D0D0D] transition-colors hover:text-[#E63946]">
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/cart">
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E63946] text-xs text-white">
                    {getCartCount()}
                  </span>
                </Button>
              </Link>
              <Link href="/#product">
                <Button className="hidden bg-[#E63946] hover:bg-[#d02331] md:inline-flex">Shop Now</Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t bg-[#F7F7F7]">
          <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <Image
                  src="/images/crunchfuel-logo.png"
                  alt="CrunchFuel Logo"
                  width={150}
                  height={50}
                  className="mb-4"
                />
                <p className="text-sm text-gray-600">
                  Premium potato chips with 10% whey protein. The perfect balance of taste and nutrition.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-[#0D0D0D]">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#products" className="text-gray-600 hover:text-[#E63946]">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/#nutirtion" className="text-gray-600 hover:text-[#E63946]">
                      Nutrition
                    </Link>
                  </li>
                  <li>
                    <Link href="/#aboutus" className="text-gray-600 hover:text-[#E63946]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="text-gray-600 hover:text-[#E63946]">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-[#0D0D0D]">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-600">Email: info@crunchfuel.com</li>
                  <li className="text-gray-600">Phone: +1 (555) 123-4567</li>
                  <li className="text-gray-600">Address: 123 Snack Street, Crunchville, CF 12345</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-[#0D0D0D]">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" className="text-gray-600 hover:text-[#E63946]">
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link href="https://instagram.com" className="text-gray-600 hover:text-[#E63946]">
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                  <Link href="https://x.com" className="text-gray-600 hover:text-[#E63946]">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
              <p>© {new Date().getFullYear()} CrunchFuel. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Toaster />
      </ThemeProvider>
    </body>
  </html>)
}


import './globals.css'