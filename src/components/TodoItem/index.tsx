import { Trash } from 'lucide-react'
import { ContainerItem, ContainerInput } from './style'

export function TodoItem() {
  return (
    <ContainerItem>
      <ContainerInput type="checkbox" />
      <p>Estudar React</p>
      <button type="button">
        <Trash size={20} />
      </button>
    </ContainerItem>
  )
}
