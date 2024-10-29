import Link from 'next/link'

import { THEME_COLORS } from '@entities/colors'

export interface PostMetadataProps {
  author: string
  category: string
  date: string
}

export function PostMetadata({ author, category, date }: PostMetadataProps) {
  return (
    <div className={THEME_COLORS.highlightText}>
      By <Link href='/'>{author}</Link> | <Link href='/'>{category}</Link> | {date}
    </div>
  )
}
