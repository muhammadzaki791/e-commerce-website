import { ProductCard } from "@/components/sections/product-card";

export function BestsellerProducts() {
  const products = [
    {
      id: 5,
      name: "Graphic Design",
      department: "English Department",
      price: {
        original: 85.45,
        discounted: 6.48,
      },
      image: "/product-5.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
    {
      id: 6,
      name: "The Dandy Chair",
      department: "Furniture",
      price: {
        original: 250,
        discounted: 6.48,
      },
      image: "/product-6.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
    {
      id: 7,
      name: "Rustic Vase Set",
      department: "Home Decor",
      price: {
        original: 115,
        discounted: 6.48,
      },
      image: "/product-7.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
    {
      id: 8,
      name: "The Silky Vase",
      department: "Home Decor",
      price: {
        original: 125,
        discounted: 6.48,
      },
      image: "/product-8.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
    {
      id: 9,
      name: "The Lucy Lamp",
      department: "Lighting",
      price: {
        original: 399,
        discounted: 6.48,
      },
      image: "/product-9.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
    {
      id: 10,
      name: "The Dandy Chair",
      department: "Furniture",
      price: {
        original: 205,
        discounted: 6.48,
      },
      image: "/product-10.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
    {
      id: 11,
      name: "The Dandy Chair",
      department: "Furniture",
      price: {
        original: 250,
        discounted: 6.48,
      },
      image: "/product-11.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
    {
      id: 12,
      name: "The Dandy Chair",
      department: "Furniture",
      price: {
        original: 250,
        discounted: 6.48,
      },
      image: "/product-12.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
    },
  ];

  return (
    <section className="py-20 max-w-[1439px]">
      <div className="container">
        <h2 className="text-center text-2xl font-bold mb-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Problems trying to resolve the conflict between
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
