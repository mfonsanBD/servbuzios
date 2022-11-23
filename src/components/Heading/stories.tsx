import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Heading>

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

Default.args = {
  children: 'Comedouro Postural',
  color: 'lightBrown'
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
  children: 'Comedouro Postural',
  color: 'white',
  subtitle: 'O comedouro perfeito para o seu pet',
  size: 'huge'
}
