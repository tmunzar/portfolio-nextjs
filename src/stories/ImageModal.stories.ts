import type { Meta, StoryObj } from '@storybook/react'
import ImageModal from '../ImageModal'
import HomeDoodle from '../../public/images/home-doodle-01.png'

const meta: Meta<typeof ImageModal> = {
  title: 'ImageModal',
  component: ImageModal,
  tags: ['autodocs'],
  argTypes: {
    img: {
      src: {
        control: { type: 'file', accept: ['.png', '.jpg'] },
      },
      alt: {
        control: 'text',
      },
      style: {
        control: 'object',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ImageModal>

export const Default: Story = {
  args: {
    img: {
      src: HomeDoodle.src,
      alt: 'A doodle of a collection of web development & design related images',
      style: { maxWidth: '300px' },
    },
  },
}
