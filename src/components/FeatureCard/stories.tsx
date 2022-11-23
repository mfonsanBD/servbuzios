import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MdOutlineDesignServices } from 'react-icons/md'

import FeatureCard from '.'

export default {
  title: 'FeatureCard',
  component: FeatureCard,
  args: {
    icon: <MdOutlineDesignServices size={52} />,
    title: 'Título',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa esse'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof FeatureCard>

export const Default: ComponentStory<typeof FeatureCard> = (args) => (
  <div style={{ width: '33.9rem', height: '18.9rem' }}>
    <FeatureCard {...args} />
  </div>
)
