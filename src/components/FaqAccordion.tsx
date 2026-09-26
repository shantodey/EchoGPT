"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteContent } from "@/content/siteContent"

const { faq } = siteContent

export default function FaqAccordion(): React.JSX.Element {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="wrap max-w-[800px]">
        <div className="text-center md:text-left mb-10">
          <Badge variant="outline" className="mb-2 text-xs uppercase tracking-wider font-mono border-[var(--border-strong)] text-[var(--ink-faint)]">
            {faq.eyebrow}
          </Badge>
          <h2 className="section-title">{faq.title}</h2>
          <p className="section-sub">{faq.description}</p>
        </div>

        <Accordion type="single" defaultValue="item-1" collapsible className="w-full space-y-3">
          {faq.items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-[var(--bg-alt)] border-[var(--border)] rounded-[var(--radius-md)]"
            >
              <AccordionTrigger className="text-[14px] sm:text-[15px] text-[var(--ink)]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[13px] text-[var(--ink-soft)] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
