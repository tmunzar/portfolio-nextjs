import type { Meta, StoryObj } from '@storybook/react'
import ContentModal from '../ContentModal'

const meta: Meta<typeof ContentModal> = {
  title: 'ContentModal',
  component: ContentModal,
  tags: ['autodocs'],
  argTypes: {
    buttonText: {
      control: 'text',
    },
    children: {
      label: 'Content',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof ContentModal>

export const Default: Story = {
  args: {
    buttonText: 'Click Me!',
    children: 'The content',
  },
}
