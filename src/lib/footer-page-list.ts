import { IFooterPage } from "@/types/footer-page-list"
import { generateRandomUUID } from "@/utils/generate-random-uuid"

export const footerPageListOne: Array<IFooterPage> = [
    {
        id: generateRandomUUID(),
        route: '',
        title: 'Home',
    },
    {
        id: generateRandomUUID(),
        route: '/about',
        title: 'About',
    },
    {
        id: generateRandomUUID(),
        route: '/projects',
        title: 'Projects',
    },
]
export const footerPageListTwo: Array<IFooterPage> = [
    {
        id: generateRandomUUID(),
        route: '/guestbook',
        title: 'Guest Book',
    },
    {
        id: generateRandomUUID(),
        route: '/bucket-list',
        title: 'Bucket List',
    },
    {
        id: generateRandomUUID(),
        route: '/uses',
        title: 'Uses',
    },
]
export const footerPageListThree: Array<IFooterPage> = [
    {
        id: generateRandomUUID(),
        route: '/contact',
        title: 'Book a call',
    },
    {
        id: generateRandomUUID(),
        route: '/links',
        title: 'Links',
    },
    {
        id: generateRandomUUID(),
        route: '/rss',
        title: 'RSS',
    },
]
