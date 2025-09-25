'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { ProjectDetailsSectionsEnum } from '../../enum'
import SidebarItem from './SidebarItem'
import { projectDetailSections } from '../../lib'
import { ProjectDetailsSidebarPropsType } from './types'

const ProjectDetailsSidebar: FC<ProjectDetailsSidebarPropsType> = (props) => {
  const [activeIndicatorTop, setActiveIndicatorTop] = useState(0)
  const overviewSpyRef = useRef<HTMLLIElement>(null)
  const techSpyRef = useRef<HTMLLIElement>(null)
  const featuresSpyRef = useRef<HTMLLIElement>(null)
  const challengesSpyRef = useRef<HTMLLIElement>(null)
  const resultsSpyRef = useRef<HTMLLIElement>(null)
  const gallerySpyRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    switch (props.activeSection) {
      case ProjectDetailsSectionsEnum.Overview:
        setActiveIndicatorTop(overviewSpyRef.current?.offsetTop || 0)
        break
      case ProjectDetailsSectionsEnum.Tech:
        setActiveIndicatorTop(techSpyRef.current?.offsetTop || 0)
        break
      case ProjectDetailsSectionsEnum.Features:
        setActiveIndicatorTop(featuresSpyRef.current?.offsetTop || 0)
        break
      case ProjectDetailsSectionsEnum.Challenges:
        setActiveIndicatorTop(challengesSpyRef.current?.offsetTop || 0)
        break
      case ProjectDetailsSectionsEnum.Results:
        setActiveIndicatorTop(resultsSpyRef.current?.offsetTop || 0)
        break
      case ProjectDetailsSectionsEnum.Gallery:
        setActiveIndicatorTop(gallerySpyRef.current?.offsetTop || 0)
        break
      default:
        setActiveIndicatorTop(0)
        break
    }
  }, [props.activeSection])

  return (
    <aside className="relative hidden flex-1 xl:block">
      <ul className="sticky top-20">
        <li
          className="absolute -left-[1.5px] z-10 h-7 w-1 rounded-full bg-indigo-500 transition-all duration-300"
          style={{
            top: `${activeIndicatorTop + 6}px`,
          }}
        />
        <SidebarItem
          id={projectDetailSections.overview.id}
          title={projectDetailSections.overview.title}
          ref={overviewSpyRef}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Overview}
        />
        <SidebarItem
          ref={techSpyRef}
          id={projectDetailSections.tech.id}
          emoji={projectDetailSections.tech.emoji}
          title={projectDetailSections.tech.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Tech}
        />
        <SidebarItem
          ref={featuresSpyRef}
          id={projectDetailSections.features.id}
          emoji={projectDetailSections.features.emoji}
          title={projectDetailSections.features.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Features}
        />
        <SidebarItem
          ref={challengesSpyRef}
          id={projectDetailSections.challenges.id}
          emoji={projectDetailSections.challenges.emoji}
          title={projectDetailSections.challenges.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Challenges}
        />
        <SidebarItem
          ref={resultsSpyRef}
          id={projectDetailSections.results.id}
          emoji={projectDetailSections.results.emoji}
          title={projectDetailSections.results.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Results}
        />
        {props.hasGallery && (
          <SidebarItem
            ref={gallerySpyRef}
            id={projectDetailSections.gallery.id}
            emoji={projectDetailSections.gallery.emoji}
            title={projectDetailSections.gallery.title}
            isActive={props.activeSection === ProjectDetailsSectionsEnum.Gallery}
          />
        )}
      </ul>
    </aside>
  )
}

export default ProjectDetailsSidebar
