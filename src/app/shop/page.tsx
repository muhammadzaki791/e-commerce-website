import { Metadata } from "next";
import Image from "next/image";
import { ProductCard } from "@/components/sections/product-card";
import { ShopCard } from "@/components/shop-card";
export const metadata: Metadata = {
  title: "Shop | Your Store Name",
  description: "Browse our collection of fashionable clothes and accessories",
};

const products = [
  {
    id: 5,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-1.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-2.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-7.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-4.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 9,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-5.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 10,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-10.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 11,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-11.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 12,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-12.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
];

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" gap-4 justify-center sm:flex md:flex lg:flex ">
        <ShopCard></ShopCard>
      </div>

      <div className="w-full bg-[#fafafa] h-[175px]  flex justify-evenly items-center flex-wrap mb-5">
        <Image src={"/brand-1.png"} alt={"brands"} height={80} width={80} />
        <Image src={"/brand-2.png"} alt={"brands"} height={80} width={80} />
        <Image src={"/brand-3.png"} alt={"brands"} height={80} width={80} />
        <Image src={"/brand-4.png"} alt={"brands"} height={80} width={80} />
        <Image src={"/brand-5.png"} alt={"brands"} height={80} width={80} />
        <Image src={"/brand-6.png"} alt={"brands"} height={80} width={80} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
