// RTK 的服務建立。
// 先建立一個services的資料夾，因為可以有多種服務內容。
// 每個服務內容也會有可以有多個功能，這就是等等會建立在 endpoints 裡面的功能。
// 建立 createApi，並用 fetchBaseQuery 作為非同步的fetch功能。
// 建立利用creatApi 本身的功能建立hook。
// 到store建立reducer + middleware
// 到App.tsx使用hook.

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

type TodoData = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const todoApiService = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    // endpoint 要帶入參數，使用builder的名稱。
    endpoints: (builder)=>({
        // 名稱就是一個服務的功能，可以多個。
        // 並且會自動產生相對應的hook。 EX: getUserName -> useGetUserName。
        getTodoList: builder.query<TodoData, string>({
            // query後的function就是等等對應hook的輸入，會影響到後面字串的變數。且這字串就是加在baseUrl後面的。
            // EX: https://jsonplaceholder.typicode.com/todos/2
            query: (id) => `todos/${id}`,
        })
    }),
})
// 這裡面的hook名稱就是自動產生的。
export const {useGetTodoListQuery} = todoApiService