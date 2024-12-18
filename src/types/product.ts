export interface Product {
  id: number;
  name: string;
  department: string;
  price: {
    original: number;
    discounted?: number;
  };
  image: string;
  colors: string[];
  isNew?: boolean;
}

export const Products: Product[] = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    price: {
      original: 85.45,
      discounted: 6.48,
    },
    image: "/product-1.png",
    colors: ["#B87796", "#E4E4E4", "#B8E6F3", "#191919"],
  },
  {
    id: 2,
    name: "The Dandy Chair",
    department: "Furniture",
    price: {
      original: 250,
      discounted: 6.48,
    },
    image: "/product-2.png",
    colors: ["#FFFFFF", "#000000"],
  },
  {
    id: 3,
    name: "Rustic Vase Set",
    department: "Home Decor",
    price: {
      original: 115,
      discounted: 6.48,
    },
    image: "/product-3.png",
    colors: ["#A0522D", "#8B4513"],
  },
  {
    id: 4,
    name: "The Silky Vase",
    department: "Home Decor",
    price: {
      original: 125,
      discounted: 6.48,
    },
    image: "/product-4.png",
    colors: ["#C0C0C0", "#808080"],
  },
  {
    id: 5,
    name: "The Lucy Lamp",
    department: "Lighting",
    price: {
      original: 399,
      discounted: 6.48,
    },
    image: "/product-5.png",
    colors: ["#FFD700", "#FFA500"],
  },
  {
    id: 6,
    name: "The Dandy Chair",
    department: "Furniture",
    price: {
      original: 205,
      discounted: 6.48,
    },
    image: "/product-6.png",
    colors: ["#F5F5DC", "#D2B48C"],
  },
  {
    id: 7,
    name: "The Dandy Chair",
    department: "Furniture",
    price: {
      original: 250,
      discounted: 6.48,
    },
    image: "/product-7.png",
    colors: ["#8B0000", "#B22222"],
  },
  {
    id: 8,
    name: "The Dandy Chair",
    department: "Furniture",
    price: {
      original: 250,
      discounted: 6.48,
    },
    image: "/product-8.png",
    colors: ["#FF4500", "#FF6347"],
  },
  {
    id: 9,
    name: "The Dandy Chair",
    department: "Furniture",
    price: {
      original: 270,
      discounted: 6.48,
    },
    image: "/product-9.png",
    colors: ["#4682B4", "#5F9EA0"],
  },
  {
    id: 10,
    name: "The Dandy Chair",
    department: "Furniture",
    price: {
      original: 180,
      discounted: 6.48,
    },
    image: "/product-10.png",
    colors: ["#2E8B57", "#3CB371"],
  },
  {
    id: 11,
    name: "The Dandy Chair",
    department: "Furniture",
    price: {
      original: 200,
      discounted: 6.48,
    },
    image: "/product-11.png",
    colors: ["#8A2BE2", "#9370DB"],
  },
  {
    id: 12,
    name: "Rustic Vase Set",
    department: "Home Decor",
    price: {
      original: 155,
      discounted: 6.48,
    },
    image: "/product-12.png",
    colors: ["#D2691E", "#CD853F"],
  },
];
