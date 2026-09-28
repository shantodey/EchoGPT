"use client"

import React, { useState } from "react"
import { Check, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { siteContent, type ModelInfo } from "@/content/siteContent"

const { models } = siteContent

export default function ModelPicker(): React.JSX.Element {
  const [selectedModel, setSelectedModel] = useState<ModelInfo>(models.items[0])

  return (
    <section id="models" className="py-16 md:py-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div>
          <Badge variant="outline" className="mb-2 text-xs uppercase tracking-wider font-mono border-[var(--border-strong)] text-[var(--ink-faint)]">
            {models.eyebrow}
          </Badge>
          <h2 className="section-title">{models.title}</h2>
          <p className="section-sub mb-6">{models.description}</p>

          <div className="space-y-3.5">
            {models.benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center text-xs shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <p className="text-sm text-[var(--ink-soft)] leading-normal">
                  <strong className="text-[var(--ink)]">{b.title}</strong> {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Model Panel */}
        <Card className="bg-[var(--dark-card)] text-[var(--cream)] rounded-[var(--radius-lg)] p-6 sm:p-7 shadow-xl ring-0">
          <div className="flex items-center justify-between text-xs text-[var(--dark-text-faint)] mb-4">
            <span className="font-mono uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>{models.chooseModel}</span>
            </span>
            <Badge variant="secondary" className="bg-white/10 text-[var(--cream)] border-0 text-[10px]">
              {models.available}
            </Badge>
          </div>

          {/* Model Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {models.items.map((m) => {
              const isSelected = selectedModel.id === m.id
              return (
                <Button
                  key={m.id}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedModel(m)}
                  className={`rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "bg-[var(--cream)] text-[var(--dark)] hover:bg-[var(--cream)] shadow-sm font-semibold scale-105"
                      : "bg-[var(--dark-card-2)] border-white/10 text-[var(--cream)] hover:bg-white/20"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: m.color }} />
                  <span>{m.name}</span>
                </Button>
              )
            })}
          </div>

          {/* Model Details */}
          <div className="bg-[var(--dark-card-2)] border border-white/10 rounded-[var(--radius-md)] p-4 sm:p-5 transition-all duration-300">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 flex-wrap gap-2">
              <div>
                <div className="text-base font-semibold text-[var(--cream)]">{selectedModel.version}</div>
                <div className="text-xs text-[var(--dark-text-faint)]">
                  {models.providerLabel} {selectedModel.provider}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] font-mono border-white/10 text-[var(--dark-text-soft)]">
                  {selectedModel.context}
                </Badge>
                <Badge variant="outline" className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  {selectedModel.speed}
                </Badge>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[var(--dark-text-soft)] leading-relaxed mb-4">
              {selectedModel.description}
            </p>

            <div className="flex items-center justify-between text-[11px] text-[var(--dark-text-faint)] pt-2 border-t border-white/5">
              <span>{models.ready}</span>
              <span className="text-[var(--accent-teal)] font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)] animate-pulse" />
                {models.connected}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
