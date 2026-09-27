import type { Preview } from '@storybook/nextjs-vite'

import '../src/styles/colors.css'
import '../src/styles/typography.css'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      backgrounds: {
        default: 'dark',
        values: [
          { name: 'dark', value: '#171717' },
          { name: 'light', value: '#FFFFFF' },
        ],
      },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
