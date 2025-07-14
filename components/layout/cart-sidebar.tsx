// components/cart-sidebar.tsx
"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"

interface CartSidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function CartSidebar({ isOpen, setIsOpen }: CartSidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] z-[200]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <div className="rounded-full bg-gray-100 p-6 mb-4">
            <ShoppingCart className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
          <p className="text-muted-foreground mb-6">Add some products to get started with your hydration journey.</p>
          <button
            className="px-4 py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700"
            onClick={() => setIsOpen(false)}
          >
            Continue Shopping
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
