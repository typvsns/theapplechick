import Image from "next/image"
import { BRAND_IMAGES } from "@/components/apple-chick/content"

export function HeroLogo() {
  return (
    <div className="bg-[#ffe016] px-4 pt-[7px]">
      <div className="mx-auto w-[95%] max-w-[1342px]">
        <Image
          src={BRAND_IMAGES.yardSign}
          alt="The Apple Chick yard sign. You know you want one."
          width={1699}
          height={1327}
          priority
          className="h-auto w-full"
        />
      </div>
    </div>
  )
}
