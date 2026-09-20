"use client"

import { useEffect, useMemo } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import type { EmblaCarouselType } from "embla-carousel"

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
  /**
   * When true, advance on a fixed interval only after the previous slide has
   * settled. That matches Slick's default waitForAnimate, which the live apple
   * slider needs because autoplaySpeed (1100) is shorter than speed (2700).
   * The gallery slider leaves this false and lets embla-carousel-autoplay run,
   * because its 2000ms delay is longer than its 700ms transition.
   */
  waitForSettle?: boolean
}

function useSettledAutoplay(api: EmblaCarouselType | undefined, autoplaySpeed: number, enabled: boolean) {
  useEffect(() => {
    if (!api || !enabled) return

    let dragging = false
    const onDown = () => {
      dragging = true
    }
    const onUp = () => {
      dragging = false
    }
    api.on("pointerDown", onDown)
    api.on("pointerUp", onUp)

    const id = window.setInterval(() => {
      if (dragging) return
      if (!api.internalEngine().scrollBody.settled()) return
      api.scrollNext()
    }, autoplaySpeed)

    return () => {
      window.clearInterval(id)
      api.off("pointerDown", onDown)
      api.off("pointerUp", onUp)
    }
  }, [api, autoplaySpeed, enabled])
}

export function ImageCarousel({
  images,
  imageBasePath,
  label,
  autoplaySpeed,
  duration,
  slideClassName,
  sizes,
  aspectClassName,
  waitForSettle = false,
}: ImageCarouselProps) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: autoplaySpeed,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    [autoplaySpeed],
  )

  const [viewportRef, api] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration,
      watchDrag: true,
    },
    waitForSettle ? [] : [autoplay],
  )

  useSettledAutoplay(api, autoplaySpeed, waitForSettle)

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
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
