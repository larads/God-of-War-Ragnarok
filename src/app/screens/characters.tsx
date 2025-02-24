import 'swiper/css'
import 'swiper/css/free-mode'

import axel from '@/assets/images/axel.png'
import brand from '@/assets/images/logo.jpg'
import { Heading } from '@/components/heading'
import { Slide } from '@/components/slide'
import Image from 'next/image'
import { Wrapper } from './wrapper'

export function Characters() {
  return (
    <section className="pt-[17.6rem] pb-[14.3rem] bg-[url('/bg-characters.png')] bg-no-repeat bg-center overflow-hidden sm:py-16">
      <Wrapper>
        <header className="flex justify-between flex-col items-center lg:flex-row">
          <div className="max-w-[61.2rem] text-center lg:text-left mb-16 lg:mb-0">
            <Heading title="Conheça os personagens" />
            <h2>
              Toda grande aventura é uma história esperando para ser contada
            </h2>
            <p className="text-lg text-gray-300">
              Reviva o começo da jornada nórdica épica de Kratos e Atreus em
              Mitos de Midgard. Um alerta para quem não está familiarizado com
              God of War: spoilers à frente.
            </p>
          </div>

          <div className="flex items-center flex-col lg:flex-row">
            <Image src={axel} alt="" className="w-auto h-auto" />
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              <Image src={brand} alt="" className="mx-auto lg:mx-0" />
              <span className="block text-white text-lg font-medium mt-5">
                Lançamento dia 09/11/2022
              </span>
            </div>
          </div>
        </header>

        <Slide />
      </Wrapper>
    </section>
  )
}
