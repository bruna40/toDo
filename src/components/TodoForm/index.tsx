import { PlusCircle } from 'lucide-react'
import { ContainerForm } from './style'
import { useContext, useState, FormEvent } from 'react'
import { ListContext } from '../../contexts/List'

export function TodoForm() {
  const [task, setTask] = useState('')
  const { createNewTask } = useContext(ListContext)

  function handleSubmitNewTask(event: FormEvent) {
    event.preventDefault()
    if (task.trim()) {
      createNewTask(task)
      setTask('')
    }
  }

  const isNewTaskEmpty = task.trim() === ''
  return (
    <ContainerForm onSubmit={handleSubmitNewTask}>
      <input
        value={task}
        type="text"
        placeholder="Digite uma tarefa"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={20} />
      </button>
    </ContainerForm>
  )
}
