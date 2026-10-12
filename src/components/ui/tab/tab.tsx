import * as React from 'react'
import { Tabs } from 'radix-ui'
import s from './tab.module.css'

interface TabsTitleProps {
  value: string
  title: string
}

interface TabsContentProps {
  value: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: TabsTitleProps[]
  content: TabsContentProps[]
  width?: number
}

const CustomTabs = ({ tabs, content, width }: TabsProps) => (
  <Tabs.Root className={s.root} defaultValue={tabs[0].value}>
    <div className={s.list_wrapper}>
      {tabs.map(({ value, title }) => (
        <Tabs.List
          key={value}
          className={s.list}
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            style={{ width: `${width}px` }}
            className={s.trigger}
            value={value}
          >
            {title}
          </Tabs.Trigger>
        </Tabs.List>
      ))}
    </div>
    <div>
      {content.map(({ value, content }) => (
        <Tabs.Content key={value} className={s.content} value={value}>
          {content}
        </Tabs.Content>
      ))}
    </div>
  </Tabs.Root>
)

export default CustomTabs
