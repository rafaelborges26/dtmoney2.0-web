// src/components/SelectField/SelectField.tsx
import { FC } from "react"
import { SelectWrapper, Label, Select } from "./styles"
import { TransactionType } from "../../types/transactionTypes"

interface SelectFieldProps {
  label?: string
  name: string
  register?: any // integração com react-hook-form
  required?: boolean
  defaultValue?: string
}

export const SelectField: FC<SelectFieldProps> = ({
  label,
  name,
  register,
  required,
  defaultValue = "",
}) => {
  return (
    <SelectWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}

       <Select
        id={name}
        {...(register ? register(name, { required }) : {})}
        defaultValue={defaultValue}
      >
        <option value="" disabled>
          Selecione uma categoria
        </option>
        {Object.values(TransactionType).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  )
}
