import Image from "next/image";
import Link from "next/link";

export function EditorsPick() {
  return (
    <section className="py-20 bg-gray-50 max-w-[1439px]">
      <div className="container max-w-[1050px] mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-4 text-[#252B42]">
          EDITORS PICK
        </h2>
        <p className="text-center text-[#737373] text-base mb-12">
          Problems trying to resolve the conflict between
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link
            href="/shop"
            className="relative group col-span-2 w-full md:w-auto row-span-2 h-[500px] md:h-auto"
          >
            <Image
              src="/product-1.png"
              alt="Men's Fashion"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block bg-white px-6 py-3 font-bold text-lg text-[#252B42] hover:bg-gray-100 transition-colors">
                MEN
              </span>
            </div>
          </Link>

          <Link
            href="/shop"
            className="relative group col-span-1 row-span-2 h-[500px] w-full md:w-auto"
          >
            <Image
              src="/product-2.png"
              alt="Women's Fashion"
              width={240}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block bg-white px-6 py-3 font-bold text-lg text-[#252B42] hover:bg-gray-100 transition-colors">
                WOMEN
              </span>
            </div>
          </Link>

          <Link
            href="/shop"
            className="relative group row-span-1 col-span-1 h-[242px]"
          >
            <Image
              src="/product-3.png"
              alt="Accessories"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block bg-white px-6 py-3 font-bold text-lg text-[#252B42] hover:bg-gray-100 transition-colors">
                ACCESSORIES
              </span>
            </div>
          </Link>

          <Link
            href="/shop"
            className="relative group h-[242px] row-span-1 col-span-1"
          >
            <Image
              src="/product-4.png"
              alt="Kids Fashion"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block bg-white px-6 py-3 font-bold text-lg text-[#252B42] hover:bg-gray-100 transition-colors">
                KIDS
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
