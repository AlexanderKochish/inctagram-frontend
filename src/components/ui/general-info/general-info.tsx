'use client'
import React from 'react'
import s from './general-info.module.css'
import ImageIcon from '../../../../public/icons/image-icon.svg'
import Button from '../button/button'
import CustomInput from '../input/input'
import { useForm } from 'react-hook-form'
import { DatePicker } from '../date-picker/date-picker'
import SelectCustom from '../select/select'
import TextArea from '../text-area/text-area'

const GeneralInfo = () => {
  const { control } = useForm()
  return (
    <div>
      <div className={s.info}>
        <div className={s.info_avatar}>
          <div className={s.avatar}>
            <ImageIcon />
          </div>
          <Button variant="secondary" text="Select Profile Photo" />
        </div>
        <form className={s.form}>
          <CustomInput
            control={control}
            inputType="text"
            name="username"
            labelText="Username"
          />
          <CustomInput
            control={control}
            inputType="text"
            name="first-name"
            labelText="First Name"
          />
          <CustomInput
            control={control}
            inputType="text"
            name="last-name"
            labelText="Last Name"
          />
          <DatePicker placeholder="Date of birth" />
          <div className={s.select_wrapper}>
            <SelectCustom
              label="Select your country"
              areaLabel="Select your country"
              placeholder="Select your country"
              defaultValue="Country"
              list={[{ id: '1', value: 'Litva', text: 'Litva' }]}
            />
            <SelectCustom
              label="Select your city"
              areaLabel="Select your city"
              placeholder="Select your city"
              defaultValue="City"
              list={[{ id: '1', value: 'Litva', text: 'Litva' }]}
            />
          </div>
          <TextArea control={control} name="about-me" label="About me" />
        </form>
      </div>
      <hr />
      <div className={s.footer}>
        <Button className={s.btn} size="default" text="Save Changes" />
      </div>
    </div>
  )
}

export default GeneralInfo
