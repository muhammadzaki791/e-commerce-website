import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1439px] overflow-hidden bg-[#2D8D64]">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col gap-6 max-w-xl mb-10 lg:mb-0">
            <p className="text-lg font-medium uppercase tracking-wider text-white/90">
              SUMMER 2020
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Vita Classic Product
            </h1>
            <p className="text-base leading-relaxed text-white/80">
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-bold text-white">$16.48</h3>
              <Link href="/shop">
                <Button
                  className="bg-[#40A069] w-[160px] h-[48px] text-sm font-semibold text-white hover:bg-[#40A069]/90 rounded-md transition-colors duration-300"
                >
                  ADD TO CART
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/hero-pic-1.png"
              alt="Vita Classic Product"
              width={600}
              height={800}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

