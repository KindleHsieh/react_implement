import React from "react";
import {useState, useEffect} from "react";

// react 團隊有規定，如果使用hook都要是use開頭作為命名，才可以追蹤hook的狀態。
// 並且，如果是hook，就不行在他之前有if 等等條件判斷式，讓hook有機會不執行或是改別執行順序。
// 因為這樣react就不能去追蹤hook調用的情形與狀態。


// useEffect 功能近似 componentDidMount，只會再被創建的時候執行一次。

// type MainProps = {
//     name: string
// }

function getCurrentScore() {
    return 100
  }
  
function getScoreByBoardName(boardName:String) {
if (boardName === 'boardA') {
    return 200
} 
if (boardName === 'boardB') {
    return 1000
} 
return 0
}

// 自定義 Hook (class HOC)
const useGetTotalScore = (boardName: string) => {
    const [score, setScore] = useState(10000)

    // useEffect，只要陣列內的元件，有被改變的時候就會啟動。
    // 接受兩個參數，callback, 只要陣列。
    // useEffect(() => {}, [])
    useEffect(() => {
        let current = getCurrentScore() + getScoreByBoardName(boardName)
        setScore(current)
    }, [])
    return score
}

const ScoreBoardA: React.FC = () => {
    // const [score, setScore] = useState(10000)

    // // useEffect，只要陣列內的元件，有被改變的時候就會啟動。
    // // 接受兩個參數，callback, 只要陣列。
    // // useEffect(() => {}, [])
    // useEffect(() => {
    //     let current = getCurrentScore() + getScoreByBoardName('boardA')
    //     setScore(current)
    // }, [])
    const score = useGetTotalScore('boardA')
    return <>
    <p>A Total Score: {score}</p>
    </>
}

const ScoreBoardB: React.FC = () => {
    // const [score, setScore] = useState(10000)
    // // useEffect(() => {}, [])
    // useEffect(() => {
    //     let current = getCurrentScore() + getScoreByBoardName('boardB')
    //     setScore(current)
    // }, [])
    const score = useGetTotalScore('boardB')
    return <>
    <p>B Total Score: {score}</p>
    </>
}


// const Main: React.FC<MainProps> = () => {
const Main: React.FC = () => {
    return <>
    <ScoreBoardA />
    <ScoreBoardB />
    </>
}

export {Main}