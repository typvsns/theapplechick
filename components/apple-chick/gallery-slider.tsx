"use client"

import { EMBLA_DURATION, GALLERY_IMAGES } from "@/components/apple-chick/content"
import { ImageCarousel } from "@/components/apple-chick/image-carousel"

/**
 * Live DiviTorque carousel 1:
 * slidesToShow 2, autoplaySpeed 2000, speed 700, infinite, no arrows or dots, swipe on.
 */
export function GallerySlider() {
  return (
    <div className="py-4">
      <ImageCarousel
        images={GALLERY_IMAGES}
        imageBasePath="/images/gallery"
        label="Apple Chick photos"
        autoplaySpeed={2000}
        duration={EMBLA_DURATION.gallery}
        aspectClassName="aspect-[4/5]"
        sizes="(max-width: 980px) 50vw, 25vw"
        slideClassName="min-w-0 flex-[0_0_50%] px-[3px]"
      />
    </div>
  )
}
