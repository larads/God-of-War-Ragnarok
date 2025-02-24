import Image from 'next/image'

import { Heading } from '@/components/heading'
import { Wrapper } from './wrapper'

import faixaEtaria from '@/assets/images/faixa-etaria.png'
import playIcon from '@/assets/images/svgs/play.svg'
import thumbGif from '@/assets/images/thumbnail.gif'

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed h-[80rem] py-16 px-4 md:py-32 md:px-0"
      style={{ backgroundImage: "url('bg-hero.jpg')" }}
    >
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-3xl text-center md:text-left">
            <Heading title="Lançamento dia 09/11/2022" />
            <h1>God of War Ragnarök</h1>
            <p>
              Os maiores heróis dos nove reinos, lutando por um futuro em que
              acreditam.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <strong className="bg-white text-black text-xl font-bold py-4 px-6">
                R$ 349,00
              </strong>
              <a
                href="#"
                target="_blank"
                className="bg-blue-600 text-white font-bold text-xl py-4 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Comprar na pré-venda
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0 max-w-lg text-center">
            <span className="block text-xl font-bold mb-4 text-white">
              Assista o trailer
            </span>
            <button
              type="button"
              className="relative w-full h-64 border-2 border-blue-600 shadow-lg overflow-hidden"
            >
              <Image
                className="w-full h-full object-cover"
                src={thumbGif}
                alt=""
              />
              <Image
                className="absolute bottom-8 left-8 w-12"
                src={playIcon}
                alt="Play"
              />
            </button>
            <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
              <Image src={faixaEtaria} alt="" className="w-16 h-16" />
              <p className="text-white text-lg max-w-xs text-center md:text-left">
                Drogas Lícitas, Linguagem Imprópria e Violência Extrema
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export { Hero }
