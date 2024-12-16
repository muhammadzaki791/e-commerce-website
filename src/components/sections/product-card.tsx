import Image from "next/image"
import { Product } from "@/types/product"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative rounded-sm bg-white transition-all hover:shadow-[0px_8px_40px_0px_rgba(0,0,0,0.08)]">
        <div className="relative aspect-[3/4] overflow-hidden">
          {product.isNew && (
            <Badge className="absolute left-3 top-3 rounded-sm bg-[#38CB89] text-white hover:bg-[#38CB89]">
              New
            </Badge>
          )}
          <Image
            src={product.image}
            alt={product.name}
            width={312}
            height={400}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="p-3">
          <h3 className="text-base font-semibold text-[#191919]">{product.name}</h3>
          <p className="mt-1 text-sm text-[#191919]/60">{product.department}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.price.discounted ? (
                <>
                  <span className="text-sm text-[#191919]/60 line-through">
                    ${product.price.original.toFixed(2)}
                  </span>
                  <span className="text-base font-bold text-[#23856D]">
                    ${product.price.discounted.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-sm font-medium text-[#191919]">
                  ${product.price.original.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex gap-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="h-3 w-3 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}