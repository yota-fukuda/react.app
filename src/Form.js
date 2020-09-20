import React, {useState} from "react"

const Form = ({addTodo}) => {
  const [value, setValue] = useState('')

  // 追加機能の実装
  const handleSubmit = e => {
    e.preventDefault()

    if(!value){
      return alert('入力してください。')
    }

    addTodo(value)

    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange = {e => {
          setValue(e.target.value)
        }}
        value={value}
      ></input>
    </form>
  )
}


export default Form;