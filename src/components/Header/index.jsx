import { useState } from 'react'
import { AddIcon } from '@/icons/AddIcon'
import './index.css'

export function Header ({ tasks, setTasks }) {
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setContent(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleTask = () => {
    const isValid = content.trim().length > 0
    if (isValid) {
      const newTask = {
        id: Date.now(),
        content,
        complete: false
      }

      setTasks([...tasks, newTask])
      setContent('')
    } else {
      setContent('')
    }
  }

  const date = new Date()
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(date)

  return (
    <header className='header'>
      <div className='header__date'>
        <h2>My day</h2>
        <p>{dateFormat}</p>
      </div>
      <form className='header__form' onClick={handleSubmit}>
        <input type='text' onChange={handleChange} value={content} placeholder='Add a task' />
        <button onClick={handleTask}>
          <AddIcon />
        </button>
      </form>
    </header>
  )
}
