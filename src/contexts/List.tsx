import { createContext, useEffect, useState } from 'react'

type ToDo = {
  id: number
  text: string
  isCompleted: boolean
}

interface List {
  tasks: ToDo[]
  createNewTask(tasks: string): void
  toggleTask(id: number): void
  deleteComment(id: number): void
}

interface ListContextProviderProps {
  children: React.ReactNode
}

export const ListContext = createContext({} as List)

export function ListProvider({ children }: ListContextProviderProps) {
  const [tasks, setTasks] = useState<ToDo[]>(() => {
    const storageStateAsJSON = localStorage.getItem('@todo:tasks')

    return JSON.parse(storageStateAsJSON || '[]')
  })

  function createNewTask(text: string) {
    const newList: ToDo = {
      id: Date.now(),
      text,
      isCompleted: false,
    }
    setTasks([...tasks, newList])
  }

  useEffect(() => {
    localStorage.setItem('@todo:tasks', JSON.stringify(tasks))
  }, [tasks])

  function toggleTask(id: number) {
    setTasks((task) =>
      task.map((list) =>
        list.id === id
          ? {
              ...list,
              isCompleted: !list.isCompleted,
            }
          : list,
      ),
    )
  }

  function deleteComment(id: number) {
    setTasks((task) => task.filter((text) => text.id !== id))
  }

  return (
    <ListContext.Provider
      value={{
        tasks,
        createNewTask,
        toggleTask,
        deleteComment,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
