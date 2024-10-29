import { twMerge } from 'tailwind-merge'

import { Logo } from '@entities/logo'

export interface HeroHeaderProps {
  className?: string
  children?: React.ReactNode
}

export function HeroHeader({ className, children }: Readonly<HeroHeaderProps>) {
  return (
    <header className={twMerge('container', 'mx-auto', 'py-10', 'md:pt-20', 'md:pb-24', className)}>
      <Logo />
      <div>
        <p className='lg:mt-8 font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui erat, tempor eget sem id,
          s agittis pharetra sapien. Vivamus ac mauris sit amet libero faucibus sollicitudin ac nec
          mi.
        </p>
        <div className='pt-2'>{children}</div>
      </div>
    </header>
  )
}
