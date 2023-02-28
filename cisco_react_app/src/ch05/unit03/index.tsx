import React, {useState, useEffect, useMemo, useCallback} from 'react'

// This section is for uesMemo and useCallback.

// useMemo is for memorize value. Like {} or [].  
// useCallbacke is for memorize function.
// useMemo 也是可以用來記憶function的喔，因為function也是一種物件。
// 但是因為 寫法繁瑣，所以有更方便的useCallback可以使用。

// Why we need useMemo and useCallbacke to help us keeping some information?
// 1. 淺比較。 組建or物件是淺比較，因此即使是相同的內容，還是會被認為是不同的物件。
// 2. 我們在使用useEffect會監聽變數，但有些『值』的比較是用記憶體位置做比較，因此需要useMemo的幫忙。

// JS中，對於物件的比較是比較記憶體位置，並不是根據內容作比較。
// 因此
// let obj1 = {}
// let obj2 = {}
// console.log(obj1 === obj2);  // => False

const APP: React.FC = () => {    
    const [value, setValue] = useState(false)

    // if use {} only, the data can't be recornized next time.
    // const obj = {name: 'Json'}
    // it need useMemo to keep the data.
    // useMemo need return what you want to keep. 
    const memoObj = useMemo(()=>{
        const obj = {name: 'Json'}
        return obj
    }, [])

    const memoFunc1 = useCallback(()=>{
        console.log('here');
    }, [])

    useEffect(() => {
        console.log('useEffect cb');
        memoFunc1();
    }, [memoObj, memoFunc1])

    return <>
    <h1>APP</h1>
    <button onClick={()=>{setValue(!value)}}>Re Render</button>
    </>
}

export {APP}