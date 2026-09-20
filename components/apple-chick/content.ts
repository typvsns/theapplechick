/** Live theapplechick.com assets and copy. Paths are local files under public/. */

export const PHONE = "209-850-5670"

export const SITE_DESCRIPTION =
  "Candy apple fundraisers for schools, teams, and organizations. Your group sets the selling price and keeps the profit."

export const APPLE_IMAGES = [
  "IMG_6864.jpeg",
  "IMG_6861.jpeg",
  "IMG_6857.jpeg",
  "IMG_6849.jpeg",
  "IMG_6797.jpeg",
  "IMG_6788.jpeg",
  "IMG_6782.jpeg",
  "IMG_5797.jpeg",
  "IMG_5792.jpeg",
  "IMG_4156-scaled.jpeg",
  "IMG_4148.jpeg",
  "IMG_4142.jpeg",
  "IMG_4141.jpeg",
  "IMG_1669.jpeg",
  "IMG_1668.jpeg",
  "IMG_1501.jpeg",
  "IMG_1154.jpeg",
  "IMG_1512.jpeg",
] as const

export const GALLERY_IMAGES = [
  "486117394_3543979309079557_816330169968161090_n.jpg",
  "486034717_3544934772317344_7807417029322772423_n.jpg",
  "486314875_3545109358966552_8277805613578689600_n.jpg",
  "469606016_18346849627130642_65387820664548956_n.jpg",
] as const

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/theapplechick209",
    label: "Follow on Facebook",
    network: "facebook",
    color: "#3b5998",
  },
  {
    href: "https://www.instagram.com/theapplechick209/",
    label: "Follow on Instagram",
    network: "instagram",
    color: "#ea2c59",
  },
  {
    href: "https://www.tiktok.com/@theapplechick",
    label: "Follow on TikTok",
    network: "tiktok",
    color: "#fe2c55",
  },
] as const

export const PRESS_VIDEOS = [
  {
    src: "https://www.youtube-nocookie.com/embed/xU-jTuTQpPs",
    title: "The Apple Chick on GoodDay Sacramento",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/A-9vSginITs",
    title: "The Apple Chick On FOX40",
  },
] as const

/** First two sheets are purple on the live site; the rest are red.
 * Filenames under public/pdfs/ must stay exact:
 * Fundraiser-information.pdf, Fundraiser-Voucher-Program-1.pdf,
 * Fundraiser-LilBit-Everything.pdf, Fundraiser-Wht-Choc.pdf,
 * Fundraiser-Candy-Lovers.pdf, Fundraiser-Nut-Lovers.pdf
 */
export const ORDER_SHEETS = [
  {
    href: "/pdfs/Fundraiser-information.pdf",
    label: "Fundraiser Information Sheet",
    tone: "purple",
  },
  {
    href: "/pdfs/Fundraiser-Voucher-Program-1.pdf",
    label: "Voucher Program",
    tone: "purple",
  },
  {
    href: "/pdfs/Fundraiser-LilBit-Everything.pdf",
    label: "The Lil' Bit of Everything Sheet",
    tone: "red",
  },
  {
    href: "/pdfs/Fundraiser-Wht-Choc.pdf",
    // Live site typo is "Chololate"; prefer correct spelling in the UI.
    label: "The White Chocolate Lover Sheet",
    tone: "red",
  },
  {
    href: "/pdfs/Fundraiser-Candy-Lovers.pdf",
    label: "The Candy Lover Sheet",
    tone: "red",
  },
  {
    href: "/pdfs/Fundraiser-Nut-Lovers.pdf",
    label: "The Nut Lover Sheet",
    tone: "red",
  },
] as const

/** Brand images under public/images/. Hero uses the yard-sign PNG like the live site. */
export const BRAND_IMAGES = {
  yardSign: "/images/Apple-Chick-Yard-Sign.png",
  largeLogo: "/images/applechicklarge.jpg",
} as const

/**
 * Embla's `duration` is a 60Hz spring factor (friction 0.68), not milliseconds.
 * Calibrated so a slide settles in about the same time as the live Slick `speed`.
 * 35 ≈ 2750ms (live apple speed is 2700). 11 ≈ 733ms (live gallery speed is 700).
 */
export const EMBLA_DURATION = {
  apple: 35,
  gallery: 11,
} as const
