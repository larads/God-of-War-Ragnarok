import Image from 'next/image'

// import brandGOW from '../assets/logo.png'
// import brandSony from '@/assets/images/svgs/sony.svg'

export function Header() {
  return (
    <header className="flex items-center w-full h-32 bg-gray-900">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4">
        {/* <Image src={brandSony} alt="logo sony" className="w-24 h-auto" /> */}
        {/* <Image src={brandGOW} alt="logo gow" className="w-24 h-auto" /> */}
        <div className="flex items-center gap-6">
          <span className="font-semibold text-lg">Disponível para</span>
          <ul className="flex gap-4">
            <li className="px-3 py-1 border border-white font-semibold text-lg">PS4</li>
            <li className="px-3 py-1 border border-white font-semibold text-lg">PS5</li>
          </ul>
        </div>
      </div>
    </header>
  )
}