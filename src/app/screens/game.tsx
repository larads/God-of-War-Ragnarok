import { gameInfo } from '@/utils'
import Image from 'next/image'
import { Wrapper } from './wrapper'

export function Game() {
  return (
    <section className="w-full min-h-[18rem] flex items-center bg-[#090a0a] py-24 sm:py-6">
      <Wrapper>
        <ul className="flex items-start justify-between flex-nowrap overflow-x-auto gap-4">
          {gameInfo.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center flex-shrink-0"
            >
              <div className="icon">
                <Image src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <span className="block text-[#bdc2cb] text-center font-normal text-lg leading-[160%] mt-3">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}
