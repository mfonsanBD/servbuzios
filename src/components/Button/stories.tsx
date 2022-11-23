import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Default.args = {
  children: 'Buy Now'
}

export const asLink: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

asLink.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

asLink.args = {
  minimal: true,
  children: 'Buy Now',
  as: 'a',
  href: '/link'
}
