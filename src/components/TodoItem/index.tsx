import { Trash } from 'lucide-react'
import { ContainerItem, ContainerInput } from './style'
import { useContext } from 'react'
import { ListContext } from '../../contexts/List'

interface ItemProps {
  id: number
}

export function TodoItem({ id }: ItemProps) {
  const { toggleTask, deleteComment, getById } = useContext(ListContext)
  const toDo = getById(id)

  if (!toDo) return null
  return (
    <ContainerItem>
      <ContainerInput
        type="checkbox"
        onClick={() => toggleTask(toDo.id)}
        checked={toDo.isCompleted}
      />
      <p style={{ textDecoration: toDo.isCompleted ? 'line-through' : 'none' }}>
        {toDo.text}
      </p>
      <button type="button" onClick={() => deleteComment(toDo.id)}>
        <Trash size={20} />
      </button>
    </ContainerItem>
  )
}
