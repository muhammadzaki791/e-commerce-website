import Image from "next/image";
import TeamSection from "@/components/team-section";
import GrowthSection from "@/components/growth-section";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                About Company
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                ABOUT US
              </h1>
              <p className="text-gray-600 max-w-md">
                We know how large objects will act, but things on a small scale
              </p>
            </div>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
              Get Quote Now
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-[600px] flex items-center justify-center overflow-visible">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-pink-100 rounded-full transform scale-90" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-purple-400 rounded-full" />
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-pink-200 rounded-full" />

            {/* Main Image */}
            <Image
              src="/yellow-girl.png"
              alt="Shopping woman with bags"
              width={600}
              height={600}
              className="relative z-10"
            />
          </div>

          {/* Stats Grid */}
        </div>
        <div>
          <Image
            src="/about-2.png"
            alt="Shopping woman with bags"
            width={1440}
            height={236}
            className="relative z-10"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-gray-900">15K</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-gray-900">150K</h3>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-gray-900">15</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>
        <div>
          <Image
            src="/about-video.png"
            alt="Shopping woman with bags"
            width={1440}
            height={236}
            className="relative z-10"
          />
        </div>
        <div>
          <TeamSection />
        </div>
        <div>
          <GrowthSection />
        </div>
      </main>
    </div>
  );
}
