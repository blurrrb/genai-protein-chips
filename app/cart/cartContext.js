// cartContext.js
import { createContext, useContext, useState, useEffect } from "react";

// Sample product data - in a real app, this would come from your database
const products = {
  "classic-salted-100g": {
    id: "classic-salted-100g",
    name: "Classic Salted",
    size: "100g",
    price: 4.99,
    image: "/images/classic-salted.webp",
  },
  "classic-salted-50g": {
    id: "classic-salted-50g",
    name: "Classic Salted",
    size: "50g",
    price: 2.99,
    image: "/images/classic-salted.webp",
  },
  "classic-salted-30g": {
    id: "classic-salted-30g",
    name: "Classic Salted",
    size: "30g",
    price: 1.99,
    image: "/images/classic-salted.webp",
  },
  "indian-masala-100g": {
    id: "indian-masala-100g",
    name: "Indian Masala",
    size: "100g",
    price: 5.49,
    image: "/images/indian-masala.webp",
  },
  "indian-masala-50g": {
    id: "indian-masala-50g",
    name: "Indian Masala",
    size: "50g",
    price: 2.99,
    image: "/images/indian-masala.webp",
  },
  "indian-masala-30g": {
    id: "indian-masala-30g",
    name: "Indian Masala",
    size: "30g",
    price: 1.99,
    image: "/images/indian-masala.webp",
  },
};

// Initialize cart from localStorage if available
const getInitialCart = () => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  }
  return {};
};

// Create the context
const CartContext = createContext(undefined);

// Create a provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Convert cart object to array for easier rendering
  const cartItems = Object.keys(cart).map((id) => {
    const product = products[id];
    return {
      ...product,
      quantity: cart[id],
    };
  });

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discount / 100);
  const shipping = subtotal > 0 ? 4.99 : 0;
  const total = subtotal - discountAmount + shipping;

  // Add item to cart
  const addToCart = (productId, quantity = 1) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId]) {
        newCart[productId] += quantity;
      } else {
        newCart[productId] = quantity;
      }
      return newCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[productId] = newQuantity;
      return newCart;
    });
  };

  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "TRY_IT") {
      setDiscount(10);
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  // Get total cart count for use in other components
  const getCartCount = () => {
    return Object.values(cart).reduce((total, qty) => total + qty, 0);
  };

  // Clear cart
  const clearCart = () => {
    setCart({});
    setDiscount(0);
    setPromoApplied(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        subtotal,
        discount,
        discountAmount,
        shipping,
        total,
        promoCode,
        setPromoCode,
        promoApplied,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyPromoCode,
        getCartCount,
        clearCart,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  
  return context;
}

// Export the products for use elsewhere if needed
// Export the products for use elsewhere if needed
export { products, CartContext };