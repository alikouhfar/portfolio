import { generateRandomUUID } from '@/utils/generate-random-uuid'
import { IEducation } from '../types/education-list'

export const educations: Array<IEducation> = [
  {
    id: generateRandomUUID(),
    startYear: 2018,
    finishYear: 2022,
    title: 'Architectural Engineering',
    instituteTitle: 'Imam Khomeni International University',
    location: 'Qazvin - Iran',
    description:
      'Completed a comprehensive program in Architectural Engineering with emphasis on architectural design, structural systems, and sustainable construction methods. Gained hands-on experience through studio projects, technical workshops, and interdisciplinary teamwork. Developed strong analytical, visualization, and project management skills, while applying engineering principles to real-world urban and architectural challenges.',
  },
  {
    id: generateRandomUUID(),
    startYear: 2014,
    finishYear: 2018,
    title: 'Mathematics',
    instituteTitle: 'Shams Tabrizi High School',
    location: 'Nazarabad - Iran',
    description:
      'Focused on advanced mathematics including algebra, geometry, trigonometry, and calculus, building a solid foundation for analytical reasoning and technical problem-solving. Actively participated in academic competitions and collaborative study groups. Consistently achieved high performance in STEM-related subjects, strengthening logical thinking and preparing for university-level engineering studies.',
  },
]
