import { Heading } from '@/components/heading'
import Image from 'next/image'
import { Wrapper } from './wrapper'

import kratoeatreus from './../../assets/images/kratos-atreus.png'
import ssImage from './../../assets/images/logo-sta-monica-sony.png'

export function Story() {
  return (
    <section className="w-full py-16 bg-cover bg-center bg-no-repeat bg-[url('/bg-story.png')] overflow-hidden md:bg-none md:py-6">
      <Wrapper>
        <div className="flex items-center md:flex-col-reverse">
          <div className="w-full max-w-[62.9rem] text-left md:max-w-full md:text-center">
            <Heading title="Sony Interactive Entertainment" />
            <h2 className="mt-7 mb-6 max-w-[50.2rem] md:max-w-[75%] md:mx-auto md:mt-5 md:mb-5 sm:max-w-[95%] sm:text-3xl">
              Embarque com Kratos e Atreus em uma jornada épica
            </h2>
            <p className="mb-14 text-lg sm:mb-10 sm:text-base">
              O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove
              Reinos em busca de respostas enquanto as forças asgardianas se
              preparam para uma batalha profetizada que causará o fim do mundo.
              Nessa jornada, eles explorarão paisagens míticas impressionantes e
              enfrentarão inimigos aterradores: deuses nórdicos e monstros. A
              ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher
              entre a segurança deles próprios e a dos reinos.
            </p>
            <div className="flex items-center gap-10 md:justify-center sm:flex-col">
              <Image src={ssImage} alt={''} />
              <p className="mb-0 text-base leading-relaxed max-w-[32.4rem]">
                Do Santa Monica Studio, esta é a sequência da aclamada versão de
                2018 de God of War.
              </p>
            </div>
          </div>
          <div className="relative sm:mb-10">
            <Image
              src={kratoeatreus}
              alt={''}
              className="relative left-[120px] top-[-45px] md:left-0 md:top-0 md:mb-14 w-full h-auto"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
