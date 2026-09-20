import { PRESS_VIDEOS } from "@/components/apple-chick/content"

export function PressVideos() {
  return (
    <section aria-label="The Apple Chick on TV" className="bg-[#FFE016] px-4 pb-8 pt-2">
      <div className="mx-auto grid w-full max-w-[1024px] grid-cols-1 gap-x-[56px] gap-y-6 min-[981px]:grid-cols-2">
        {PRESS_VIDEOS.map((video) => (
          <div key={video.src} className="relative aspect-video w-full overflow-hidden bg-black">
            <iframe
              src={video.src}
              title={video.title}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  )
}
