import {useState, useRef, useEffect} from "react";

// 1. windows最佳處理時機。
// 2. 一般獲取HTML元素的方式。
// 3. 用ref獲取HTML元素的方式。


const APP: React.FC = () =>{

    // // useRef 來取得與element之間的連結。
    const h1Ref = useRef<HTMLHeadingElement>(null)
    
    // 在操作獲取 windows、document 的時候，就是要在useEffect內使用。
    // 因為useEffect是在所有return的 render 都做完後，才會執行。
    // 執行順序：
    // 1. 建立組件。
    // 2. return JSX。
    // 3. 執行useEffect。
    // 因此在使用第三方套件的時候，常常需要getElement，就是要將程式寫在useEffect，確保可以取得element。
    useEffect(() =>{
        // // 可以使用js code去執行，但是react團隊最推薦的是useRef。
        // const ele = document.getElementById('hh1')
        // console.log('ele', ele);

        // // useRef 來取得與element之間的連結。
        console.log('h1Ref', h1Ref.current);
        
    }, [])
    return<>
    {/* <h1 id="hh1">Fetch</h1> */}
    <h1 ref={h1Ref}>Fetch</h1>
    </>
}

export {APP}