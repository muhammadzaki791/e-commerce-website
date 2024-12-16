import Image from "next/image";

export function ShopCard() {
  return (
    <div className="flex gap-[15px] justify-center items-center flex-wrap">
      {/*category container  */}
      <div className="relative w-[205px] h-[223px] flex justify-center items-center ">
        <Image
          src={"/card-item-1.png"}
          alt="image"
          height={100}
          width={100}
          className="w-full h-full"
        />
      </div>

      {/*category container  */}
      <div className="relative w-[205px] h-[223px] flex justify-center items-center ">
        <Image
          src={"/card-item-2.png"}
          alt="image"
          height={100}
          width={100}
          className="w-full h-full"
        />
      </div>

      {/*category container  */}
      <div className="relative w-[205px] h-[223px] flex justify-center items-center ">
        <Image
          src={"/card-item-3.png"}
          alt="image"
          height={100}
          width={100}
          className="w-full h-full"
        />
      </div>

      {/*category container  */}
      <div className="relative w-[205px] h-[223px] flex justify-center items-center ">
        <Image
          src={"/card-item-4.png"}
          alt="image"
          height={100}
          width={100}
          className="w-full h-full"
        />
      </div>

      {/*category container  */}
      <div className="relative w-[205px] h-[223px] flex justify-center items-center ">
        <Image
          src={"/card-item-5.png"}
          alt="image"
          height={100}
          width={100}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
