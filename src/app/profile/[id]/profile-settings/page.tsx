import React from 'react'
import s from './profile-settings.module.css'
import CustomTabs from '@/src/components/ui/tab/tab'
import GeneralInfo from '@/src/components/ui/general-info/general-info'

const ProfileSettings = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <CustomTabs
          width={243}
          tabs={[
            { value: 'General information', title: 'General information' },
            { value: 'Devices', title: 'Devices' },
            { value: 'Account Management', title: 'Account Management' },
            { value: 'My payments', title: 'My payments' },
          ]}
          content={[
            { value: 'General information', content: <GeneralInfo /> },
            { value: 'Devices', content: <GeneralInfo /> },
            { value: 'Account Management', content: <GeneralInfo /> },
            { value: 'My payments', content: <GeneralInfo /> },
          ]}
        />
      </div>
    </div>
  )
}

export default ProfileSettings
