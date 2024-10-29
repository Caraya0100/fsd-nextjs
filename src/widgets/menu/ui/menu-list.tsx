import { v4 as uuidv4 } from 'uuid'

import { MenuLink, MenuLinkProps } from './menu-link'

export interface MenuListProps {
  links: MenuLinkProps[]
}

export function MenuList({ links }: Readonly<MenuListProps>) {
  return links.map((link) => (
    <li key={uuidv4()}>
      <MenuLink href={link.href}>{link.children}</MenuLink>
    </li>
  ))
}
