import React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { siteContent } from "@/content/siteContent"

const { footer, brand, urls } = siteContent

function resolveHref(href: string): string {
  if (href in urls) return urls[href as keyof typeof urls]
  return href
}

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[var(--dark)] text-[var(--dark-text-faint)] py-12 md:py-16 border-t border-white/5">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10 text-[13px]">
          {/* Brand Info */}
          <div>
            <Link href={urls.home} className="flex items-center gap-2 text-[var(--cream)] font-semibold text-[15px] mb-3 hover:opacity-90 transition-opacity">
              <span className="w-5 h-5 rounded-[5px] bg-[var(--cream)] text-[var(--dark)] flex items-center justify-center font-bold text-xs shadow-xs">E</span>
              <span>{brand.name}</span>
            </Link>
            <p className="text-[13px] text-[var(--dark-text-soft)] max-w-[240px] leading-relaxed mb-4">
              {brand.footerDescription}
            </p>
            <div className="text-xs text-[var(--dark-text-faint)]">{brand.version}</div>
          </div>

          {/* Footer Navigation Columns */}
          {footer.sections.map((section) => (
            <div key={section.title}>
              <div className="text-[var(--cream)] font-medium mb-3 text-[13px] uppercase tracking-wider font-mono">
                {section.title}
              </div>
              <ul className="space-y-2 list-none p-0 m-0">
                {section.links.map((link) => {
                  const resolvedHref = resolveHref(link.href)
                  const isExternal = resolvedHref.startsWith("http")
                  return (
                    <li key={link.label}>
                      <Link
                        href={resolvedHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="hover:text-[var(--cream)] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{link.label}</span>
                        {"badge" in link && link.badge && (
                          <Badge
                            variant="secondary"
                            className="text-[10px] bg-white/10 text-[var(--cream)] border-0 py-0 px-1.5"
                          >
                            {link.badge}
                          </Badge>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-[#2C2C2A] text-xs text-[var(--dark-text-faint)] flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>{brand.copyright}</span>
          <div className="flex items-center gap-2">
            <span>{brand.builtByLabel}</span>
            <Link href={urls.Shanto_Dey} target="_blank" rel="noopener noreferrer"className="text-[var(--cream)] hover:underline font-medium">
             {brand.builtBy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
