import Link from 'next/link'

export interface MenuLinkProps {
  href: string
  children: string
  onClick?: () => void
}

export function MenuLink({ href, children, onClick }: MenuLinkProps) {
  return (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  )
}
