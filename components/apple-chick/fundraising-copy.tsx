import { PHONE } from "@/components/apple-chick/content"

export function FundraisingCopy() {
  return (
    <div className="text-left text-[21px] leading-[31.5px] font-medium text-[#666666]">
      <h1 className="mb-4 text-[53px] leading-[53px] font-extrabold text-[#E02B20]">Fundraising</h1>
      <p className="mb-[1em]">With The Apple Chick Fundraiser, your organization sets the selling price!</p>
      <p className="mb-[1em]">
        Sell each apple for $15 and earn $8 profit per apple.
        <br />
        Sell each apple for $16 and earn $9 profit per apple.
      </p>
      <p className="mb-[1em]">That can really add up!</p>
      <p className="mb-[1em]">Imagine the possibilities…</p>
      <p className="mb-[1em]">Think selling that many apples sounds impossible? Let’s break it down.</p>
      <p className="mb-[1em]">
        If your organization has 100 participants, and each person sells just 10 apples, that’s:
      </p>
      <p className="mb-[1em]">
        🍎 1,000 apples sold
        <br />
        💰 $8,000 profit if you sell for $15 each
        <br />
        💰 $9,000 profit if you sell for $16 each
      </p>
      <p className="mb-[1em]">Now ask yourself…</p>
      <p className="mb-[1em]">What could your organization do with an extra $8,000–$9,000?</p>
      <p className="mb-[1em]">
        Whether you’re raising money for sports, music, FFA, 4-H, church groups, PTO/PTA, clubs, or travel
        expenses, those dollars can make a huge difference.
      </p>
      <p className="mb-[1em]">
        And the best part? Each participant only needs to sell about 10 apples to reach those totals!
      </p>
      <p className="mb-[1em]">Now comes the fun part… figuring out what you’ll do with all that extra cash! 🎉</p>
    </div>
  )
}

export function TurnaroundNote() {
  return (
    <p className="text-center text-[14px] leading-normal font-bold text-[#666666]">
      Turnaround times are approximate and may take longer in some cases. If you need your apples by a
      specific date, please let us know when you book your fundraiser date.
    </p>
  )
}

export function PhoneCallout() {
  return (
    <p className="mb-3 text-center text-[28px] leading-[36.4px] font-bold text-[#666666]">
      Contact us today at
      <br />
      {PHONE}
      <br />
      for more information
    </p>
  )
}
