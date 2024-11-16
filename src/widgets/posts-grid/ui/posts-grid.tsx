import { v4 as uuidv4 } from 'uuid'

import { CmsModel } from '@shared/cms'

import { getPostUrl } from '@entities/post'

import { Post, PostReadMore } from '@features/get-post'

export interface PostsListProps {
  header?: React.ReactNode
  posts: CmsModel.Post[]
}

export function PostsGrid({ posts }: PostsListProps) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
      {posts.map((post) => (
        <Post
          key={uuidv4()}
          title={post.title}
          imageUrl={post.imageUrl}
          url={getPostUrl('')}
          author={post.author}
          category={post.category}
          date={post.date}
          className='mb-10'
        >
          <p>{post.excerpt}</p>
          <PostReadMore postUrl={getPostUrl('')} />
        </Post>
      ))}
    </div>
  )
}
