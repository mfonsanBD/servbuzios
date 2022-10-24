import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

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
