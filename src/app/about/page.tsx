import Image from "next/image";
import TeamSection from "@/components/team-section";
import GrowthSection from "@/components/growth-section";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div
          className="relative bg-cover h-[545px] w-full bg-no-repeat flex justify-center items-center"
          style={{
            backgroundImage: "url('/about-bg.png')",
            backgroundSize: "cover", // Ensures the image covers the entire container
            backgroundPosition: "bottom", // Centers the image within the container
          }}
        >
          <div className="grid md:grid-cols-2 max-w-[1020px] w-full h-[321px] gap-12 items-center p-8">
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
                  We know how large objects will act, but things on a small
                  scale
                </p>
              </div>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 w-full max-w-[1018px] h-auto justify-center items-center mx-auto md:flex-row md:items-center p-6 md:p-8 space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-[394px] h-auto space-y-2">
            <p className="text-sm font-medium text-red-600">Problems trying</p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <p className="text-sm font-normal text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-4 text-center">
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
          <TeamSection />
        </div>

        <div className="bg-[#fafafa] w-full flex flex-col justify-center items-center">
          {/* heading and para */}
          <h1 className="mb-5 mt-5 text-center font-montserrat text-4xl font-bold text-black">
            Big Companies Are Here
          </h1>

          <p className="mt-3 mb-20  md:w-[440px] font-montserrat text-sm text-center text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>

          {/* brand logos */}
          <div className="w-full bg-[#fafafa] h-[175px]  flex justify-evenly items-center flex-wrap mb-5">
            <Image src={"/brand-1.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/brand-2.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/brand-3.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/brand-4.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/brand-5.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/brand-6.png"} alt={"brands"} height={80} width={80} />
          </div>
        </div>
        
        <div>
          <GrowthSection />
        </div>
      </main>
    </div>
  );
}
