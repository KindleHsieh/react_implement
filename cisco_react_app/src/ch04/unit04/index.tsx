import {useEffect, useState} from "react";

// useEffect 接收兩個參數，callback, 陣列。

// useEffect 會根據陣列內提到的變數如果有變化，就會出發callback。
// 但是，當陣列為空，就如同 class 中的 componentDidMount，在被創建的時候執行一次。


const APP: React.FC = () =>{
    let A = 111
    // 1. mount.
    // ex 再向後端API要資料的時候，只要一次就好，就會將要資料的動作寫在這裡。可以保證僅執行一次。
    useEffect(()=> {
        console.log('Show');
        
    }, [])

    // 2. 
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('Even')

    // useEffect
    useEffect(() => {
        console.log('Counter變化', counter);
        
        if (counter % 2 == 0){
            setText('Even')
        }
        else{
            setText('Odd')
        }
    }, [counter])
    const handleClick = () => {
        setCounter(counter + 1)
        // if ((counter + 1) % 2 == 0){
        //     setText('Even')
        // }
        // else{
        //     setText('Odd')
        // }
    }
    

    return<>
    <h1>Counter: {counter}</h1>
    <button onClick= {handleClick}>+1</button>
    <p>{text}</p>
    </>
}

export {APP}