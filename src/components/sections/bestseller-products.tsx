import { ProductCard } from "@/components/sections/product-card"

export function BestsellerProducts() {
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
]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-2xl font-bold mb-2">BESTSELLER PRODUCTS</h2>
        <p className="text-center text-gray-500 mb-12">Problems trying to resolve the conflict between</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

