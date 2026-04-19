import { FooterProps } from '@/app/[lang]/types'
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import Link from 'next/link'
import { FC } from 'react'

export const Footer: FC<FooterProps> = ({ lang, dictionary }) => {
  const currentYear = new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { year: 'numeric' }).format(
    new Date()
  )

  return (
    <footer id="contact" className="bg-bg border-ink/10 border-t px-6 py-20 md:px-20">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="bg-ink flex h-8 w-8 items-center justify-center rounded-full">
            <span className="font-grotesk text-xs font-bold text-white">AK</span>
          </div>
          <span className="text-display text-xl font-bold tracking-tighter uppercase">Ali Kouhfar</span>
        </div>

        <div className="flex gap-12">
          <div className="space-y-4">
            <p className="text-ink-muted text-xs tracking-widest uppercase">{dictionary.social}</p>
            <div className="flex gap-6">
              <Link
                href={process.env.NEXT_PUBLIC_GITHUB as string}
                className="hover:text-theme transition-colors"
              >
                <IconBrandGithub />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_LINKEDIN as string}
                className="hover:text-theme transition-colors"
              >
                <IconBrandLinkedin />
              </Link>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="hover:text-theme transition-colors"
              >
                <IconMail />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-ink-muted text-xs tracking-widest uppercase">{dictionary.contact}</p>
            <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="font-medium">
              +98 933 639 4004
            </Link>
            <p className="font-medium">{dictionary.address}</p>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="border-ink/10 group hover:bg-ink rounded-full border p-4 transition-all hover:text-white"
        >
          <IconArrowUpRight className="h-6 w-6 -rotate-45 transition-transform group-hover:rotate-0" />
        </button>
      </div>

      <div className="border-ink/5 text-ink-muted mt-20 flex flex-col items-center justify-between gap-4 border-t pt-8 text-[10px] tracking-widest uppercase md:flex-row">
        <p>
          &copy; {currentYear} {dictionary.rights}
        </p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-theme transition-colors">
            {dictionary.privacyPolicy}
          </a>
          <a href="#" className="hover:text-theme transition-colors">
            {dictionary.tos}
          </a>
        </div>
      </div>
    </footer>
  )
}
