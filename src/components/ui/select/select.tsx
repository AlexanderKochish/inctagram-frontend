import { Select } from 'radix-ui'
import classnames from 'classnames'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import styles from './select.module.css'
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
}

const SelectCustom = ({
  list,
  defaultValue,
  placeholder,
  areaLabel,
}: SelectProps) => {
  return (
    <Select.Root defaultValue={defaultValue}>
      <Select.Trigger className={styles.trigger} aria-label={areaLabel}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={styles.icon}>
          <ChevronDownIcon className={styles.chevron} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles.content}>
          <Select.Viewport className={styles.viewport}>
            <Select.Group>
              {list &&
                list.map(({ id, image, text, value }) => (
                  <SelectItem key={id} value={value}>
                    <div className={styles.item}>
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
    </Select.Root>
  )
}

const SelectItem = forwardRef(function SelectItem(
  { children, className, ...props }: SelectItemProps,
  forwardedRef: Ref<HTMLDivElement> | undefined
) {
  return (
    <Select.Item
      className={classnames(styles.item, className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator
        className={styles.itemIndicator}
      ></Select.ItemIndicator>
    </Select.Item>
  )
})

export default SelectCustom
