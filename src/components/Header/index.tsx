import toDo from '../../assets/toDo.svg';
import { ContainerHeader } from './style';

export function Header() {
    return (
        <ContainerHeader >
            <img src={toDo} alt="To Do" />
        </ContainerHeader >
    )
}