import React, {useEffect, useState, useMemo, memo} from 'react'


type propB = {
    num: number
    obj: {name: string}
}
// 我們在重新render的時候，因為Ｂ是包在APP裡面的，因此Ｂ每次都會被更新。
// 這聽起來合理，但是如果Ｂ的功能是跟number有關而已，這樣render會造成無關的Ｂ也被重新執行。
// 有時候會想要避免這樣無效的開銷，因此會使用memo將function包起來，來監聽輸入有沒有做變化，有點話才會執行。
// 但一樣會遇到比較值的問題唷，因此當是物件{}或是陣列[]的時候，就需要useMemo的幫忙。

// memo 的使用
const B: React.FC<propB> = memo(({num, obj}) => {
    console.log('Render B', num, obj)
    
    return <p>B {num} {obj.name}</p>
})

const APP: React.FC = () => {
    const [value, setValue] = useState(false)
    const [num, setNum] = useState(0)
    const [obj, setObj] = useState({name: ''})

    const memoObj = useMemo(()=> {
        return obj
    }, [obj.name])

    console.log('Render APP')
    
    return <>
    <h1>APP</h1>
    <B num={num} obj={memoObj}/>
    <button onClick={()=>{setValue(!value)}}>
        重新render
    </button>
    <button onClick={()=>{setNum(100)}}>
        設定顯示數字
    </button>
    <button onClick={()=>{setObj({name: 'TOM'})}}>
        設定顯示名字
    </button>
    
    </>
}

export {APP}