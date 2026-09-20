import Image from "next/image"

export function HeroLogo() {
  return (
    <div className="bg-[#ffe016] px-4 pt-[7px]">
      <div className="mx-auto w-[95%] max-w-[1342px]">
        <Image
          src="/images/Apple-Chick-Yard-Sign.png"
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
