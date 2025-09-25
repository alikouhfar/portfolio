'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Project } from '@/types/project'
import { Icon } from '@iconify/react'
import { ArrowUpRight, RectangleVertical } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProjectDetailsSectionsEnum } from '../../enum'
import { projectDetailSections } from '../../lib'
import ProjectDetailsSidebar from '../ProjectDetailsSidebar'

const ProjectDetails: FC<Project> = (props) => {
  const [activeSection, setActiveSection] = useState(ProjectDetailsSectionsEnum.Overview)

  const [overviewRef, overviewInView] = useInView({ threshold: 0.3 })
  const [techRef, techInView] = useInView({ threshold: 0.3 })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3 })
  const [challengesRef, challengesInView] = useInView({ threshold: 0.3 })
  const [resultsRef, resultsInView] = useInView({ threshold: 0.3 })
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (overviewInView) setActiveSection(ProjectDetailsSectionsEnum.Overview)
    if (techInView) setActiveSection(ProjectDetailsSectionsEnum.Tech)
    if (featuresInView) setActiveSection(ProjectDetailsSectionsEnum.Features)
    if (challengesInView) setActiveSection(ProjectDetailsSectionsEnum.Challenges)
    if (resultsInView) setActiveSection(ProjectDetailsSectionsEnum.Results)
    if (galleryInView) setActiveSection(ProjectDetailsSectionsEnum.Gallery)
  }, [overviewInView, techInView, featuresInView, challengesInView, resultsInView, galleryInView])

  return (
    <div className="flex gap-14">
      <article className="flex flex-[3] flex-col gap-12">
        <header className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-5xl font-extrabold">{props.shortTitle}</h2>
            <div className="flex w-fit gap-x-2 md:text-sm">
              {props.repositoryUrl && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.repositoryUrl}
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-neutral-900 p-2 text-sm text-white transition-all hover:bg-neutral-800 focus-visible:ring-[3px]"
                >
                  <Icon icon="lucide:github" width="18" />
                  <span className="sr-only">GitHub Repository</span>
                </Link>
              )}
              {props.demoUrl && (
                <Link
                  href={props.demoUrl}
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="group relative flex h-10 w-fit items-center justify-between rounded-full bg-white text-black opacity-90"
                >
                  <span className="pl-4 text-base font-light">Live Demo</span>
                  <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                    <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                      <ArrowUpRight size={20} />
                      <ArrowUpRight size={20} className="mb-1 -translate-x-4" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <p className="text-lg text-zinc-500">{props.description}</p>
          <div className="flex gap-1">
            <Badge
              variant="outline"
              className={
                props.status === 'Completed'
                  ? 'border-lime-500 text-lime-500'
                  : 'border-yellow-500 text-yellow-500'
              }
            >
              {props.status}
            </Badge>
            <Badge variant="outline" className="border-sky-500 text-sky-500">
              {props.role}
            </Badge>
            <Badge variant="secondary">
              <span>{props.startYear}</span>
              {props.finishYear && (
                <>
                  &mdash;
                  <span>{props.finishYear}</span>
                </>
              )}
            </Badge>
          </div>
        </header>

        <figure className="h-[500px] w-full overflow-hidden rounded-lg border bg-neutral-900 p-2.5 lg:h-[650px]">
          <div className="relative h-full w-full">
            <Image
              src={props.imageUrl}
              alt={`${props.shortTitle} screenshot`}
              className="mx-auto rounded object-cover shadow-md"
              priority
              fill
            />
          </div>
          <figcaption className="sr-only">{props.shortTitle} main screenshot</figcaption>
        </figure>

        <section ref={overviewRef} id={projectDetailSections.overview.id} aria-labelledby="overview-heading">
          <h3 id="overview-heading" className="mb-2 text-3xl font-bold text-indigo-400">
            {projectDetailSections.overview.title}
          </h3>
          <p className="leading-6 text-zinc-400">{props.overview}</p>
        </section>

        <section ref={techRef} id={projectDetailSections.tech.id} aria-labelledby="tech-heading">
          <h3 id="tech-heading" className="mb-4 flex items-center gap-2.5 text-3xl font-bold text-indigo-400">
            <span className="text-2xl">{projectDetailSections.tech.emoji}</span>
            <span>{projectDetailSections.tech.title}</span>
          </h3>
          <ul className="space-y-2">
            {props.technologies.map((technology) => (
              <li key={technology.title} className="text-zinc-400">
                <strong className="text-zinc-50">{technology.title} –</strong> {technology.description}
              </li>
            ))}
          </ul>
        </section>

        <section ref={featuresRef} id={projectDetailSections.features.id} aria-labelledby="features-heading">
          <h3
            id="features-heading"
            className="mb-4 flex items-center gap-2.5 text-3xl font-bold text-indigo-400"
          >
            <span className="text-2xl">{projectDetailSections.features.emoji}</span>
            <span>{projectDetailSections.features.title}</span>
          </h3>
          <Accordion type="single" collapsible className="rounded-lg border bg-neutral-900">
            {props.features.map((feature) => (
              <AccordionItem value={feature.title} key={feature.title} className="px-3">
                <AccordionTrigger className="text-base font-semibold hover:cursor-pointer hover:no-underline">
                  <span className="flex gap-1.5">
                    <span>{feature.icon}</span> {feature.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-zinc-300/90">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section
          ref={challengesRef}
          id={projectDetailSections.challenges.id}
          aria-labelledby="challenges-heading"
        >
          <h3
            id="challenges-heading"
            className="mb-4 flex items-center gap-2.5 text-3xl font-bold text-indigo-400"
          >
            <span className="text-2xl">{projectDetailSections.challenges.emoji}</span>
            <span>{projectDetailSections.challenges.title}</span>
          </h3>
          <ul className="space-y-4">
            {props.challengesAndSolutions?.map((challengeAndSolution) => (
              <li key={challengeAndSolution.challenge} className="flex flex-col">
                <span className="flex items-center gap-1 text-lg font-bold">
                  <RectangleVertical size={18} /> {challengeAndSolution.challenge}
                </span>
                <span className="text-zinc-400">{challengeAndSolution.solution}</span>
              </li>
            ))}
          </ul>
        </section>

        <section ref={resultsRef} id={projectDetailSections.results.id} aria-labelledby="results-heading">
          <h3
            id="results-heading"
            className="mb-4 flex items-center gap-2.5 text-3xl font-bold text-indigo-400"
          >
            <span className="text-2xl">{projectDetailSections.results.emoji}</span>
            <span>{projectDetailSections.results.title}</span>
          </h3>
          <ul className="space-y-4">
            {props.results?.map((result, index) => (
              <li key={index} className="text-zinc-400">
                ▫️ {result}
              </li>
            ))}
          </ul>
        </section>

        {props.gallery && (
          <section ref={galleryRef} id={projectDetailSections.gallery.id} aria-labelledby="gallery-heading">
            <h3
              id="gallery-heading"
              className="mb-4 flex items-center gap-2.5 text-3xl font-bold text-indigo-400"
            >
              <span className="text-2xl">{projectDetailSections.gallery.emoji}</span>
              <span>{projectDetailSections.gallery.title}</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {props.gallery?.map((url, index) => (
                <figure
                  key={index}
                  className="h-80 w-full overflow-hidden rounded-lg border bg-neutral-900 p-2"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={url}
                      alt={`Screenshot ${index + 1} of ${props.title}`}
                      className="mx-auto rounded object-cover shadow-md"
                      loading="lazy"
                      fill
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        )}
      </article>

      <ProjectDetailsSidebar activeSection={activeSection} hasGallery={!!props.gallery?.length} />
    </div>
  )
}

export default ProjectDetails
