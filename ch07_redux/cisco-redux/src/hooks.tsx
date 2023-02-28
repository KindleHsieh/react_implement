import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux'
// useSelector 是用來取得當下state的工具。  也是讓ＵＩ可以取得state狀態的工具。
import type {RootState, AppDispatch} from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector