import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Comedouro Postural',
  color: 'lightBrown'
}

export const WithSubtitle: Story<HeadingProps> = (args) => <Heading {...args} />

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
