"use client"

import { EMBLA_DURATION, GALLERY_IMAGES } from "@/components/apple-chick/content"
import { ImageCarousel } from "@/components/apple-chick/image-carousel"

/**
 * Slider B — right-column packaged apples.
 * slidesToShow 2; autoplaySpeed 2000; speed 700; pauseOnHover; infinite; no arrows/dots.
 */
export function GallerySlider() {
  return (
    <div className="w-full py-2">
      <ImageCarousel
        images={GALLERY_IMAGES}
        imageBasePath="/images/gallery"
        label="Apple Chick photos"
        autoplaySpeed={2000}
        duration={EMBLA_DURATION.gallery}
        objectFit="cover"
        aspectClassName="aspect-[236/295]"
        sizes="(max-width: 980px) 50vw, 242px"
        slideClassName="min-w-0 flex-[0_0_50%] px-[3px]"
      />
    </div>
  )
}
