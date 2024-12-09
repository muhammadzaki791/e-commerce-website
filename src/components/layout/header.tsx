import Link from "next/link"
import { Phone, Heart, Facebook, Instagram, Twitter, Search, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Phone size={16}/>
            <span>(225) 555-0118</span>
            <span>michelle@bandage.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Follow Us:</span>
            <div className="flex items-center gap-2">
              <Link href="#" className="hover:opacity-80">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              Bandage
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/shop" className="hover:text-primary">
                Shop
              </Link>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
              <Link href="/pricing" className="hover:text-primary">
                Pricing
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
              <Link href="/pages" className="hover:text-primary">
                Pages
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-[#23A6F0]">
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              <User size={20}/>
              Login / Register
            </Button>
            <Button variant="ghost" size="icon">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

