import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Specialist } from "@/components/specialist"
import { Differentials } from "@/components/differentials"
import { Transformations } from "@/components/transformations"
import { AboutUs } from "@/components/about-us"
import { BlogPreview } from "@/components/blog-preview"

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
      <BlogPreview />
    </>
  )
}

