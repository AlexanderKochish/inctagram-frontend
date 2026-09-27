import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Button from './button';
import React from 'react';


const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Содержимое кнопки',
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'text'],
      description: 'Вариант визуального стиля кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Состояние кнопки (активна/неактивна)',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
    disabled: false,
  },
}

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
}

export const Default: Story = {
  args: {
    type: 'default',
    children: 'Default Button',
    disabled: false,
  },
}