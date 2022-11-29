import { Story, Meta } from '@storybook/react'
import MenuAdmin, { MenuAdminProps } from '.'

export default {
  title: 'MenuAdmin',
  component: MenuAdmin
} as Meta

export const Default: Story<MenuAdminProps> = (args) => <MenuAdmin {...args} />

Default.args = {
  username: 'anorak29',
  photo: '/img/about-image.jpg'
}
