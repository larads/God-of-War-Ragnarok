'use client'

import { CardCharacter } from '@/components/card-character'
import { characters } from '@/utils/characters'
import { FreeMode } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'


export function Slide() {
    return (
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
    )
}