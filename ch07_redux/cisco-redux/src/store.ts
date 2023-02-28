import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './slices/todo'
import {loggerMiddleware, CiscoMiddleware} from './middleware'
import {combineReducers} from 'redux'
import {todoApiService} from './services/todoApi'

const reducers = combineReducers({
    todoReducer,
    // RTK 要在這邊加入reducer.
    [todoApiService.reducerPath]: todoApiService.reducer
})

// slice 項目可以有多個，但是store只有一個。
const store = configureStore({
    // reducers 方法1.
    // slice 有多個，就是放在reducer裡面。
    // reducer:{
    //     todoReducer
    // },

    // reducers 方法2.
    reducer: reducers,

    // middleware放這邊。
    // RTK 要在這邊加入middleware.
    middleware: getCurrentMiddleware=>
    getCurrentMiddleware()
    .concat(loggerMiddleware)
    .concat(CiscoMiddleware)
    .concat(todoApiService.middleware)
})

// reducer 方法1的時候，要打配store.getState的方法，自動找類型回傳。
// export type RootState = ReturnType<typeof store.getState>
// reducer 方法2的時候，因為已經使用combine了，所以可以直接回傳reducers。
export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

export default store