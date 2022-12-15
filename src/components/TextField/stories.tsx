import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MdOutlineEmail } from 'react-icons/md'

import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <MdOutlineEmail />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as ComponentMeta<typeof TextField>

export const Default: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withError: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
