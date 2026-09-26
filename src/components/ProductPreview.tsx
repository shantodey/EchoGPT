"use client"

import React, { useState } from "react"
import { Send, Plus, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { siteContent } from "@/content/siteContent"

const { preview } = siteContent

export default function ProductPreview(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [inputVal, setInputVal] = useState<string>("")

  const current = preview.conversations[activeTab]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputVal.trim()) setInputVal("")
  }

  return (
    <section id="preview" className="dark-band py-16 md:py-24 text-[var(--cream)] border-y border-white/5">
      <div className="wrap">
        <div className="max-w-[540px]">
          <Badge variant="outline" className="mb-2 text-xs uppercase tracking-wider font-mono border-white/20 text-[var(--dark-text-faint)]">
            {preview.eyebrow}
          </Badge>
          <h2 className="section-title text-[var(--cream)]">{preview.title}</h2>
          <p className="text-sm text-[var(--dark-text-soft)] leading-relaxed">{preview.description}</p>
        </div>

        <Card className="mt-8 bg-[var(--dark-card)] border-white/10 rounded-[var(--radius-lg)] p-4 sm:p-6 shadow-2xl ring-0 text-[var(--cream)]">
          {/* Mock Browser Top Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs text-[var(--dark-text-faint)] font-mono hidden sm:inline">
                {preview.browserUrl}
              </span>
            </div>
            <Badge variant="secondary" className="bg-white/5 text-[var(--dark-text-faint)] border-0 text-[11px] font-mono">
              {preview.sidebarLabel}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 sm:gap-6">
            {/* Sidebar */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveTab(0)}
                className="whitespace-nowrap justify-start text-xs font-semibold bg-white/10 text-[var(--cream)] hover:bg-white/15"
              >
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>{preview.newChat}</span>
              </Button>

              {preview.conversations.map((c, i) => (
                <Button
                  key={c.id}
                  variant={activeTab === i ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(i)}
                  className={`whitespace-nowrap justify-start text-xs transition-colors ${
                    activeTab === i
                      ? "bg-[var(--dark-card-2)] text-[var(--cream)] font-medium border border-white/10"
                      : "text-[var(--dark-text-faint)] hover:text-[var(--cream)] hover:bg-white/5"
                  }`}
                >
                  <MessageSquare className="w-3 h-3 mr-1.5 opacity-60" />
                  <span className="truncate">{c.title}</span>
                </Button>
              ))}
            </div>

            {/* Chat Panel */}
            <div className="flex flex-col gap-3 min-h-[260px] justify-between bg-[#151412] p-4 rounded-[var(--radius-md)] border border-white/5">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between text-[11px] text-[var(--dark-text-faint)] border-b border-white/5 pb-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)]" />
                    {preview.routedTo} <strong className="text-[var(--cream)]">{current.model}</strong>
                  </span>
                  <Badge variant="outline" className="text-[10px] border-white/10 text-[var(--dark-text-faint)] py-0">
                    {preview.context}
                  </Badge>
                </div>

                <div className="self-end max-w-[85%] sm:max-w-[75%] bg-[var(--dark-card-2)] text-[var(--cream)] text-[13px] px-3.5 py-2.5 rounded-[12px] rounded-br-[2px] border border-white/10 shadow-xs">
                  {current.user}
                </div>

                <div className="self-start max-w-[90%] sm:max-w-[85%] bg-[#22211C] text-[var(--dark-text-soft)] text-[13px] px-4 py-3 rounded-[12px] rounded-bl-[2px] border border-white/5 shadow-xs leading-relaxed whitespace-pre-line">
                  {current.ai}
                </div>
              </div>

              <div className="mt-4 pt-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 bg-[var(--dark-card-2)] border border-white/10 rounded-full px-2 py-1"
                >
                  <Input
                    type="text"
                    value={inputVal}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
                    placeholder={preview.inputPlaceholder}
                    className="border-0 shadow-none text-xs text-[var(--cream)] focus-visible:ring-0 h-7"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="h-6 w-6 rounded-full bg-[var(--cream)] text-[var(--dark)] hover:opacity-90 shrink-0"
                    aria-label={preview.send}
                  >
                    <Send className="w-3 h-3" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
