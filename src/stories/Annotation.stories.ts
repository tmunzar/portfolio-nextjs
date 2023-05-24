import type { Meta, StoryObj } from '@storybook/react'
import Annotation from '../Annotation'

const meta: Meta<typeof Annotation> = {
  title: 'Annotation',
  component: Annotation,
  // tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    textRotate: {
      control: 'text',
    },
    animProps: {
      control: 'object',
      // onScroll: {
      //   control: 'radio',
      // },
    },
    className: {
      control: 'disabled',
    },
    speed: {
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof Annotation>

export const Default: Story = {
  args: {
    text: 'Hello!',
    textRotate: '',
    animProps: { onScroll: false },
  },
}

export const PrimaryColor: Story = {
  args: {
    text: 'Hello!',
    textRotate: '',
    animProps: { onScroll: false },
    className: 'is-primary',
  },
}
