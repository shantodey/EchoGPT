import React from "react"
import Link from "next/link"
import { Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteContent } from "@/content/siteContent"

const { cta, urls, navigation } = siteContent

export default function CtaBand(): React.JSX.Element {
  return (
    <section
      className="py-20 md:py-24 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1C1B18, #2A2340)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent-purple)]/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="wrap relative z-10 max-w-[680px]">
        <Badge
          variant="outline"
          className="mb-6 py-1 px-3 gap-1.5 border-white/10 bg-white/5 text-[var(--cream)] text-xs font-mono"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{cta.badge}</span>
        </Badge>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold text-[var(--cream)] tracking-tight mb-4 leading-tight">
          {cta.title}
        </h2>

        <p className="text-sm sm:text-base text-[var(--border-strong)] mb-8 max-w-[440px] mx-auto leading-relaxed">
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="px-6 py-3 text-sm font-semibold rounded-[var(--radius-sm)] shadow-lg hover:scale-105 transition-all duration-200"
            style={{ background: "var(--cream)", color: "#1C1B18" }}
          >
            <Link href={urls.chromeExtension} target="_blank" rel="noopener noreferrer">
              {navigation.addToChrome}
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-[var(--cream)] border-white/20 hover:bg-white/10"
          >
            <Link href="#features">{cta.seeFeatures}</Link>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[var(--border-strong)]/80 flex-wrap">
          {cta.benefits.map((b) => (
            <span key={b} className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
