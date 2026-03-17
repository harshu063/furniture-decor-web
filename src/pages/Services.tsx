import { Feature72 } from "@/components/ui/feature-72"
import { Footerdemo } from "@/components/ui/footer-section"

export default function Services() {
  return (
    <>
      {/* Page hero banner — consistent with Projects page */}
      <div className="bg-[#202e44] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c4a97a] block mb-3">What We Offer</span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Our Services</h1>
          <p className="text-base text-white/60 leading-relaxed max-w-xl">
            From custom bedroom sets to full commercial fitouts — every service is delivered with the same dedication to quality wood, expert craftsmanship, and timeless design.
          </p>
        </div>
      </div>

      <Feature72 />
      <Footerdemo />
    </>
  )
}
