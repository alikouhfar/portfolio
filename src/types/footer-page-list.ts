export interface IFooterPageListProps {
    pages: Array<IFooterPage>
}

export interface IFooterPage {
    id: string
    route: string
    title: string
}
