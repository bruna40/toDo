import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ListProvider } from './contexts/List'
import { GlobalStyle } from './style/global'

function App() {
  return (
    <ListProvider>
      <Header />
      <TodoForm />
      <TodoList />
      <GlobalStyle />
    </ListProvider>
  )
}

export default App
