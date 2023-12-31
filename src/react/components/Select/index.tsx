/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/jsx-pascal-case */
// Dependencies
import React from 'react'
import { EXPERIMENTAL_Select } from 'vtex.styleguide'

// Components
import DropdownIndicator from './DropdownIndicator'

export interface ISelectProps {
  value?: ISelectOption | ISelectOption[] | string
  multi?: boolean
  placeholder?: string | React.ReactElement
  errorMessage?: string
  options: ISelectOption[]
  onChange?: (value: ISelectOption | ISelectOption[]) => void
}

const Select: React.FC<ISelectProps> = ({
  value,
  options,
  onChange,
  errorMessage,
  multi = true,
  placeholder = 'Select...',
}) => (
  <div className="select-input-container">
    <EXPERIMENTAL_Select
      value={value}
      multi={multi}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      errorMessage={errorMessage}
      components={{ DropdownIndicator }}
    />
  </div>
)

export default Select
