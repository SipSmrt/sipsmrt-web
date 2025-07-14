"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import {
  Command,
  CommandList,
  CommandItem,
} from "@/components/ui/command"
import { ChevronRight } from "lucide-react"

export function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`lg:hidden ${isScrolled ? "bg-background/20" : "bg-transparent text-white border-white/20"}`}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="start"
        sideOffset={8}
        alignOffset={0}
        className="w-[120px] p-0 z-[9999]"
      >
        <Command>
          <CommandList>

            {/* ABOUT w/ nested submenu */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between px-3 py-2 text-sm font-bold"
                >
                  <span>About</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="right"
                align="start"
                sideOffset={8}
                alignOffset={0}
                className="w-[120px] p-0 z-[9999]"
              >
                <Command>
                  <CommandList>
                    <CommandItem><Link href="/team" className="w-full">The Team</Link></CommandItem>
                    <CommandItem><Link href="/research" className="w-full">Research</Link></CommandItem>
                    <CommandItem><Link href="/fitness" className="w-full">Fitness</Link></CommandItem>
                    <CommandItem><Link href="/healthcare" className="w-full">Healthcare</Link></CommandItem>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <CommandItem><Link href="/mobile-app" className="pl-1 font-bold w-full">The App</Link></CommandItem>
            <CommandItem><Link href="/smrtboot" className="pl-1 font-bold w-full">SmrtBoot</Link></CommandItem>
            <CommandItem><Link href="/contact" className="pl-1 font-bold w-full">Contact</Link></CommandItem>

          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
