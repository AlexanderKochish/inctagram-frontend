'use client'
import { Select } from 'radix-ui'
import classnames from 'classnames'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import s from './select.module.css'
import { forwardRef, Ref } from 'react'
import Image, { StaticImageData } from 'next/image'

interface SelectItemProps {
  children: React.ReactNode
  className?: string
  value: string
  disabled?: boolean
}

interface SelectProps {
  list: Array<{
    id: string
    value: string
    text: string
    image?: StaticImageData
  }>
  placeholder?: string
  defaultValue?: string
  areaLabel: string
  label?: string
}

const SelectCustom = ({
  list,
  defaultValue,
  placeholder,
  areaLabel,
  label,
}: SelectProps) => {
  return (
    <Select.Root defaultValue={defaultValue}>
      <div className={s.root}>
        {label && <span className={s.label}>{label}</span>}
        <Select.Trigger className={s.trigger} aria-label={areaLabel}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={s.icon}>
            <ChevronDownIcon className={s.chevron} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.content}>
            <Select.Viewport className={s.viewport}>
              <Select.Group>
                {list &&
                  list.map(({ id, image, text, value }) => (
                    <SelectItem key={id} value={value}>
                      <div className={s.item}>
                        {image && (
                          <Image
                            src={image}
                            alt="flag icon"
                            width={24}
                            height={24}
                          />
                        )}
                        <span>{text}</span>
                      </div>
                    </SelectItem>
                  ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  )
}

const SelectItem = forwardRef(function SelectItem(
  { children, className, ...props }: SelectItemProps,
  forwardedRef: Ref<HTMLDivElement> | undefined
) {
  return (
    <Select.Item
      className={classnames(s.item, className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={s.itemIndicator}></Select.ItemIndicator>
    </Select.Item>
  )
})

export default SelectCustom
