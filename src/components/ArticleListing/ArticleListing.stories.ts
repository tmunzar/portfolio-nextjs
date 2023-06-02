import type { Meta, StoryObj } from '@storybook/react'
import Img from '../../../public/images/studao/main-01.png'
import ArticleListing from '.'

const meta: Meta<typeof ArticleListing> = {
  title: 'ArticleListing',
  component: ArticleListing,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    img: {
      src: {
        control: { type: 'file', accept: ['.png', '.jpg'] },
      },
      alt: {
        control: 'text',
      },
    },
    actionText: {
      control: 'text',
    },
    tags: {
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof ArticleListing>

export const Default: Story = {
  args: {
    title: 'Article Listing Text',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac elementum elit. Etiam fringilla dui enim, id efficitur leo bibendum sed. Pellentesque in nisi risus',
    href: '#',
    img: {
      src: Img.src,
      alt: 'A doodle of a collection of web development & design related images',
      width: Img.width,
      height: Img.height,
    },
    tags: [
      { text: 'Engineer', icon: 'develop' },
      { text: 'Design', icon: 'design' },
    ],
  },
}
