import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Modal from '.'

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

export const Default: ComponentStory<typeof Modal> = () => (
  <Modal>
    <h2>Modal</h2>
  </Modal>
)
