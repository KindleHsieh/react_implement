import {useState, useEffect} from "react";

// 使用useEffect 模擬跟後端要資料。
// 使用jsonplaceholder.
// https://jsonplaceholder.typicode.com/
// get: https://jsonplaceholder.typicode.com/comments?postId=1

type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

const APP: React.FC = () =>{
    const [postId, setPostId] = useState(0)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)

    const clickNextHandler = ()=>{
        setPostId(postId + 1)
    }
    const clickPreHandler = ()=>{
        setPostId(postId - 1 >=0? postId - 1: 0)
    }
    
    const fetchData = async (postId: number) =>{
        console.log(postId);
        setLoading(true)
        try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            const data = await res.json() as Comment[]
            console.log(data)
            
            if(postId % 2 === 0){
                setError(Error('Even'))
            }else{
                setError(null)
            }
        }catch(error){
            setError(error as Error)
        }
        // 不管是成功還是失敗，我都要結束。
        setLoading(false)
    }
    useEffect(()=> {fetchData(postId)}, [postId])
    
    return<>
    <h1>Fetch</h1>
    <button onClick={clickNextHandler}>+1</button>
    <button onClick={clickPreHandler}>-1</button>
    <p style={error === null? {color: 'green'}:{color: 'red'}}>{error === null? 'Right':error.message}</p>
    {loading === true? <p>Loading</p>: null}
    </>
}

export {APP}