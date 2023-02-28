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
// hook function 與 一般 function有什麼差別呢？
// 其實沒有什麼兩樣，用法完全相同，純粹是因為內部實作的時候有使用到hook，好讓react可以追蹤。
const useFetchAPI = () => {
    const [postId, setPostId] = useState(0)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([] as Comment[])

    
    
    const fetchData = async (postId: number) =>{
        console.log(postId);
        setLoading(true)
        try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            const data = await res.json() as Comment[]
            // console.log(data)
            setData(data)
            
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
    // 請小心！ return 是個 陣列，但是不會如你放進去的順序做回傳！
    // 因此需要加上 const來強制按照順序傳回。
    // return [postId, setPostId, data, error, loading] as const

    // 示範使用物件的樣式，那也就不用使用as const，但是如果想要遵循hook的形式，還是去用as const。
    return {postId, setPostId, data, error, loading}
}

const APP: React.FC = () =>{
    // const [postId, setPostId, data, error, loading] = useFetchAPI()
    const {postId, setPostId, data, error, loading} = useFetchAPI()

    const clickNextHandler = ()=>{
        setPostId(postId + 1)
    }
    const clickPreHandler = ()=>{
        setPostId(postId - 1 >=0? postId - 1: 0)
    }
    
    
    
    return<>
    <h1>Fetch</h1>
    <button onClick={clickNextHandler}>+1</button>
    <button onClick={clickPreHandler}>-1</button>
    <p style={error === null? {color: 'green'}:{color: 'red'}}>{error === null? 'Right':error.message}</p>
    {loading === true? <p>Loading</p>: null}
    <p>Result:</p>
    <p>{data.length}</p>
    {
        data.length > 0 && data.map((row) => 
            // 在使用map建立element時，需要給key，來為未來系統做查找的時候能夠更精確。
            // 這個key不是element的id喔，沒有顯示在html上。
            <p key={row.id}>{row.email}</p>
        )
    }
    </>
}

export {APP}