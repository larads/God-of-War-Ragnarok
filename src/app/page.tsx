import Head from "next/head";
import { Header } from "@/components/header";

import { Hero } from "./screens/hero";
import { Game } from "./screens/game";
import { Story } from "./screens/story";
import { Characters } from "./screens/characters";

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
      {/* <Characters /> */}
    </>
  )
}
