import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from '.'

export default {
  title: 'Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

Default.args = {
  title: 'Notícias & Editais',
  backgroundTitle: 'Notícias & Editais'
}

export const WithSubtitle: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

WithSubtitle.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

WithSubtitle.args = {
  title: 'Notícias & Editais',
  backgroundTitle: 'Notícias & Editais',
  subtitle:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum numquam dolor ratione excepturi quibusdam autem quaerat magni neque earum omnis assumenda quasi beatae, illum veniam dolorum alias delectus fugit! Esse!'
}
