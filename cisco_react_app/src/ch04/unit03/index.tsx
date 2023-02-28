import React from "react";
import { useState } from "react";

// 1. useState的基本用法。
// 2. batching update. (批量更新)
// 3. 變數在渲染過程的作用範圍。

// 1.
const APP: React.FC = () => {
    // 但泛型只有輸入一種類別，變數會自動認為可能為該類別 + undefined
    const [num, setNum] = useState<number>()
    
    const counterHandler = () => {
        if (num !== undefined){
            setNum(num + 1)
        }
        else{
            setNum(100)
        }
    }

    return <>
    <h1>APP</h1>
    <h1>Counter: {num}</h1>
    <button onClick={counterHandler}>+1</button>
    </>
}

//2. 
// 事件冒泡的處理。  也就是說，子層被點擊的時候，會觸發父層也執行某個動作的行為。
// 渲染流程(re-render)：
// Click 子層。 ->
// setNum(child)
// render(child)
// Parent 因為冒泡所以也渲染。
// setNum(parent)
// render(parent)
// render(child). [在此次動作中，被重複渲染了，所以合併前面的child渲染，僅執行這次。]

const Parent: React.FC = () => {
    let [count, setCount] = useState(0)
    return<>
    <div onClick={()=> {setCount(prev => prev + 1)}}>
        Parent click: {count}
        <Child />
    </div>
    </>
}

const Child: React.FC = () => {
    let [count, setCount] = useState(0)
    return<>
    <button onClick={()=> {setCount(prev => prev + 1)}}>
    Child click: {count}
    </button>
    </>
}

// 3. 變數在渲染過程的作用範圍。
// 幾使使用多次，但是因為setfunction會取得的是render前的狀態，因此不會改變多次，會以最後一個改變為主。
const APP3: React.FC = () => {
    // 但泛型只有輸入一種類別，變數會自動認為可能為該類別 + undefined
    const [num, setNum] = useState<number>(0)
    
    const counterHandler = () => {
        // // setNum 呼叫多次，但是僅會以最後的 +2 為改變方式。
        // setNum(num + 1)
        // setNum(num + 3)
        // setNum(num + 2)

        // 如果想要真的如果想要真的呼叫多次的話，使用callback，可帶入set function。
        const cb1 = (prev: number )=> prev + 1;
        const cb2 = (prev: number )=> prev + 2;
        setNum(cb1)
        setNum(cb2)
    }

    return <>
    <h1>APP</h1>
    <h1>Counter: {num}</h1>
    <button onClick={counterHandler}>+1</button>
    </>
}
export {APP, Parent, APP3}