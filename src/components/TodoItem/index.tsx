import { Trash } from 'lucide-react'
import { ContainerItem, ContainerInput } from './style'
import { useContext } from 'react'
import { ListContext } from '../../contexts/List'

interface ItemProps {
  id: number
}

export function TodoItem({ id }: ItemProps) {
  const { toggleTask, deleteComment, tasks } = useContext(ListContext)
  const toDo = (id: number) => tasks.find((t) => t.id === id)

  const Tasks = toDo(id)

  if (!Tasks) return null
  return (
    <ContainerItem>
      <ContainerInput
        type="checkbox"
        onClick={() => toggleTask(Tasks.id)}
        checked={Tasks.isCompleted}
      />
      <p
        style={{ textDecoration: Tasks.isCompleted ? 'line-through' : 'none' }}
      >
        {Tasks.text}
      </p>
      <button type="button" onClick={() => deleteComment(Tasks.id)}>
        <Trash size={20} />
      </button>
    </ContainerItem>
  )
}
