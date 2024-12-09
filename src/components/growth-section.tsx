import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GrowthSection() {
  return (
    <section className="grid md:grid-cols-2">

      {/* Left Content */}
      <div className="bg-blue-600 px-8 md:px-16 py-20 flex flex-col justify-center">
        <div className="max-w-md">
          <p className="text-white/80 uppercase tracking-wider text-sm font-medium mb-4">
            Work with us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Now Lets grow Yours
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white/10 w-fit"
          >
            Button
          </Button>
        </div>
      </div>

   <div className="relative overflow-hidden h-[400px] md:h-auto">
  <Image 
    src="/product-7.png"
    alt="Professional in coral top"
    width={590}
    height={640}
    className="absolute object-cover w-[590px] h-[850px] inset-0"
    priority
  />
</div>
    </section>
  )
}

