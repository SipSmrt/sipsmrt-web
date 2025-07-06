"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Shopping cart" className="text-inherit hover:bg-white/10">
          <ShoppingCart className="h-5 w-5 text-inherit" />
        </Button>
      </SheetTrigger>
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
          <Button className="bg-sky-600 hover:bg-sky-700" onClick={() => setIsOpen(false)}>
            Continue Shopping
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
