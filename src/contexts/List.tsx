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
  getById(id: number): ToDo | undefined
  tasksCompleted(): number
}

interface ListContextProviderProps {
  children: React.ReactNode
}

export const ListContext = createContext({} as List)

export function ListProvider({ children }: ListContextProviderProps) {
  const [tasks, setTasks] = useState<ToDo[]>(() => {
    const storageStateAsJSON = localStorage.getItem('@todo:tasks')

    if (storageStateAsJSON) {
      return JSON.parse(storageStateAsJSON)
    }
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

  function getById(id: number) {
    return tasks.find((t) => t.id === id)
  }

  function tasksCompleted() {
    return tasks.filter((task) => task.isCompleted).length
  }
  return (
    <ListContext.Provider
      value={{
        tasks,
        createNewTask,
        toggleTask,
        deleteComment,
        getById,
        tasksCompleted,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
