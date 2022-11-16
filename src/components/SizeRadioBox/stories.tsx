import { Story, Meta } from '@storybook/react'
import SizeRadioBox, { SizeRadioBoxProps } from '.'

export default {
  title: 'Form/SizeRadioBox',
  component: SizeRadioBox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<SizeRadioBoxProps> = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      backgroundColor: 'white',
      padding: '2rem'
    }}
  >
    <SizeRadioBox
      label="P"
      labelFor="p"
      id="p"
      name="size"
      value="P"
      desc="Até 20cm de altura"
      defaultChecked
      {...args}
    />
    <SizeRadioBox
      label="M"
      labelFor="m"
      id="m"
      name="size"
      value="M"
      desc="Até 25cm de altura"
      {...args}
    />
    <SizeRadioBox
      label="G"
      labelFor="g"
      id="g"
      name="size"
      value="G"
      desc="Até 30cm de altura"
      {...args}
    />
  </div>
)
