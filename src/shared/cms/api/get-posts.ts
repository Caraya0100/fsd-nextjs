import { Post } from '../model/post'

export async function getPosts(): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: Post[] = [
        {
          title: 'What if Microsoft let OpenAI go free?',
          category: 'Tech',
          excerpt:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          imageUrl: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1',
          date: 'October 12, 2024',
          author: 'John Doe',
          url: '',
        },
        {
          title: 'How America learned to love tariffs',
          category: 'Markets',
          excerpt: 'In euismod tellus fermentum turpis consequat aliquet et a neque.',
          imageUrl: 'https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97',
          date: 'October 14, 2024',
          author: 'John Doe',
          url: '',
        },
        {
          title: 'Why investors should still avoid Chinese stocks',
          category: 'Markets',
          excerpt: ' Vestibulum feugiat arcu nec ex tincidunt, vitae tempus nulla faucibus.',
          imageUrl: 'https://images.unsplash.com/photo-1707761918029-1295034aa31e',
          date: 'October 18, 2024',
          author: 'John Doe',
          url: '',
        },
        {
          title: 'Meta partners with IT ministry to set up Centre for Generative AI at IIT Jodhpur',
          category: 'Tech',
          excerpt: 'Cras efficitur tortor eget risus commodo, non condimentum ante consequat.',
          imageUrl: 'https://images.unsplash.com/photo-1616161560417-66d4db5892ec',
          date: 'October 19, 2024',
          author: 'John Doe',
          url: '',
        },
        {
          title: 'Wages Have Outpaced Inflation. But Not for Everyone.',
          category: 'Industry',
          excerpt:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          imageUrl: 'https://images.unsplash.com/photo-1636112161903-caa252ab5160',
          date: 'October 20, 2024',
          author: 'John Doe',
          url: '',
        },
        {
          title: 'Amazon Could Be Forced to Treat Drivers as Employees',
          category: 'Industry',
          excerpt:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          imageUrl: 'https://images.unsplash.com/photo-1625970488705-7de6f59ab834',
          date: 'October 21, 2024',
          author: 'John Doe',
          url: '',
        },
      ]
      resolve(data)
    }, 300)
  })
}
