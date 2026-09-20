"use client"

import { APPLE_IMAGES, EMBLA_DURATION } from "@/components/apple-chick/content"
import { ImageCarousel } from "@/components/apple-chick/image-carousel"

/**
 * Live DiviTorque carousel 0:
 * slidesToShow 8 / 4 at ≤980 / 2 at ≤767, infinite, autoplaySpeed 1100,
 * speed 2700, ease-in-out, arrows off, dots off, swipe on.
 */
export function AppleProductSlider() {
  return (
    <ImageCarousel
      images={APPLE_IMAGES}
      imageBasePath="/images/apples"
      label="Candy apple products"
      autoplaySpeed={1100}
      duration={EMBLA_DURATION.apple}
      waitForSettle
      aspectClassName="aspect-[3/4]"
      sizes="(max-width: 767px) 50vw, (max-width: 980px) 25vw, 12.5vw"
      slideClassName="min-w-0 flex-[0_0_50%] min-[768px]:flex-[0_0_25%] min-[981px]:flex-[0_0_12.5%]"
    />
  )
}
