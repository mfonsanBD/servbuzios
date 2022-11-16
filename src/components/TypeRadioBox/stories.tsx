import { Story, Meta } from '@storybook/react'
import TypeRadioBox, { TypeRadioBoxProps } from '.'

export default {
  title: 'Form/TypeRadioBox',
  component: TypeRadioBox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Flat: Story<TypeRadioBoxProps> = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      backgroundColor: 'white',
      padding: '2rem'
    }}
  >
    <TypeRadioBox
      label="Unitário"
      labelFor="unitario"
      id="unitario"
      name="type"
      value="Unitário"
      model="flat"
      modelType="unit"
      defaultChecked
      {...args}
    />
    <TypeRadioBox
      label="Duplo"
      labelFor="duplo"
      id="duplo"
      name="type"
      value="Duplo"
      model="flat"
      modelType="duplo"
      {...args}
    />
    <TypeRadioBox
      label="Mais"
      labelFor="mais"
      id="mais"
      name="type"
      value="Mais"
      model="plus"
      {...args}
    />
  </div>
)

export const Curve: Story<TypeRadioBoxProps> = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      backgroundColor: 'white',
      padding: '2rem'
    }}
  >
    <TypeRadioBox
      label="Unitário"
      labelFor="unitario"
      id="unitario"
      name="type"
      value="Unitário"
      model="curve"
      modelType="unit"
      defaultChecked
      {...args}
    />
    <TypeRadioBox
      label="Duplo"
      labelFor="duplo"
      id="duplo"
      name="type"
      value="Duplo"
      model="curve"
      modelType="duplo"
      {...args}
    />
    <TypeRadioBox
      label="Mais"
      labelFor="mais"
      id="mais"
      name="type"
      value="Mais"
      model="plus"
      {...args}
    />
  </div>
)
