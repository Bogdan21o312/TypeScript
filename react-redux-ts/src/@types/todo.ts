interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodoState {
    todos: Todo[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchToddAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchToddSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}
interface FetchToddErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}
interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}

export type TodoAction = FetchToddAction | FetchToddSuccessAction | FetchToddErrorAction | SetTodoPage