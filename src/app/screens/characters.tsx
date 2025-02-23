import 'swiper/css'
import 'swiper/css/free-mode'

import Image from 'next/image'
import brand from '@/assets/images/logo.jpg'
import axel from '@/assets/images/axel.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading } from '@/components/heading'
import { Wrapper } from './wrapper'
import { CardCharacter } from '@/components/card-character'
import { characters } from '@/utils/characters'
import { FreeMode } from 'swiper/modules'

export function Characters() {
    return (
        <section className="pt-[17.6rem] pb-[14.3rem] bg-[url('/bg-characters.png')] bg-no-repeat bg-center overflow-hidden sm:py-16">
            <Wrapper>
                <header className="flex justify-between flex-col items-center lg:flex-row">
                    <div className="max-w-[61.2rem] text-center lg:text-left mb-16 lg:mb-0">
                        <Heading title="Conheça os personagens" />
                        <h2>Toda grande aventura é uma história esperando para ser contada</h2>
                        <p className="text-lg text-gray-300">
                            Reviva o começo da jornada nórdica épica de Kratos e Atreus em Mitos de Midgard. Um alerta para quem não está familiarizado com God of War: spoilers à frente.
                        </p>
                    </div>

                    <div className="flex items-center flex-col lg:flex-row">
                        <Image src={axel} alt="" className="w-auto h-auto" />
                        <div className="text-center lg:text-left mt-6 lg:mt-0">
                            <Image src={brand} alt="" className="mx-auto lg:mx-0" />
                            <span className="block text-white text-lg font-medium mt-5">Lançamento dia 09/11/2022</span>
                        </div>
                    </div>
                </header>

                <Swiper
                    data-aos="fade-up"
                    spaceBetween={20}
                    freeMode={true}
                    breakpoints={{
                        320: { slidesPerView: 1.1, spaceBetween: 20 },
                        768: { slidesPerView: 2.2, spaceBetween: 20 },
                        991: { slidesPerView: 2.8, spaceBetween: 20 },
                        1200: { slidesPerView: 3.5, spaceBetween: 20 },
                    }}
                    className="s-characters"
                    modules={[FreeMode]}
                >
                    {characters.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardCharacter data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Wrapper>
        </section>
    )
}
