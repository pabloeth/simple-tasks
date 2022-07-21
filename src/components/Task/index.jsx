import { useState } from 'react'
import { DeleteIcon } from '@/icons/DeleteIcon'
import { UpdateIcon } from '@/icons/UpdateIcon'
import './index.css'

export function Task ({ data, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false)

  const FormEdit = () => {
    const [value, setValue] = useState(data)

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    const handleChange = (e) => {
      const value = e.target.value
      setValue({ ...data, content: value })
    }

    const handleTask = () => {
      const isDifferent = data.content !== value.content
      const isNotEmpty = value.content.trim().length > 0

      if (isDifferent && isNotEmpty) {
        onUpdate(value)
        setIsEdit(false)
      } else {
        setIsEdit(false)
      }
    }

    return (
      <form className={`task-edit ${isEdit && 'active'}`} onClick={handleSubmit}>
        <input autoFocus type='text' onChange={handleChange} value={value.content} />
        <button onClick={handleTask}>
          <UpdateIcon />
        </button>
      </form>
    )
  }

  const TaskElement = () => {
    return (
      <article className='task' onClick={() => setIsEdit(true)}>
        <div className='task__content'>
          <p>{data.content}</p>
        </div>
        <div className='task__buttons'>
          <button onClick={() => onDelete(data.id)}>
            <DeleteIcon />
          </button>
        </div>
      </article>
    )
  }

  return isEdit ? <FormEdit /> : <TaskElement />
}
