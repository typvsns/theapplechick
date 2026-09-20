import { PHONE } from "@/components/apple-chick/content"

export function SiteFooter() {
  return (
    <footer className="bg-[#ffe016] px-4 py-8 text-center text-[#666666]">
      <p>© 2023, The Apple Chick</p>
      <p className="mt-2">{PHONE}</p>
    </footer>
  )
}
