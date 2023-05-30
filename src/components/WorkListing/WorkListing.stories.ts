import type { Meta, StoryObj } from '@storybook/react'
import Img from '../../../public/images/logos/jellyfish.svg'
import WorkListing from '.'

const meta: Meta<typeof WorkListing> = {
  title: 'WorkListing',
  component: WorkListing,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
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
    tags: {
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof WorkListing>

export const Default: Story = {
  args: {
    title: 'Work Listing Text',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac elementum elit. Etiam fringilla dui enim, id efficitur leo bibendum sed. Pellentesque in nisi risus',
    img: {
      src: Img.src,
      alt: 'A doodle of a collection of web development & design related images',
      className: 'dm-invert',
      style: { width: '100%' },
    },
    imgHolderClassName:
      'is-offset-one-fifth-desktop is-one-fifth-desktop is-offset-0-tablet is-two-fifths-tablet is-5-mobile',
    tags: [
      { text: 'Engineer', icon: 'develop' },
      { text: 'Design', icon: 'design' },
    ],
  },
}
