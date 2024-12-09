
import Hero from "@/components/sections/hero"
import { EditorsPick } from "@/components/sections/editors-pick"
import { BestsellerProducts } from "@/components/sections/bestseller-products"
import HeroTwo from "@/components/sections/hero-2"
import HeroThree from "@/components/sections/hero-3"
import { FeaturedPosts } from "@/components/featured-posts"

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <EditorsPick />
        <BestsellerProducts />
        <HeroTwo/>
        <HeroThree/>
        <FeaturedPosts />
      </main>
    </>
  )
}

