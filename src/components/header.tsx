import Image from 'next/image'

import brandGOW from '@/assets/images/logo.png'
import brandSony from '@/assets/images/svgs/sony.svg'

export function Header() {
  return (
    <header className="flex w-full h-16">
      <div className="flex justify-around items-center w-full mx-auto">
        <Image src={brandSony} alt="logo sony" className="w-10 h-auto" />
        <Image src={brandGOW} alt="logo gow" className="w-44 h-auto" />
        <div className="flex items-center gap-4">
          <span className="font-semibold text-base">Disponível para</span>
          <ul className="flex gap-4">
            <li className="px-3 py-1 border border-white font-semibold text-base">PS4</li>
            <li className="px-3 py-1 border border-white font-semibold text-base">PS5</li>
          </ul>
        </div>
      </div>
    </header>
  )
}