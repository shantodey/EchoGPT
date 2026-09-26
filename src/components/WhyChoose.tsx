import React from "react"
import { ShieldCheck, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteContent } from "@/content/siteContent"

const { whyChoose } = siteContent

const HIGHLIGHT_ICONS = [
  <ShieldCheck className="w-4 h-4 text-[var(--ink)]" key="shield" />,
  <Zap className="w-4 h-4 text-[var(--ink)]" key="zap" />,
]

export default function WhyChoose(): React.JSX.Element {
  return (
    <section id="why-echogpt" className="section-alt py-16 md:py-20 border-b border-[var(--border)]">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Left Column */}
        <div>
          <Badge variant="outline" className="mb-2 text-xs uppercase tracking-wider font-mono border-[var(--border-strong)] text-[var(--ink-faint)]">
            {whyChoose.eyebrow}
          </Badge>
          <h2 className="section-title">{whyChoose.title}</h2>
          <p className="section-sub mb-6">{whyChoose.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {whyChoose.highlights.map((h, i) => (
              <Card key={h.title} className="bg-[var(--bg)] border-[var(--border)] p-4 shadow-none">
                <CardHeader className="p-0 pb-1.5 flex flex-row items-center gap-2">
                  {HIGHLIGHT_ICONS[i]}
                  <CardTitle className="text-xs font-semibold text-[var(--ink)]">{h.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-[var(--ink-soft)] leading-normal text-xs">
                  {h.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Comparison Card */}
        <Card className="bg-[var(--bg)] border-[var(--border)] rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono uppercase text-[var(--ink-faint)] tracking-wider mb-5">
            <span>{whyChoose.benchmark}</span>
            <Badge variant="outline" className="text-[10px] border-[var(--border-strong)]">
              {whyChoose.benchmarkLabel}
            </Badge>
          </div>

          {/* Without EchoGPT */}
          <div className="mb-6">
            <div className="flex justify-between items-center text-xs text-[var(--ink-soft)] font-medium mb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                {whyChoose.withoutLabel}
              </span>
              <span className="font-mono text-[var(--ink)] font-semibold">{whyChoose.withoutValue}</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[var(--border)] overflow-hidden">
              <div className="h-full bg-red-400/80 rounded-full" style={{ width: "100%" }} />
            </div>
            <span className="text-[11px] text-[var(--ink-faint)] mt-1.5 inline-block">
              {whyChoose.withoutDescription}
            </span>
          </div>

          {/* With EchoGPT */}
          <div>
            <div className="flex justify-between items-center text-xs text-[var(--ink-soft)] font-medium mb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)]" />
                {whyChoose.withLabel}
              </span>
              <span className="font-mono text-[var(--ink)] font-semibold">{whyChoose.withValue}</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[var(--border)] overflow-hidden">
              <div className="h-full bg-[var(--ink)] rounded-full" style={{ width: "20%" }} />
            </div>
            <span className="text-[11px] text-[var(--accent-teal)] font-medium mt-1.5 inline-block">
              {whyChoose.withDescription}
            </span>
          </div>
        </Card>
      </div>
    </section>
  )
}
