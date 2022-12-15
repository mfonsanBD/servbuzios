import { Story, Meta } from '@storybook/react'
import Form, { FormProps } from '.'

export default {
  title: 'FormArea',
  component: Form
} as Meta

export const Contact: Story<FormProps> = () => (
  <div style={{ maxWidth: '102.4rem' }}>
    <Form isContact />
  </div>
)

export const Juridical: Story<FormProps> = () => (
  <div style={{ maxWidth: '102.4rem' }}>
    <Form isContact={false} />
  </div>
)
