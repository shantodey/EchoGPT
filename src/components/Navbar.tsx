"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/content/siteContent"

const { navigation, urls, brand } = siteContent

export default function Navbar(): React.JSX.Element {
  const { resolvedTheme, setTheme } = useTheme()
  const theme = resolvedTheme === "dark" ? "dark" : "light"
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-200 border-b border-[var(--border)] bg-[var(--bg)]/90">
      <div className="wrap">
        <div className="flex items-center justify-between py-3.5">
          {/* Brand Logo */}
          <Link href={urls.home} className="flex items-center gap-2.5 font-semibold text-[15px] tracking-tight hover:opacity-90 transition-opacity"
            aria-label={brand.homeLabel}>
            <Image
              src={brand.logoSrc}
              alt={brand.logoAlt}
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <span className="text-[var(--ink)] font-bold">{brand.name}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-[13px] text-[var(--ink-soft)] font-medium"
            aria-label={navigation.primaryLabel}
          >
            {navigation.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[var(--ink)] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full border-[var(--border-strong)] bg-transparent text-[var(--ink)] hover:bg-[var(--bg-alt)]"
              aria-label={navigation.themeSwitch(theme)}
              title={navigation.themeSwitch(theme)}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Sign In */}
            <Button  asChild  variant="outline"  size="sm"  className="hidden sm:inline-flex border-[var(--border-strong)] bg-transparent text-[var(--ink)] hover:bg-[var(--bg-alt)]"
            >
              <Link href={urls.login} target="_blank" rel="noopener noreferrer">
                {navigation.signIn}
              </Link>
            </Button>

            {/* Add to Chrome */}
            <Button asChild size="sm" className="btn-primary hover:opacity-90 font-medium">
              <Link href={urls.chromeExtension} target="_blank" rel="noopener noreferrer">
                {navigation.addToChrome}
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden h-8 w-8 border-[var(--border-strong)] bg-transparent text-[var(--ink)]"
              aria-label={navigation.menuToggle}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav
            aria-label={navigation.mobileLabel}
            className="md:hidden flex flex-col gap-2.5 py-4 border-t border-[var(--border)] text-sm animate-in fade-in-50 duration-200"
          >
            {navigation.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-1 text-[var(--ink-soft)] hover:text-[var(--ink)] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                className="w-full justify-center border-[var(--border-strong)]"
              >
                <Link href={urls.login} target="_blank" rel="noopener noreferrer">
                  {navigation.signIn}
                </Link>
              </Button>
              <Button
                asChild
                className="btn-primary w-full justify-center"
              >
                <Link href={urls.chromeExtension} target="_blank" rel="noopener noreferrer">
                  {navigation.addToChrome}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
