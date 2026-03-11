'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { ProjectDetailsSectionsEnum } from '../../enums/project-details-sections'
import { projectDetailsSections } from '../../lib/project-details-sections'
import { IProjectDetailsSidebarProps } from '../../types/project-details-sidebar'
import SidebarItem from './SidebarItem'

const ProjectDetailsSidebar: FC<IProjectDetailsSidebarProps> = (props) => {
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
          id={projectDetailsSections.overview.id}
          title={projectDetailsSections.overview.title}
          ref={overviewSpyRef}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Overview}
        />
        <SidebarItem
          ref={techSpyRef}
          id={projectDetailsSections.tech.id}
          emoji={projectDetailsSections.tech.emoji}
          title={projectDetailsSections.tech.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Tech}
        />
        <SidebarItem
          ref={featuresSpyRef}
          id={projectDetailsSections.features.id}
          emoji={projectDetailsSections.features.emoji}
          title={projectDetailsSections.features.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Features}
        />
        <SidebarItem
          ref={challengesSpyRef}
          id={projectDetailsSections.challenges.id}
          emoji={projectDetailsSections.challenges.emoji}
          title={projectDetailsSections.challenges.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Challenges}
        />
        <SidebarItem
          ref={resultsSpyRef}
          id={projectDetailsSections.results.id}
          emoji={projectDetailsSections.results.emoji}
          title={projectDetailsSections.results.title}
          isActive={props.activeSection === ProjectDetailsSectionsEnum.Results}
        />
        {props.hasGallery && (
          <SidebarItem
            ref={gallerySpyRef}
            id={projectDetailsSections.gallery.id}
            emoji={projectDetailsSections.gallery.emoji}
            title={projectDetailsSections.gallery.title}
            isActive={props.activeSection === ProjectDetailsSectionsEnum.Gallery}
          />
        )}
      </ul>
    </aside>
  )
}

export default ProjectDetailsSidebar
