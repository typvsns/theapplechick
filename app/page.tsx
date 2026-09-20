import { AppleProductSlider } from "@/components/apple-chick/apple-product-slider"
import { FundraisingCopy, PhoneCallout } from "@/components/apple-chick/fundraising-copy"
import { GallerySlider } from "@/components/apple-chick/gallery-slider"
import { HeroLogo } from "@/components/apple-chick/hero-logo"
import { OrderSheets } from "@/components/apple-chick/order-sheets"
import { PressVideos } from "@/components/apple-chick/press-videos"
import { SiteFooter } from "@/components/apple-chick/site-footer"
import { SocialHeader } from "@/components/apple-chick/social-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffe016] text-[#666666] scheme-light">
      <main>
        <HeroLogo />
        <AppleProductSlider />
        <SocialHeader />
        <PressVideos />
        <section className="mx-auto grid w-full max-w-[1393px] grid-cols-1 gap-10 px-5 py-12 min-[981px]:grid-cols-2 min-[981px]:px-8">
          <FundraisingCopy />
          <div>
            <PhoneCallout />
            <GallerySlider />
            <OrderSheets />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
