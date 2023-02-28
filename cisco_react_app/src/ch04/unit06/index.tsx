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
    // Method 1.
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(res => res.json())
        .then((data: Comment[]) => {
            console.log(data)
        })
    }, [])

    // Method 2.  使用async function.
    const fetchData = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        const data = await res.json() as Comment[]

        console.log(data)
    }
    useEffect(()=> {fetchData()}, [])
    
    return<>
    <h1>Fetch</h1>
    </>
}

export {APP}