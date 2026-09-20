"use client"

import { APPLE_IMAGES, EMBLA_DURATION } from "@/components/apple-chick/content"
import { ImageCarousel } from "@/components/apple-chick/image-carousel"

/**
 * Slider A — full-bleed product ticker.
 * slidesToShow 8 / 4@≤980 / 2@≤767; autoplaySpeed 1100; speed 2700;
 * pauseOnHover; infinite; no arrows/dots; swipe; 4px side padding.
 */
export function AppleProductSlider() {
  return (
    <section className="w-full bg-[#FFE016]" aria-label="Product photos">
      <ImageCarousel
        images={APPLE_IMAGES}
        imageBasePath="/images/apples"
        label="Candy apple products"
        autoplaySpeed={1100}
        duration={EMBLA_DURATION.apple}
        objectFit="fill"
        aspectClassName="aspect-[152/203]"
        sizes="(max-width: 767px) 50vw, (max-width: 980px) 25vw, 12.5vw"
        slideClassName="min-w-0 flex-[0_0_50%] px-1 min-[768px]:flex-[0_0_25%] min-[981px]:flex-[0_0_12.5%]"
      />
    </section>
  )
}
