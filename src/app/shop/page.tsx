import { Metadata } from "next"
import Image from "next/image"
import { ProductCard } from "@/components/sections/product-card"
export const metadata: Metadata = {
  title: "Shop | Your Store Name",
  description: "Browse our collection of fashionable clothes and accessories",
}

const products = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-5.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-6.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-7.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-8.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 5,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-9.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-10.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-11.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-12.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-5.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-6.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-7.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-8.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 5,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-9.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-10.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-11.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
    },
    image: "/product-12.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
]
export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Image
        width={1440}
        height={175}
        src="/brend-names.png"
        alt="suppoters"
        className="w-[1440px] h-[175px]"
        />
      </div>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  )
}