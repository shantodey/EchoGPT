import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeatureGrid from "@/components/FeatureGrid"
import ModelPicker from "@/components/ModelPicker"
import ProductPreview from "@/components/ProductPreview"
import WhyChoose from "@/components/WhyChoose"
import FaqAccordion from "@/components/FaqAccordion"
import CtaBand from "@/components/CtaBand"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <ModelPicker />
        <ProductPreview />
        <WhyChoose />
        <FaqAccordion />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
