import toDo from '../../assets/toDo.svg'
import { ContainerHeader } from './style'

export function Header() {
  return (
    <ContainerHeader>
      <img src={toDo} alt="Logo do To Do" data-test="image-logo" />
    </ContainerHeader>
  )
}
