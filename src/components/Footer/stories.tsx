import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    sindicatoName:
      'Sindicato dos Servidores Públicos Municipais de Armação dos Búzios',
    sindicatoCNPJ: '04.930.581/0001-11',
    sindicatoAddress:
      'Estrada da Usina, 350 - Loja 03 - Armação dos Búzios, RJ - 28950-785',
    email: 'presidente@gmail.com',
    phone: '(22) 97400-0000',
    redessociais: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      telegram: 'https://telegram.com',
      whatsapp: 'https://whatsapp.com'
    }
  }
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
)
