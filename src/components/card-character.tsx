import Image, { type StaticImageData } from 'next/image'

interface CardCharacterProps {
  image: StaticImageData
  name: string
  desc: string
}

type Props = {
  data: CardCharacterProps
}

export function CardCharacter({ data }: Props) {
  return (
    <div className="w-full overflow-hidden group">
      <div className="relative w-full max-h-[48rem] mb-6 flex justify-center overflow-hidden sm:max-h-[44rem]">
        <Image
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <button
          type="button"
          className="absolute bottom-0 opacity-0 bg-[#3265ea] font-bold text-lg leading-5 px-9 py-4 transition-all duration-300 group-hover:bottom-24 group-hover:opacity-100"
        >
          Saiba mais
        </button>
      </div>
      <div>
        <h3 className="font-bold text-xl leading-5 mb-2">{data.name}</h3>
        <span className="font-normal text-base leading-6">{data.desc}</span>
      </div>
    </div>
  )
}
