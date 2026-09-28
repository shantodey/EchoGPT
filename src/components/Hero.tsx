"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteContent, type ModelInfo } from "@/content/siteContent"

const { hero, urls } = siteContent


const AI_NODES = siteContent.models.items.map((m, i) => {
  const positions = [
    { x: 55, y: 45 },
    { x: 205, y: 40 },
    { x: 40, y: 120 },
    { x: 220, y: 115 },
    { x: 85, y: 165 },
  ]
  return { ...m, ...positions[i] }
})

export default function Hero(): React.JSX.Element {
  const [activeNode, setActiveNode] = useState<string>("core")

  const selectedNode = AI_NODES.find((m) => m.id === activeNode)

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <Badge  variant="outline"  className="mb-5 py-1 px-3 gap-2 border-[var(--border-strong)] bg-[var(--bg)] text-[var(--ink-soft)] text-xs font-normal">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)] animate-pulse" />
            <span>{hero.badge}</span>
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold tracking-tight leading-[1.12] mb-4 text-[var(--ink)]">
            {hero.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed max-w-[440px] mb-7">
            {hero.description}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Button  asChild  size="lg"  className="bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 font-medium px-5">
              <Link href={urls.chromeExtension} target="_blank" rel="noopener noreferrer">
                {siteContent.navigation.addToChrome}
              </Link>
            </Button>

            <Button  asChild  variant="ghost"  size="lg"  className="text-[var(--ink)] hover:bg-[var(--bg-alt)] group gap-1.5"  style={{
                borderImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23ccc' stroke-width='2' stroke-dasharray='2, 10' stroke-linecap='round'/%3E%3C/svg%3E") 1`,
              }}>
              <Link href="#preview">
                <span>{hero.explore}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center gap-6 text-xs text-[var(--ink-faint)]">
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--ink)] font-semibold">{hero.socialProofCount}</span>
              <span>{hero.socialProofLabel}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <span className="text-[var(--accent-amber)] font-bold">{hero.rating}</span>
              <span>{hero.ratingLabel}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive SVG Mesh */}
        <div className="w-full max-w-[420px] mx-auto lg:max-w-none order-first lg:order-last">
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-[var(--ink-faint)] mb-2 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)]" />
                {hero.activeMesh}
              </span>
              <span>{hero.latency}</span>
            </div>

            <svg  viewBox="0 0 260 200"  role="img"  aria-label={hero.networkAlt}  className="w-full h-auto select-none">
              <circle cx="130" cy="100" r="75" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
              <circle cx="130" cy="100" r="45" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.5" />

              <g>
                {AI_NODES.map((m) => (
                  <line
                    key={m.id}
                    x1="130" y1="100"
                    x2={m.x} y2={m.y}
                    stroke={activeNode === m.id ? m.color : "var(--border-strong)"}
                    strokeWidth={activeNode === m.id ? "2" : "1.2"}
                    className="transition-all duration-300"
                  />
                ))}
              </g>

              <g className="cursor-pointer" onMouseEnter={() => setActiveNode("core")}>
                <circle cx="130" cy="100" r="14" fill="var(--ink)" />
                <circle cx="130" cy="100" r="18" fill="none" stroke="var(--accent-purple)" strokeWidth="1.5" opacity="0.4"
                  className="animate-ping" style={{ transformOrigin: "130px 100px", animationDuration: "3s" }} />
                <text x="130" y="103" textAnchor="middle" fill="var(--bg)" fontSize="8" fontWeight="bold">E</text>
              </g>

              {AI_NODES.map((m) => {
                const isActive = activeNode === m.id
                return (
                  <g key={m.id} className="cursor-pointer"
                    onMouseEnter={() => setActiveNode(m.id)}
                    onMouseLeave={() => setActiveNode("core")}
                  >
                    <circle cx={m.x} cy={m.y} r={isActive ? 8 : 6} fill={m.color} className="transition-all duration-200" />
                    <circle cx={m.x} cy={m.y} r={isActive ? 12 : 9} fill="none" stroke={m.color} strokeWidth="1"
                      opacity={isActive ? 0.8 : 0.2} className="transition-all duration-200" />
                    <text x={m.x} y={m.y < 100 ? m.y - 10 : m.y + 16}
                      textAnchor="middle" fill="var(--ink-soft)" fontSize="7.5" fontWeight="600">
                      {m.name}
                    </text>
                  </g>
                )
              })}
            </svg>

            <div className="mt-3 p-2.5 rounded-[var(--radius-sm)] bg-[var(--bg)] border border-[var(--border)] text-xs flex items-center justify-between">
              {activeNode === "core" || !selectedNode ? (
                <>
                  <span className="text-[var(--ink)] font-medium">{hero.router}</span>
                  <span className="text-[var(--ink-faint)]">{hero.inspect}</span>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedNode.color }} />
                    <span className="font-semibold text-[var(--ink)]">{selectedNode.name}</span>
                    <span className="text-[var(--ink-faint)]">({selectedNode.provider})</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] text-[var(--accent-teal)] border-emerald-500/30">
                    {hero.connected}
                  </Badge>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}