import { Icon } from '@iconify/react'
import SectionTitle from '@/app/_components/section-title/SectionTitle'
import { homeIntroTechnologyListOne } from '@/app/_components/home-intro/home-intro-technologies.data'

export default function HomeSkills() {
  return (
    <section id="skills" className="relative mx-auto my-20 w-full max-w-7xl">
      <SectionTitle title="What I Bring" description="The Magic" specialWord="Mix" />
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
        {homeIntroTechnologyListOne.map(({ name, logo }) => (
          <div key={name} style={{ opacity: 1, transform: 'none' }}>
            <span
              data-slot="badge"
              className="[&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/15 bg-neutral-900 px-3 py-1 text-sm whitespace-nowrap text-white transition-[color,box-shadow] focus-visible:ring-[3px] md:px-4 md:py-1.5"
            >
              {logo && <Icon icon={logo} width="14" color="#ffffff" />}
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
