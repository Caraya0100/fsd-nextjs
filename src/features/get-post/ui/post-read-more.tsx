import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { THEME_COLORS } from '@entities/colors'

export interface PostReadMoreProps {
  postUrl: string
}

export function PostReadMore({ postUrl }: PostReadMoreProps) {
  return (
    <Link href={postUrl} className={twMerge(THEME_COLORS.highlightText, 'font-bold')}>
      Read more
    </Link>
  )
}
