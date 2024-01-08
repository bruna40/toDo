import { useContext } from 'react'
import { TodoItem } from '../TodoItem'
import { ContainerList, ItemList, TaskInformation } from './style'
import { ListContext } from '../../contexts/List'

export function TodoList() {
  const { tasks } = useContext(ListContext)

  function tasksCompleted() {
    return tasks.filter((task) => task.isCompleted).length
  }

  const teste = tasksCompleted()

  return (
    <ContainerList>
      <TaskInformation>
        <div>
          <h6>Tarefas criadas</h6>
          <p>{tasks.length}</p>
        </div>
        <div>
          <h6>Concluídas</h6>
          <p>
            {teste} de {tasks.length}
          </p>
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
