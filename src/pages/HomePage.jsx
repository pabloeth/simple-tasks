import { useState } from 'react'
import { Header } from '@/components/Header'
import { ListTasks } from '@/components/ListTasks'

export function HomePage () {
  const [tasks, setTasks] = useState([])

  const handleUpdate = (task) => {
    const tempTasks = [...tasks]
    const item = tempTasks.find(item => item.id === task.id)
    item.content = task.content
    setTasks(tempTasks)
  }

  const handleDelete = (id) => {
    const tempTaks = tasks.filter(item => item.id !== id)
    setTasks(tempTaks)
  }

  return (
    <main className='content'>
      <Header
        tasks={tasks}
        setTasks={setTasks}
      />
      <ListTasks
        tasks={tasks}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </main>
  )
}
