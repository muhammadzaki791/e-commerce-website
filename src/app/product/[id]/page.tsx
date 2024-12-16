"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Heart, Scale, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/product-gallery";
import { ProductTabs } from "@/components/product-tabs";
import { Products } from "@/types/product";

const COLORS = [
  { id: "turquoise", value: "#40BFFF" },
  { id: "orange", value: "#FF4858" },
  { id: "brown", value: "#FB7D5B" },
  { id: "blue", value: "#3A416F" },
];

export default function ProductDetails() {
  const params = useParams();
  const productId = parseInt(params.id as string, 10);
  const product = Products.find((p) => p.id === productId);

  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product) return;
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      color: selectedColor,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="flex-1">
          <ProductGallery
            images={[product.image, product.image]} // You may want to add more images to your product data
            productName={product.name}
          />
        </div>
        <div className="flex-1">
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <span>Store</span>
          </nav>
          <h1 className="mb-4 text-3xl font-medium">{product.name}</h1>
          <div className="mb-6 flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">45 Reviews</span>
          </div>
          <div className="mb-8">
            <span className="text-2xl font-medium">
              ${product.price.original}
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm font-medium">Availability:</span>
              <span className="text-sm text-blue-600">In Stock</span>
            </div>
          </div>
          <p className="mb-8 text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className="mb-8">
            <span className="mb-4 block text-sm font-medium">Select Color</span>
            <div className="flex gap-3">
              {COLORS.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  className={`h-8 w-8 rounded-full ${
                    selectedColor.id === color.id ? "ring-2 ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                >
                  <span className="sr-only">Select {color.id}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-8 flex items-center gap-6">
            <div className="flex h-12 items-center rounded bg-gray-100">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="h-full rounded-none px-4"
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity((q) => q + 1)}
                className="h-full rounded-none px-4"
              >
                +
              </Button>
            </div>
            <Button
              size="lg"
              className="h-12 rounded-sm bg-blue-500 px-8 hover:bg-blue-600"
              onClick={handleAddToCart}
            >
              Select Options
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-sm border"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-sm border"
            >
              <Scale className="h-5 w-5" />
            </Button>
          </div>
          <ProductTabs
            tabs={[
              {
                id: "description",
                label: "Description",
                content: (
                  <div className="prose max-w-none">
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met. Met
                      minim Mollie non desert Alamo est sit cliquey dolor do met
                      sent. RELIT official consequent door ENIM RELIT Mollie.
                      Excitation venial consequent sent nostrum met. Met minim
                      Mollie non desert Alamo est sit cliquey dolor do met sent.
                      RELIT official consequent door ENIM RELIT Mollie.
                      Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                ),
              },
              {
                id: "additional",
                label: "Additional Information",
                content: (
                  <div className="prose max-w-none">
                    <p>No additional information available.</p>
                  </div>
                ),
              },
              {
                id: "reviews",
                label: "Reviews (0)",
                content: (
                  <div className="prose max-w-none">
                    <p>No reviews yet.</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-16 py-16 bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <h2 className="text-[24px] font-medium mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="group"
              >
                <div className="flex flex-col">
                  <div className="relative aspect-[4/5] w-full mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-[20px] font-medium mb-2">
                    {product.name}
                  </h3>
                  <span className="text-[16px] text-gray-600">
                    PKR {product.price.original}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
            href="/shop"
            >
            <Button className="h-12 px-8 rounded-none bg-[#F9F9F9] hover:bg-gray-200 text-black border border-black">
              View collection
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
