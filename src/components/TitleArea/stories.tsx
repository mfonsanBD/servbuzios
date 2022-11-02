import { Story, Meta } from '@storybook/react'
import TitleArea, { TitleAreaProps } from '.'

export default {
  title: 'TitleArea',
  component: TitleArea,
  args: {
    title: 'Sobre Nós'
  }
} as Meta

export const Default: Story<TitleAreaProps> = (args) => <TitleArea {...args} />
