// Implement Context.
// Include Provider and Consumer.

// context 其實也是一種props傳遞的方式。
// 在被使用的時候，會有樹狀關係，只要在同一個連續的樹下，中間任何元素都可以取得context內容。
// 如果不是在該個樹下，也會有預設的數值可取用。
// 原則上，不同（不相干）鏈路的context是要分開的！因為當context內的資料有改變時，就會重新渲染整個鏈路。
// 當一個context影響兩條鏈路（左右），左邊資料改變，卻會讓左右都重新渲染。

import React, {createContext, useContext, useState} from 'react'

type BtnProps = {
    children: React.ReactNode
}

const defaultValue = {
    btnVisible: false
}
const btnContext = createContext(defaultValue)

// 『設定』值的時候調用此函式。
// children 就是指被BtnProvider包裹住的所有組件，我個人認為就是定義作用域，被包裹的就是作用域範圍。
// 這個children是一種props，是react定義好的。
export const BtnProvider: React.FC<BtnProps> = ({children}) => {
    // Provider 其實是一種組件。
    // value 是真正要傳進去做操作值。
    // value 的type要跟default一樣。
    const [btnVisible, setBtnVisible] = useState(false)
    return<>
    <btnContext.Provider value={{btnVisible}}>
        {children}
    </btnContext.Provider>
    </>
}

// 『取』值的時候調用此函式。
export const useBtnContext = () =>{
    return useContext(btnContext)
}