import React from "react"
import Link from "next/link"
import { Layers, FileText, MousePointerClick, Command, ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteContent } from "@/content/siteContent"

const { features } = siteContent

const ICONS: Record<string, React.ReactNode> = {
  "multi-model": <Layers className="w-5 h-5" />,
  summarize: <FileText className="w-5 h-5" />,
  explain: <MousePointerClick className="w-5 h-5" />,
  shortcut: <Command className="w-5 h-5" />,
}

export default function FeatureGrid(): React.JSX.Element {
  return (
    <section id="features" className="section-alt py-16 md:py-20 border-y border-[var(--border)]">
      <div className="wrap">
        <div className="max-w-[560px]">
          <Badge variant="outline" className="mb-2 text-xs uppercase tracking-wider font-mono border-[var(--border-strong)] text-[var(--ink-faint)]">
            {features.eyebrow}
          </Badge>
          <h2 className="section-title">{features.title}</h2>
          <p className="section-sub">{features.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
          {features.items.map((feat) => (
            <Card  key={feat.id}  className=" bg-[var(--bg)]  shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--ink)]">
                    {ICONS[feat.id]}
                  </span>
                  <Badge variant="outline" className="text-[10px] font-mono uppercase bg-[var(--bg-alt)] border-[var(--border)] text-[var(--ink-faint)]">
                    {feat.tag}
                  </Badge>
                </div>
                <CardTitle className="text-[15px] font-semibold text-[var(--ink)]">
                  {feat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-[13px] text-[var(--ink-soft)] leading-relaxed mb-4">
                  {feat.description}
                </CardDescription>
                <Link
                  href="#preview"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors group"
                >
                  <span>{features.learnMore}</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
