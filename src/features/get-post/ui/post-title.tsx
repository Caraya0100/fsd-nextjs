import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { THEME_COLORS } from '@entities/colors'

export interface PostTitleProps {
  postLink: string
  children: string
}

export function PostTitle({ postLink, children }: Readonly<PostTitleProps>) {
  return (
    <h3 className={`${THEME_COLORS.heading} text-lg pt-9 pb-4`}>
      <Link href={postLink}>{children}</Link>
    </h3>
  )
}
