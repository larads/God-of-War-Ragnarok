import Image from 'next/image'
import { gameInfo } from '@/utils'
import { Wrapper } from './wrapper'

export function Game() {
  return (
    <section className="w-full min-h-[18rem] flex items-center bg-[#090a0a] py-24 sm:py-6">
      <Wrapper>
        <ul className="flex items-start justify-between flex-wrap gap-y-12">
          {gameInfo.map((item, index) => (
            <li key={index} className="flex flex-col items-center justify-center w-1/3 sm:w-1/2">
              <div className="icon">
                <Image src={item.icon} alt={item.title} className="w-auto h-auto" />
              </div>
              <span className="block text-[#bdc2cb] text-center font-normal text-lg leading-[160%] mt-3 max-w-[14.5rem]">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}