import { useContext } from 'react'
import { TodoItem } from '../TodoItem'
import { ContainerList, ItemList } from './style'
import { ListContext } from '../../contexts/List'

export function TodoList() {
  const { tasks } = useContext(ListContext)

  return (
    <ContainerList>
      <ItemList>
        {tasks.map((task) => (
          <TodoItem key={task.id} id={task.id} />
        ))}
      </ItemList>
    </ContainerList>
  )
}
