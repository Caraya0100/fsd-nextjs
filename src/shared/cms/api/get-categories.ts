import { Category } from '../model/category'

export async function getCategories(): Promise<Category[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: Category[] = [
        {
          name: 'Markets',
          url: '/',
        },
        {
          name: 'Industry',
          url: '/',
        },
        {
          name: 'Tech',
          url: '/',
        },
      ]
      resolve(data)
    }, 300)
  })
}
