import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import CheckBox from './check-box'

const meta = {
  title: 'UI/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Вспомогательный текст чекбокса',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Начальное состояние (для неуправляемого компонента)',
    },
    checked: {
      control: 'boolean',
      description: 'Управляемое состояние (фиксирует состояние чекбокса)',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность взаимодействия',
    },
  },
  args: {
    text: 'Чекбокс',
    onChange: fn(),
  },
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Запомнить меня',
    defaultChecked: false,
  },
}

export const CheckedByDefault: Story = {
  args: {
    text: 'Я согласен с условиями',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    text: 'Неактивный чекбокс',
    disabled: true,
    defaultChecked: false,
  },
}

export const DisabledChecked: Story = {
  args: {
    text: 'Заблокирован и выбран',
    disabled: true,
    defaultChecked: true,
  },
}
