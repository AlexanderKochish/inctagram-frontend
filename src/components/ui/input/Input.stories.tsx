import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './input'

type StoryInputProps = Omit<
  React.ComponentProps<typeof CustomInput>,
  'control'
> & {
  errorMessage?: string
  defaultValue?: string
}

const FormWrapper = ({
  errorMessage,
  defaultValue = '',
  name = 'testInput',
  ...props
}: StoryInputProps) => {
  const { control, setError, clearErrors } = useForm({
    defaultValues: {
      [name]: defaultValue,
    },
    mode: 'onChange',
  })

  useEffect(() => {
    if (errorMessage) {
      setError(name, { type: 'manual', message: errorMessage })
    } else {
      clearErrors(name)
    }
  }, [errorMessage, setError, clearErrors, name])

  return <CustomInput {...props} name={name} control={control} />
}

const meta = {
  title: 'UI/CustomInput',
  component: FormWrapper,
  excludeStories: [
    'Default',
    'WithIcon',
    'Email',
    'Password',
    'WithValidationError',
    'Disabled',
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputType: {
      control: 'select',
      options: ['text', 'email', 'password', 'search'],
      description: 'Тип поля ввода',
    },
    labelText: {
      control: 'text',
      description: 'Текст лейбла над инпутом',
    },
    placeholder: {
      control: 'text',
      description: 'Плейсхолдер инпута',
    },
    errorMessage: {
      control: 'text',
      description: 'Динамический текст ошибки для проверки стилей валидации',
    },
    disabled: {
      control: 'boolean',
      description: 'Заблокированное состояние',
    },
  },
  args: {
    name: 'username',
    labelText: 'Имя пользователя',
    placeholder: 'Введите имя...',
    inputType: 'text',
  },
} satisfies Meta<typeof FormWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'username',
    labelText: 'Имя пользователя',
    placeholder: 'Введите имя...',
    inputType: 'text',
  },
}

export const WithIcon: Story = {
  args: {
    name: 'search',
    labelText: 'Поиск',
    inputType: 'search',
    placeholder: 'Искать в каталоге...',
    icon: <span>🔍</span>,
  },
}

export const Email: Story = {
  args: {
    name: 'email',
    labelText: 'Электронная почта',
    inputType: 'email',
    placeholder: 'example@mail.com',
    icon: <span>✉️</span>,
  },
}

export const Password: Story = {
  args: {
    name: 'password',
    labelText: 'Пароль',
    inputType: 'password',
    placeholder: '••••••••',
    icon: <span>🔒</span>,
  },
}

export const WithValidationError: Story = {
  args: {
    name: 'email',
    labelText: 'Email',
    inputType: 'email',
    placeholder: 'example@mail.com',
    errorMessage: 'Некорректный формат e-mail адреса',
  },
}

export const Disabled: Story = {
  args: {
    labelText: 'Заблокированное поле',
    disabled: true,
    placeholder: 'Редактирование недоступно',
  },
}
