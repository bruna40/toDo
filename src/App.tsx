import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { GlobalStyle } from './style/global'

function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <TodoList />
      <GlobalStyle />
    </>
  )
}

export default App
