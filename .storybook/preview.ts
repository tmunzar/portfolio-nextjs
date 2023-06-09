import type { Preview } from '@storybook/react'
import '../src/styles/globals.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
    },
    layout: 'centered',
  },
}

export default preview
