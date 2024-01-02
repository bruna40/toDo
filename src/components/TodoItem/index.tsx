import { Trash } from 'lucide-react'
import { ContainerItem } from './style'

export function TodoItem() {
  return (
    <ContainerItem>
      <input type="checkbox" />
      <span>Estudar React</span>
      <button type="button">
        <Trash size={20} />
      </button>
    </ContainerItem>
  )
}
