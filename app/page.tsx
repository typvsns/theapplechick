import { AppleProductSlider } from "@/components/apple-chick/apple-product-slider"
import {
  FundraisingCopy,
  PhoneCallout,
  TurnaroundNote,
} from "@/components/apple-chick/fundraising-copy"
import { GallerySlider } from "@/components/apple-chick/gallery-slider"
import { HeroLogo, PageHeaderStrip } from "@/components/apple-chick/hero-logo"
import { OrderSheets } from "@/components/apple-chick/order-sheets"
import { PressVideos } from "@/components/apple-chick/press-videos"
import { SiteFooter } from "@/components/apple-chick/site-footer"
import { SocialHeader } from "@/components/apple-chick/social-header"

/**
 * Live topology (top → bottom):
 * empty 7px header → hero PNG → Slider A → social → YouTube →
 * two-column fundraising (left copy+disclaimer / right phone+Slider B+PDFs) → footer
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFE016] font-sans text-[#666666] scheme-light">
      <PageHeaderStrip />
      <main>
        <HeroLogo />
        <AppleProductSlider />
        <SocialHeader />
        <PressVideos />
        <section className="bg-[#FFE016] px-4 py-10">
          <div className="mx-auto grid w-full max-w-[1024px] grid-cols-1 gap-x-[56px] gap-y-10 min-[981px]:grid-cols-2">
            <div className="min-w-0">
              <FundraisingCopy />
              <div className="mt-6">
                <TurnaroundNote />
              </div>
            </div>
            <div className="min-w-0">
              <PhoneCallout />
              <GallerySlider />
              <OrderSheets />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
