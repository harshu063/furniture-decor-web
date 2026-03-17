import IntroAnimation from "@/components/ui/scroll-morph-hero"
import AboutUsSection from "@/components/ui/about-us-section"
import { Footerdemo } from "@/components/ui/footer-section"

export default function Home() {
  return (
    <>
      <section className="w-full" style={{ height: "90vh", maxHeight: "900px", minHeight: "480px" }}>
        <IntroAnimation />
      </section>
      <AboutUsSection />
      <Footerdemo />
    </>
  )
}
