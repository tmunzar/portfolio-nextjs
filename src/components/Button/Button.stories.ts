import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      label: 'Text',
      control: 'text',
    },
    large: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Regular Button',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    large: true,
  },
}
