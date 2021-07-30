import { useState } from 'react'

export const useForm = (initialState) => {
  const [fields, setFields] = useState(initialState)


  return [
    fields,
    function (ev) {
      const field = ev.target.name
      const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
      setFields(prevFields => ({ ...prevFields, [field]: value }))
    },
    setFields
  ]
}