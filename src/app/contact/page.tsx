import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Twitter, MapPin, MailIcon } from 'lucide-react'

export default function page() {
  return (
    <div className="max-w-screen-xl mx-auto overflow-x-hidden">
      {/* hero-section */}
      <div className="w-full h-[900px] mt-10 mb-20 relative">
        <Image
          src={"/contact-hero.png"}
          alt="hero section image"
          height={900}
          width={1200}
          className="w-full h-full object-cover"
        />

        {/* headings and other text */}
        <div className="ml-[10%] absolute top-1/3 w-[80%] flex flex-col justify-center items-start">
          <h3 className="text-base font-montserrat text-black font-bold">
            CONTACT US
          </h3>

          <h1 className="my-5 text-2xl md:text-[58px] md:leading-[58px] font-montserrat text-black font-bold w-[378px]">
            Get in touch today!
          </h1>

          <p className="mb-4 w-[376px] text-xl text-[#737373]">
            We know how large objects will act, but things on a small scale
          </p>

          {/* phone and fax */}
          <div className="flex text-2xl font-montserrat font-bold justify-center items-center gap-1 mb-3">
            <p>Phone</p> :<p>+451 215 215 </p>
          </div>
          <div className="flex text-2xl font-montserrat font-bold justify-center items-center gap-1">
            <p>Fax</p> :<p>+451 215 215 </p>
          </div>

          {/* socials */}
          <div className="mt-5 flex justify-center items-center gap-[34px]">
            <Twitter size={30} className="text-[#23A6F0]"/>
            <Facebook size={30} className="text-[#23A6F0]"/>
            <Instagram size={30} className="text-[#23A6F0]"/>
            <Linkedin size={30} className="text-[#23A6F0]"/>
          </div>
        </div>
      </div>

      {/* Visit our office */}
      <div className="w-full flex flex-col justify-center items-center">
        <p className="mb-3 text-sm font-montserrat font-bold text-[#252B42]">
          VISIT OUR OFFICE
        </p>
        <h1 className="mb-20 text-[40px] font-bold font-montserrat text-black text-center md:w-[541px]">
          We help small businesses with big ideas
        </h1>

        {/* contact mail location */}
        <div className="w-full flex justify-center items-center flex-wrap gap-8 lg:gap-0">
          {/* phone */}
          <div className="w-[327px] h-[403px] flex flex-col justify-center items-center ">
            <Phone size={60} className="text-[#23A6F0]" />
            <h3 className="text-sm font-bold font-montserrat text-[#252B42] mt-4 mb-2">
              georgia.young@example.com
            </h3>
            <h3 className="text-sm font-bold font-montserrat text-[#252B42] mb-8">
              georgia.young@ple.com
            </h3>

            <h2 className="text-base font-bold font-montserrat text-[#252B42] mb-5">
              Get Support
            </h2>

            <button className="w-[189px] h-[54px] rounded-3xl border-[1px] border-[#23A6F0] text-sm font-montserrat font-bold text-[#23A6F0]">
              Submit Request
            </button>
          </div>

          {/* location */}
          <div className="w-[327px] h-[403px] bg-[#252B42] flex flex-col justify-center items-center ">
            <MapPin size={60} className="text-[#23A6F0]" />
            <h3 className="text-sm font-bold font-montserrat text-white mt-4 mb-2">
              georgia.young@example.com
            </h3>
            <h3 className="text-sm font-bold font-montserrat text-white mb-8">
              georgia.young@ple.com
            </h3>

            <h2 className="text-base font-bold font-montserrat text-white mb-5">
              Get Support
            </h2>

            <button className="w-[189px] h-[54px] rounded-3xl border-[1px] border-[#23A6F0] text-sm font-montserrat font-bold text-[#23A6F0]">
              Submit Request
            </button>
          </div>

          {/* mail */}
          <div className="w-[327px] h-[403px] flex flex-col justify-center items-center ">
            <MailIcon size={60} className="text-[#23A6F0]" />
            <h3 className="text-sm font-bold font-montserrat text-[#252B42] mt-4 mb-2">
              georgia.young@example.com
            </h3>
            <h3 className="text-sm font-bold font-montserrat text-[#252B42] mb-8">
              georgia.young@ple.com
            </h3>

            <h2 className="text-base font-bold font-montserrat text-[#252B42] mb-5">
              Get Support
            </h2>

            <button className="w-[189px] h-[54px] rounded-3xl border-[1px] border-[#23A6F0] text-sm font-montserrat font-bold text-[#23A6F0]">
              Submit Request
            </button>
          </div>
        </div>

        {/* Let's Talk */}
        <div className="mt-14 w-full flex flex-col justify-center items-center">
          <Image src={"/Arrow.png"} alt="arrow" height={40} width={40} />
          <h5 className="text-base font-montserrat font-bold text-[#252B42]">
            WE Can&apos;t WAIT TO MEET YOU
          </h5>
          <h1 className="text-[58px] font-montserrat font-bold text-[#252B42]">
            Let&apos;s Talk
          </h1>
          <button className="w-[186px] h-[52px] bg-[#23A6F0] rounded-md text-white">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
}