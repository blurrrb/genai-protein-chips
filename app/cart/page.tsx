'use client';
// cart/page.js
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, Trash2, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/app/cart/cartContext";

export default function CartPage() {
  const { 
    cartItems, 
    subtotal, 
    discount, 
    discountAmount, 
    shipping, 
    total, 
    promoCode, 
    setPromoCode, 
    promoApplied, 
    removeFromCart, 
    updateQuantity, 
    applyPromoCode,
    clearCart
  } = useCart();
  
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  // Handle checkout
  const handleCheckout = () => {
    setShowOrderSuccess(true);
    // In a real app, you would process the order here
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Your Cart</h1>
        <p className="text-white">Review your items before checkout</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border shadow">
              <div className="p-6">
                <div className="hidden border-b pb-4 md:grid md:grid-cols-6">
                  <div className="col-span-3 font-medium text-white">Product</div>
                  <div className="font-medium text-white">Size</div>
                  <div className="font-medium text-white">Quantity</div>
                  <div className="text-right font-medium text-white">Price</div>
                </div>
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid gap-4 py-6 md:grid-cols-6 md:gap-6">
                      <div className="col-span-3 flex items-center gap-4">
                        <div className="relative h-20 w-20 overflow-hidden rounded">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{item.name}</h3>
                          <div className="md:hidden">
                            <div className="mt-1 text-sm text-white">Size: {item.size}</div>
                            <div className="mt-1 text-sm font-medium text-white">${item.price.toFixed(2)}</div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="mt-2 h-8 px-2 text-[#E63946] md:hidden"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>
                      <div className="hidden items-center text-white md:flex">{item.size}</div>
                      <div className="flex items-center">
                        <div className="flex items-center rounded-md border">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <div className="w-12 text-center text-white">{item.quantity}</div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                      </div>
                      <div className="hidden text-right text-white md:block">${(item.price * item.quantity).toFixed(2)}</div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="hidden h-8 px-2 text-[#E63946] md:flex"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#F7F7F7] p-6">
                <Link href="/" className="flex items-center text-sm font-medium text-[#1D3557]">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border shadow">
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-white">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex items-center justify-between text-[#2A9D8F]">
                      <span>Discount (10%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-white">Shipping</span>
                    <span className="text-white">${shipping.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-white">Total</span>
                    <span className="text-white">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="border-t p-6">
                <Button 
                  className="w-full bg-[#E63946] hover:bg-[#d02331]"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
            <div className="mt-6 rounded-lg border p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-white">Have a Promo Code?</h2>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter code" 
                  className="flex-1 text-white" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button 
                  variant="outline" 
                  className="border-[#1D3557] text-[#1D3557]"
                  onClick={applyPromoCode}
                >
                  Apply
                </Button>
              </div>
              <p className="mt-2 text-xs text-gray-400">Try using coupon code "TRY_IT" for 10% off your order!</p>
              {promoApplied && (
                <p className="mt-2 text-sm text-[#2A9D8F]">Promo code applied successfully!</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border p-12 text-center shadow">
          <h2 className="mb-4 text-2xl font-semibold text-white">Your cart is empty</h2>
          <p className="mb-8 text-gray-400">Looks like you haven't added any items to your cart yet.</p>
          <Link href="/">
            <Button className="bg-[#E63946] hover:bg-[#d02331]">Start Shopping</Button>
          </Link>
        </div>
      )}

      {/* Order Success Modal */}
      <Dialog open={showOrderSuccess} onOpenChange={setShowOrderSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Order Placed Successfully!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            <CheckCircle className="mb-4 h-16 w-16 text-[#2A9D8F]" />
            <p className="text-center text-lg">
              Thank you for your order. Your protein-packed snacks will be on their way soon!
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              className="bg-[#E63946] text-white hover:bg-[#d02331]"
              onClick={() => {
                setShowOrderSuccess(false);
                clearCart();
              }}
            >
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}