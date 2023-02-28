// ref: https://redux.js.org/understanding/history-and-design/middleware
// Middleware 可以是多個。
import {Middleware} from 'redux'
import { RootState } from './store'

// MiddleWare One.
// next就是dispatch，所以在next前後做的事情，就是middleware的工作內容。
// middleware的功能就是在達到相同目的時，多做一些事情。
// 讓dispatch不只有傳縙action的功能，還能做更多事。
export const loggerMiddleware: Middleware<{}, RootState> = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
// MiddleWare Two.
export const CiscoMiddleware: Middleware<{}, RootState> = store => next => action => {
    console.log('dispatching Cisco')
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }