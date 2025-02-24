import bullets from '@/assets/images/svgs/bullets.svg'
import Image from 'next/image'

interface HeadingProps {
  title: string
}

export function Heading({ title }: HeadingProps) {
  return (
    <div className="flex items-center gap-6">
      <Image src={bullets} alt="Asterisco" className="w-6 h-6" />
      <span className="text-2xl font-medium leading-[2.2rem]">{title}</span>
    </div>
  )
}
