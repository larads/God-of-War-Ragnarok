import { Header } from '@/components/header'
import Head from 'next/head'

import { Characters } from './screens/characters'
import { Game } from './screens/game'
import { Hero } from './screens/hero'
import { Story } from './screens/story'

export default function Home() {
  return (
    <>
      <Head>
        <title>God of war - Ragnarok</title>
      </Head>
      <Header />
      <Hero />
      <Game />
      <Story />
      <Characters />
    </>
  )
}
