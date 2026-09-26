"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "cn"

interface AccordionContextType {
  value?: string | string[]
  onValueChange?: (val: string) => void
  collapsible?: boolean
}

const AccordionContext = React.createContext<AccordionContextType>({})

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string
  value?: string
  onValueChange?: (val: string) => void
  collapsible?: boolean
}

function Accordion({
  children,
  className,
  defaultValue,
  value: controlledValue,
  onValueChange: controlledOnChange,
  collapsible = true,
  ...props
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string | undefined>(defaultValue)
  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : internalValue

  const handleValueChange = React.useCallback(
    (itemValue: string) => {
      const nextValue = currentValue === itemValue && collapsible ? "" : itemValue
      if (!isControlled) {
        setInternalValue(nextValue)
      }
      controlledOnChange?.(nextValue)
    },
    [currentValue, collapsible, isControlled, controlledOnChange]
  )

  return (
    <AccordionContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        collapsible,
      }}
    >
      <div data-slot="accordion" className={cn("space-y-3", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItemContext = React.createContext<{ value: string }>({ value: "" })

function AccordionItem({
  className,
  value,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        data-slot="accordion-item"
        data-value={value}
        className={cn("rounded-lg border border-border overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { value: selectedValue, onValueChange } = React.useContext(AccordionContext)
  const { value: itemValue } = React.useContext(AccordionItemContext)
  const isOpen = selectedValue === itemValue

  return (
    <button
      type="button"
      data-slot="accordion-trigger"
      aria-expanded={isOpen}
      onClick={() => onValueChange?.(itemValue)}
      className={cn(
        "flex flex-1 items-center justify-between w-full px-5 py-4 text-left font-medium transition-all hover:opacity-85 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { value: selectedValue } = React.useContext(AccordionContext)
  const { value: itemValue } = React.useContext(AccordionItemContext)
  const isOpen = selectedValue === itemValue

  if (!isOpen) return null

  return (
    <div
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm px-5 pb-5 pt-1 text-muted-foreground animate-in fade-in-50 duration-200 border-t border-border/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
