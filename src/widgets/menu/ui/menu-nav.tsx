import { twMerge } from 'tailwind-merge'

import { MenuLinkProps } from './menu-link'
import { MenuList } from './menu-list'

export interface MenuNavProps {
  links: MenuLinkProps[]
  className?: string
}

export function MenuNav({ links, className = 'gap-4 md:gap-14' }: Readonly<MenuNavProps>) {
  return (
    <nav>
      <ul className={twMerge('flex', 'flex-col', 'text-center', 'gap-4 md:gap-14', className)}>
        <MenuList links={links} />
      </ul>
    </nav>
  )
}
