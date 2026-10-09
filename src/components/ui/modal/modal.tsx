import * as React from 'react'
import { Dialog } from 'radix-ui'
import { Cross2Icon } from '@radix-ui/react-icons'
import s from './modal.module.css'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  title?: string
  children?: React.ReactNode
}

const DialogDemo = ({ isOpen, setIsOpen, title, children }: ModalProps) => (
  <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <div className={s.title_wrapper}>
          <Dialog.Title className={s.title}>{title}</Dialog.Title>
          <div>
            <Dialog.Close asChild>
              <button className={s.icon_button} aria-label="Close">
                <Cross2Icon width={24} height={24} />
              </button>
            </Dialog.Close>
          </div>
        </div>
        <Dialog.Description className={s.description} />

        <div className={s.content_wrapper}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogDemo
