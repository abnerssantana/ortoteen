import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Specialist } from "@/components/specialist"
import { Differentials } from "@/components/differentials"
import { Transformations } from "@/components/transformations"
import { AboutUs } from "@/components/about-us"
import { BlogPreviewSection } from "@/components/blog/blog-preview-section"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Differentials />
      <Transformations />
      <Testimonials />
      <Specialist />
      <BlogPreviewSection />
    </>
  )
}