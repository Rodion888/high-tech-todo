export type UserId = ''

export type Todo = {
  id: number
  text: string
  completed: boolean | undefined
}

export type Todos = Array<Todo>

export type Filters = {
  all: boolean
  active: boolean
  completed: boolean
}
