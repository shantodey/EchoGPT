"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {  Sheet,  SheetContent,  SheetHeader,  SheetTitle,  SheetTrigger,} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import logo from "@/app/Asset/logo.png"
import Image from "next/image"
import Link from "next/link"

const navItems = ["Blog", "Careers", "Government"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="pointer-events-none fixed inset-0 z-50">
      <nav className="relative h-full w-full">
        {/* Center Logo */}
        <div className={cn("pointer-events-auto absolute left-1/2 top-9 -translate-x-1/2","flex items-center justify-center rounded-full",
          "border border-white/70 bg-white/65 backdrop-blur-xl","shadow-sm","transition-all duration-500 ease-out",scrolled  ?
           "h-10 w-10"  : "h-11 w-[385px] px-5")}>
          <Image src={logo} alt="Logo" className={cn("shrink-0 object-contain transition-all duration-300", scrolled ? "h-5 w-5" : "h-5 w-5")} />

          <span className={cn("overflow-hidden whitespace-nowrap text-sm font-medium text-neutral-900", "transition-all duration-300", scrolled ? "ml-0 max-w-0 opacity-0" : "ml-2 max-w-[100px] opacity-100")}>  EchoGPT</span>
        </div>

        {/* Desktop Left */}
        <div className="pointer-events-auto absolute left-9 top-9 hidden lg:block">
          <div className="flex items-center rounded-full border border-white/70 bg-white/65 p-1 backdrop-blur-xl shadow-sm">
            {navItems.map((item) => (
              <Link key={item} href="#" className="rounded-full px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-black/5 hover:text-neutral-900">{item}</Link>
              
            ))}
          </div>
        </div>

        {/* Tablet + Mobile Left */}
        <div className="pointer-events-auto absolute bottom-5 left-5 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button  variant="ghost"  size="icon"  className="h-11 w-11 rounded-full border border-white/70 bg-white/65 backdrop-blur-xl shadow-sm hover:bg-white/80"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent  side="left"  className="border-white/30 bg-white/90 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link  key={item}  href="#"   className="rounded-xl px-4 py-3 text-sm text-neutral-700 hover:bg-black/5">
                     {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Right Side */}
        <div className="pointer-events-auto absolute bottom-5 right-5 lg:bottom-auto lg:right-9 lg:top-9">
          <div className="flex items-center rounded-full border border-white/70 bg-white/65 p-1 backdrop-blur-xl shadow-sm">
            <Button  variant="ghost"  className="rounded-full px-4 text-sm font-normal text-neutral-600 hover:bg-black/5 hover:text-neutral-900 sm:px-5">
              Sign In
            </Button>

            <Button className="rounded-full bg-neutral-800 px-4 text-sm font-medium text-white hover:bg-neutral-700 sm:px-5">
              Book a demo
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}