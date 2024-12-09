import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: number
  title: string
  items: number
  image: string
}

export function ProductCard({ title, items, image }: ProductCardProps) {
  return (
    <Link href={`/shop/${title.toLowerCase()}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm opacity-90">{items} items</p>
        </div>
      </div>
    </Link>
  )
}

