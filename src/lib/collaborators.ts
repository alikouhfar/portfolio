import { ICollaborator } from '@/types/collaborator';
import { generateRandomUUID } from '@/utils/generate-random-uuid';

export const collaborators: Array<ICollaborator> = [
  {
    id: generateRandomUUID(),
    classNames: {
      top: 'top-[53%]',
      left: 'left-[63%]',
    },
    size: 80,
    src: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: generateRandomUUID(),
    classNames: {
      top: 'top-[4%]',
      left: 'left-[32%]',
    },
    size: 72,
    src: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: generateRandomUUID(),
    classNames: {
      top: 'top-[53%] lg:top-[50%] xl:top-[45%]',
      left: 'left-[20%] md:left-[20%] lg:left-[20%]',
    },
    size: 64,
    src: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: generateRandomUUID(),
    classNames: {
      top: 'top-[5%] lg:top-[8%] xl:top-[14%]',
      left: 'left-[68%] lg:left-[72%]',
    },
    size: 56,
    src: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: generateRandomUUID(),
    classNames: {
      top: 'top-[5%] lg:top-[10%] xl:top-[5%]',
      left: 'left-[5%] md:left-[10%] lg:left-[11%%]',
    },
    size: 48,
    src: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: generateRandomUUID(),
    classNames: {
      top: 'top-[50%] md:top-[57%]',
      left: 'left-[78%] md:left-[80%] lg:left-[85%]',
    },
    size: 40,
    src: 'https://randomuser.me/api/portraits/men/25.jpg',
  },
];
