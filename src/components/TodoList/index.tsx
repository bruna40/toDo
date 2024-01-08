import { useContext } from 'react'
import { TodoItem } from '../TodoItem'
import { ContainerList, TaskInformation, ItemList } from './style'
import { ListContext } from '../../contexts/List'

export function TodoList() {
  const { tasks } = useContext(ListContext)

  // const tasksCompletedLength = tasksCompleted()
  return (
    <ContainerList>
      <TaskInformation>
        <div>
          <h6>Tarefas criadas</h6>
          <p>{tasks.length}</p>
        </div>
        <div>
          <h6>Concluídas</h6>
          <p>1 de {tasks.length}</p>
        </div>
      </TaskInformation>
      <ItemList>
        {tasks.map((task) => (
          <TodoItem key={task.id} id={task.id} />
        ))}
      </ItemList>
    </ContainerList>
  )
}
