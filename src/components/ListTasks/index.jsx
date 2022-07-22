import { Task } from '@/components/Task'

export function ListTasks ({ tasks, onUpdate, onDelete }) {
  return (
    <section>
      {
        tasks.map(item => {
          return (
            <Task
              key={item.id}
              data={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          )
        })
      }
    </section>
  )
}
