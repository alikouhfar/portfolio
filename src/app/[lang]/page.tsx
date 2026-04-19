import { notFound } from 'next/navigation'
import { FC } from 'react'
import Home from './components/Home'
import { getDictionary, hasLocale } from './dictionaries'

const HomePage: FC<PageProps<'/[lang]'>> = async ({ params }) => {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()
  const dictionary = await getDictionary(lang)

  return <Home lang={lang} dictionary={dictionary} />
}

export default HomePage
