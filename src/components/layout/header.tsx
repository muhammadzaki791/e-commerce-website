"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Search,
  ShoppingCart,
  User,
  Youtube,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Header() {
  const pathname = usePathname();
  const conditional = !["/about", "/pricing", "/team", "/contact"].includes(
    pathname
  );

  return (
    <div className="text-white flex justify-center items-center flex-col w-full overflow-x-hidden">
      {conditional ? (
        <>
          <div className="w-full hidden lg:flex lg:px-5 justify-between items-center relative bg-black h-12 text-center">
            <div className="text-sm flex justify-center items-center gap-8 font-montserrat">
              <div className="flex justify-center items-center gap-1">
                <Phone size={16} />
                <p>(225) 555-0118</p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <Mail size={16} />
                <p>michelle.rivera@example.com</p>
              </div>
            </div>
            <h1 className="font-montserrat w-[312px] font-bold text-sm">
              Follow Us and get a chance to win 80% off
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-sm font-montserrat font-bold">Follow Us :</p>
              <div className="flex justify-center items-center gap-1 w-[120px]">
                <Instagram size={16} />
                <Facebook size={16} />
                <Twitter size={16} />
                <Youtube size={16} />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-full border-b h-24 max-w-screen-xl mx-auto">
            <Link href={"/"}>
              <h1 className="font-montserrat text-black text-3xl font-bold">
                Bandage
              </h1>
            </Link>
            <div className="hidden lg:flex font-montserrat text-sm font-bold text-[#737373] justify-center items-center gap-4">
              <Link href={"/"} className="text-lg">
                Home
              </Link>
              <Link href={"/shop"}>
                <Accordion type="single" collapsible className="relative">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-montserrat font-bold text-base z-50">
                      shop
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
              </Link>
              <Link href={"/about"} className="text-lg">
                About
              </Link>
              <Link href={"/about"} className="text-lg">
                Blog
              </Link>
              <Link href={"/contact"} className="text-lg">
                Contact
              </Link>
              <Link href={"/contact"} className="text-lg">
                Pages
              </Link>
            </div>
            <div className="relative flex justify-center items-center gap-8">
              <div className="flex justify-center items-center">
                <div className="hidden w-[166px] font-montserrat text-sm lg:flex justify-center items-center gap-1">
                  <User size={20} color="#23A6F0" />
                  <p className="text-[#23A6F0] font-bold">Login</p>/
                  <p className="text-[#23A6F0] font-bold">Register</p>
                </div>
                <div className="flex justify-between items-center gap-5">
                  <Search size={20} color="#23A6F0" />
                  <ShoppingCart size={20} color="#23A6F0" />
                  <Heart size={20} color="#23A6F0" />
                </div>
              </div>
              <Sheet>
                <SheetTrigger>
                  <Menu size={20} className="text-[#23A6F0] block lg:hidden" />
                </SheetTrigger>
                <SheetContent className="absolute top-24 w-screen bg-white h-screen flex flex-col justify-center items-center text-[#737373]">
                  <Link href="/" className="font-semibold text-3xl mb-8">
                    Home
                  </Link>
                  <Link href="/contact" className="font-semibold text-3xl mb-8">
                    Contact
                  </Link>
                  <Link href="/about" className="font-semibold text-3xl mb-8">
                    About
                  </Link>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-evenly items-center w-full border-b h-24 max-w-screen-xl mx-auto">
          <Link href={"/"}>
            <h1 className="font-montserrat text-black text-2xl font-bold">
              Bandage
            </h1>
          </Link>
          <div className="hidden lg:flex font-montserrat text-sm font-bold text-[#737373] justify-center items-center gap-8">
            <Link href={"/"} className="text-lg">
              Home
            </Link>
            <Link href={"/shop"} className="text-lg">
              Product
            </Link>
            <Link href={"/pricing"} className="text-lg">
              Pricing
            </Link>
            <Link href={"/contact"} className="text-lg">
              Contact
            </Link>
          </div>
          <div className="relative flex justify-center items-center gap-8">
            <div className="hidden lg:flex justify-center items-center">
              <p className="text-[#23A6F0] font-montserrat text-sm font-bold mr-8">
                Login
              </p>
              <button className="flex justify-center items-center gap-2 font-montserrat w-[214px] h-[52px] bg-[#23A6F0] text-white text-sm font-bold rounded-sm">
                Become a member
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15px"
                  viewBox="0 -960 960 960"
                  width="15px"
                  fill="#ffffff"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </button>
            </div>
            <Search size={20} className={"cursor-pointer text-[#23A6F0] lg:hidden"} />
            <ShoppingCart
              size={20}
              className={
                "cursor-pointer lg:hidden text-[#23A6F0]"
              }
            />
            <Sheet>
              <SheetTrigger>
                <Menu size={20} className="block text-[#23A6F0] lg:hidden" />
              </SheetTrigger>
              <SheetContent className="absolute top-24 w-screen bg-white h-screen flex flex-col justify-center items-center text-[#737373]">
                <Link href="/" className="font-semibold text-3xl mb-8">
                  Home
                </Link>
                <Link href="/contact" className="font-semibold text-3xl mb-8">
                  Contact
                </Link>
                <Link href="/about" className="font-semibold text-3xl mb-8">
                  About
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      )}
    </div>
  );
}