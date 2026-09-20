import { SOCIAL_LINKS } from "@/components/apple-chick/content"

function SocialIcon({ network }: { network: (typeof SOCIAL_LINKS)[number]["network"] }) {
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9 fill-white">
        <path d="M15.1 8.5h-2.1V7.1c0-.5.3-.6.6-.6h1.5V4.1l-2.1-.1c-2.3 0-2.9 1.8-2.9 2.9v1.6H8.1V11h1.9v8.9h2.9V11h2l.2-2.5z" />
      </svg>
    )
  }

  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-white stroke-[1.8]">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="white" stroke="none" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-white">
      <path d="M14.2 3.2c.4 2.2 1.8 3.6 3.9 3.8v2.4c-1.3 0-2.5-.4-3.6-1.1v6.4c0 3.3-2.4 5.7-5.6 5.7S3.2 17.9 3.2 14.6s2.5-5.6 5.7-5.6c.3 0 .7 0 1 .1v2.6c-.3-.1-.6-.2-1-.2-1.8 0-3.2 1.5-3.2 3.2s1.4 3.2 3.2 3.2 3.1-1.4 3.1-3.2V3.2h2.2z" />
    </svg>
  )
}

export function SocialHeader() {
  return (
    <header className="bg-[#ffe016] px-4 py-8">
      <div className="mx-auto w-[80%] max-w-[1080px] text-center">
        <h1 className="text-[30px] leading-tight font-extrabold text-[#666666]">
          Follow us on Facebook and Instagram
        </h1>
        <ul className="mt-6 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.network}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex h-[76px] w-[76px] items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: link.color }}
              >
                <SocialIcon network={link.network} />
                <span className="sr-only">Follow</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
