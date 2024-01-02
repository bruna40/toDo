import { PlusCircle } from 'lucide-react'
import { ContainerForm } from './style'

export function TodoForm() {
  return (
    <ContainerForm>
      <input type="text" placeholder="Digite uma tarefa" />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </ContainerForm>
  )
}
