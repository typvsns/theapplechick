import { ORDER_SHEETS } from "@/components/apple-chick/content"

export function OrderSheets() {
  return (
    <div className="pt-3 text-center">
      <h2 className="text-[26px] leading-tight font-bold text-[#E02B20]">Fundraising Order Sheets</h2>
      <p className="mt-3 mb-3 text-[14px] leading-normal font-semibold text-[#666666]">
        Download the sheet you want to use for your organizations fundraiser.
      </p>
      <div className="flex flex-col items-center">
        {ORDER_SHEETS.map((sheet) => (
          <a
            key={sheet.href}
            href={sheet.href}
            className={`mb-[11px] inline-block rounded-[3px] px-4 py-[4.8px] text-[16px] leading-[1.7] font-bold text-white transition duration-300 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#666666] ${
              sheet.tone === "purple" ? "bg-[#8300E9]" : "bg-[#E02B20]"
            }`}
          >
            {sheet.label}
          </a>
        ))}
      </div>
    </div>
  )
}
