import {useState, useRef} from "react";


const APP: React.FC = () =>{
    const [hidden, setHidden] = useState(false)
    let sum = useRef(0)

    const click = () => {
        console.log('sum', sum.current)
        sum.current ++
        if(sum.current === 5 ){setHidden(!hidden)}
    }
    

    
    return<>
    <h1>Count: </h1>
    <button onClick={click}>+1</button>
    {hidden && <p>"Hidden Zone"</p>}
    </>
}

export {APP}