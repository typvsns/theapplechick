import Image from "next/image"
import { BRAND_IMAGES } from "@/components/apple-chick/content"

/** Empty Theme Builder header strip on the live site. */
export function PageHeaderStrip() {
  return <div className="h-[7px] w-full bg-[#FFE016]" aria-hidden="true" />
}

export function HeroLogo() {
  return (
    <section className="bg-[#FFE016] px-4 pb-0 pt-0">
      <div className="mx-auto w-full max-w-[1216px]">
        <Image
          src={BRAND_IMAGES.yardSign}
          alt="The Apple Chick. You know you want one."
          width={1699}
          height={1327}
          priority
          className="mx-auto h-auto w-full"
        />
      </div>
    </section>
  )
}
