import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen h-[716px] w-full max-w-[1600px] overflow-hidden">
      <Image
        src="/hero-pic.jpg"
        alt="New Collection Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute  bg-[#00BCD4]/70" />
      <div className="container relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-12">
        <div className="max-w-[600px] space-y-6">
          <h5 className="text-base font-medium uppercase tracking-wider text-white">
            SUMMER 2020
          </h5>
          <h1 className="text-5xl font-bold uppercase w-[700px] tracking-tight text-white sm:text-6xl md:text-7xl">
            NEW COLLECTION
          </h1>
          <h4 className="max-w-[400px] text-xl text-white/90">
            We know how large objects will act, but things on a small scale.
          </h4>
          <Button
            asChild
            className="bg-[#4CAF50] px-8 py-6 text-base font-medium text-white hover:bg-[#4CAF50]/90"
          >
            <Link href="/shop">SHOP NOW</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}