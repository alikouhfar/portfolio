import { ProjectDetailsSectionsEnum } from './enum'

export const projectDetailSections = {
  [ProjectDetailsSectionsEnum.Overview]: { id: 'overview', title: 'Overview' },
  [ProjectDetailsSectionsEnum.Tech]: {
    id: 'tech',
    emoji: '💻',
    title: 'Tech Stack',
  },
  [ProjectDetailsSectionsEnum.Features]: { id: 'features', emoji: '✨', title: 'Key Features' },
  [ProjectDetailsSectionsEnum.Challenges]: {
    id: 'challenges',
    emoji: '🧩',
    title: 'Challenges & Solutions',
  },
  [ProjectDetailsSectionsEnum.Results]: { id: 'results', emoji: '📊', title: 'Results' },
  [ProjectDetailsSectionsEnum.Gallery]: { id: 'gallery', emoji: '🎨', title: 'Gallery' },
}
