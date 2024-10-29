import { twMerge } from 'tailwind-merge'

import { THEME_COLORS } from '@entities/colors'
import { GLOBAL_METADATA } from '@entities/metadata'

export interface FooterProps {
  children: React.ReactNode
  className?: string
}

export function Footer({ children, className }: FooterProps) {
  return (
    <footer>
      <div
        className={twMerge(
          'flex',
          'flex-col',
          'items-center',
          'text-sm',
          'pt-6',
          'container',
          'mx-auto',
          'border-t border-t-c',
          THEME_COLORS.border,
          className
        )}
      >
        <div className='pt-6 pb-2'>{children}</div>
        <p className='opacity-60'>© 2024 {GLOBAL_METADATA.title?.toString()}.</p>
      </div>
    </footer>
  )
}
