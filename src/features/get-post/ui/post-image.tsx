import Image from 'next/image'
import Link from 'next/link'

export interface PostImageProps {
  src: string
  alt: string
  postUrl: string
}

export function PostImage({ src, alt, postUrl }: PostImageProps) {
  return <Link href={postUrl}>{<Image src={src} width={900} height={300} alt={alt} />}</Link>
}
