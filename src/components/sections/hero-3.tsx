import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroThree() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 lg:gap-12 items-center gap-[30px]">
          <div className="flex justify-center">
            <Image
              alt="Hero image"
              className="rounded-lg object-cover"
              height="400"
              width="500"
              src="/hero-pic-2.png"
              priority
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="space-y-2 w-[573px] h-[326px]">
              <h5 className="text-sm tracking-widest text-muted-foreground uppercase">
                Summer 2020
              </h5>
              <h2 className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Part of the Neural Universe
              </h2>
              <p className="text-muted-foreground text-xl md:text-xl">
              We know how large objects will act, 
              but things on a small scale.  
              </p>
            </div>
            <div className="flex flex-col gap-[10px] w-[339px] h-[52px] min-[339px]:flex-row">
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                BUY NOW
              </Button>
              <Button variant="outline">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

