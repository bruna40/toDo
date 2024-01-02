import { TodoItem } from '../TodoItem'
import { ContainerList, TaskInformation } from './style'

export function TodoList() {
  return (
    <ContainerList>
      <TaskInformation>
        <div>
          <h6>Tarefas criadas</h6>
          <p>1</p>
        </div>
        <div>
          <h6>Concluídas</h6>
          <p>1 de 2</p>
        </div>
      </TaskInformation>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </ContainerList>
  )
}
