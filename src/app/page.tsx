import { twMerge } from 'tailwind-merge'

import { CmsApi } from '@shared/cms'

import { THEME_COLORS } from '@entities/colors'

import { Footer } from '@widgets/footer'
import { HeroHeader } from '@widgets/hero-header'
import { getMenuLinks, MenuNav } from '@widgets/menu'
import { PostsGrid } from '@widgets/posts-grid'

export default async function Home() {
  const posts = await CmsApi.getPosts()
  const menuLinks = await getMenuLinks()
  return (
    <>
      <div className={`px-10 ${THEME_COLORS.accent}`}>
        <HeroHeader>
          <MenuNav
            links={menuLinks}
            className={`flex-row flex-wrap font-medium ${THEME_COLORS.highlightText}`}
          />
        </HeroHeader>
      </div>
      <main className='relative container mx-auto mt-24 mb-16 md:mb-40 px-10 xl:px-0'>
        <PostsGrid posts={posts} />
      </main>
      <Footer className='relative z-10'>
        <MenuNav links={menuLinks} className='flex-row' />
      </Footer>
    </>
  )
}
