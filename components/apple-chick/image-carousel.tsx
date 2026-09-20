"use client"

import { useMemo } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

type ImageCarouselProps = {
  images: readonly string[]
  imageBasePath: string
  label: string
  /** Slick autoplaySpeed in ms. */
  autoplaySpeed: number
  /** Embla spring duration calibrated to the live Slick transition speed. */
  duration: number
  slideClassName: string
  sizes: string
  aspectClassName: string
  /** object-fit: live Slider A uses fill; gallery looks better with cover. */
  objectFit?: "cover" | "fill"
}

/**
 * Embla + autoplay. When duration > delay (Slider A: 2700 vs 1100), Embla keeps
 * chasing the next snap so the track stays mid-transition like live Slick.
 * pauseOnHover via stopOnMouseEnter.
 */
export function ImageCarousel({
  images,
  imageBasePath,
  label,
  autoplaySpeed,
  duration,
  slideClassName,
  sizes,
  aspectClassName,
  objectFit = "cover",
}: ImageCarouselProps) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: autoplaySpeed,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [autoplaySpeed],
  )

  const [viewportRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration,
      watchDrag: true,
    },
    [autoplay],
  )

  return (
    <div className="overflow-hidden" aria-roledescription="carousel" aria-label={label} ref={viewportRef}>
      <div className="flex touch-pan-y">
        {images.map((file, index) => (
          <div className={slideClassName} key={file}>
            <div className={`relative w-full ${aspectClassName}`}>
              <Image
                src={`${imageBasePath}/${file}`}
                alt=""
                fill
                sizes={sizes}
                className={objectFit === "fill" ? "object-fill" : "object-cover"}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
