import { PostImage } from './post-image'
import { PostMetadata } from './post-metadata'
import { PostTitle } from './post-title'

export interface PostProps {
  title: string
  imageUrl: string
  url: string
  author: string
  category: string
  date: string
  children: React.ReactNode
  className?: string
}

export function Post({
  title,
  imageUrl,
  url,
  author,
  category,
  date,
  className,
  children,
}: PostProps) {
  return (
    <article className={className}>
      <PostImage src={imageUrl} postUrl={url} alt={title} />
      <PostTitle postLink={url}>{title}</PostTitle>
      <PostMetadata author={author} category={category} date={date} />
      <div>{children}</div>
    </article>
  )
}
