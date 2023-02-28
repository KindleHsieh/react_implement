import React, {useEffect, useState} from "react";

// we must announce an variable at here because if we use let type to make variable in func which will only exist in func, and die.(only run one times)
let interval: NodeJS.Timeout | null = null
let num = 0

const APP: React.FC = () =>{
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        // to do.
        interval = setInterval(()=> {
            num ++
            console.log(num)
        }, 1000)

        // return callback.
        // To reset some status before render.
        return () => {
            console.log('pre-re-render');
            
            if(interval !== null){
                clearInterval(interval)
                num = 0
            }
        }
    },[counter])

    const handleClick = () => {
        setCounter(counter + 1)
    }
    
    return<>
    <h1>計時器</h1>
    <h1>Counter: {counter}</h1>
    <button onClick= {handleClick}>+1</button>
    {/* <p>{text}</p> */}
    </>
}

export {APP}