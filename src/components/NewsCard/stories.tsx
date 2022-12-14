import { Story, Meta } from '@storybook/react'
import NewsCard, { NewsCardProps } from '.'

export default {
  title: 'NewsCard',
  component: NewsCard
} as Meta

export const News: Story<NewsCardProps> = (args) => (
  <div
    style={{
      maxWidth: '35rem'
    }}
  >
    <NewsCard {...args} />
  </div>
)

News.args = {
  image: '/img/beach.jpg',
  title: 'Reunião Extraordinária',
  slug: 'reuniao-extraordinaria',
  createdAt: '2022-12-13T18:41:54.480Z',
  isNotice: true
}

export const Edital: Story<NewsCardProps> = (args) => (
  <div
    style={{
      maxWidth: '35rem'
    }}
  >
    <NewsCard {...args} />
  </div>
)

Edital.args = {
  image: '/img/beach.jpg',
  title: 'Reunião Extraordinária',
  slug: 'reuniao-extraordinaria',
  createdAt: '2022-12-13T18:41:54.480Z',
  isNotice: false
}
