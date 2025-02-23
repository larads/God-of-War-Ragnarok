import type { ReactNode } from 'react'

interface ContainerProps {
  children?: ReactNode
}

export function Wrapper({ children }: ContainerProps) {
  return <div className="w-full max-w-[140.5rem] mx-auto px-6 md:max-w-[124.8rem]">{children}</div>
}
