import { CmsApi } from '@shared/cms'

import { MenuLinkProps } from '../ui'

export async function getMenuLinks() {
  const categories = await CmsApi.getCategories()
  let links: MenuLinkProps[] = []

  if (categories) {
    links = categories.map((category) => ({
      href: category.url,
      children: category.name,
    }))
  }

  return links
}
