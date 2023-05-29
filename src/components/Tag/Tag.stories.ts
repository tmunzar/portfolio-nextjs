import type { Meta, StoryObj } from '@storybook/react'
import Tag from '.'

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: ['research', 'design', 'prototype', 'develop'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const DefaultTag: Story = {
  args: {
    text: 'Tag',
  },
}
export const TagWithDevelopIcon: Story = {
  args: {
    text: 'Tag with develop icon',
    icon: 'develop',
  },
}

export const TagWithDesignIcon: Story = {
  args: {
    text: 'Tag with design icon',
    icon: 'design',
  },
}

export const TagWithPrototypeIcon: Story = {
  args: {
    text: 'Tag with prototype icon',
    icon: 'prototype',
  },
}

export const TagWithResearchIcon: Story = {
  args: {
    text: 'Tag with research icon',
    icon: 'research',
  },
}
