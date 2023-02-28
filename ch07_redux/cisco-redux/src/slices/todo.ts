import { createSlice} from '@reduxjs/toolkit'

// createSlice
// name
// reducers
// reducers 的內容。 (會接受的幾種方式，與其要執行的動作。)
// initialState
// initial -> interface (Like Type)
// export const {a.} = slice.action

interface InitialState {
    todoList: Array<String>
}

const initialState: InitialState = {
    todoList: ["todo..."]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // state.
    reducers: {
        // action.
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        addTimeStamp: (state) => {
            state.todoList.push(Date.now().toString())
        }
    }
}
)

export const {addTodo, addTimeStamp} = todoSlice.actions
export default todoSlice.reducer