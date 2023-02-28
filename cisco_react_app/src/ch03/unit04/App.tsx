import React, {useState} from 'react';

type BtnProps = {
    currentNum: number
    OnClickHandler: () => void
}
// 改變變數 -> 觸發渲染。 (State)
const Btn: React.FC<BtnProps> = ({currentNum, OnClickHandler}) => {
    // const [num2, setNum2] = useState(999)

    // const func = () => {
    //     // 重點。
    //     // currentNum += 1;
    //     setNum2(num2 + 1);
    // }

    // console.log(num2);
    // return (
    // <button onClick={func}>
    //     Add 1, 
    //     <span>Current Total [{currentNum}]</span>
    //     <span>Testing Total [{num2}]</span>
    // </button>)

    // 這個段落用於 prop + state 從父到子的改變展示。
    return (
    <button onClick={OnClickHandler}>
        Add 1, 
        <span>Current Total [{currentNum}]</span>
    </button>)


}

// // props and state
// // props 的用意就是，透過傳送某個參數，達到一致性。
// // 並且，props是只能從父層傳向子層。
// // 當有變數會涉及頁面上的更新(render)，那麼就需要state幫忙觸發渲染。
// // function component 要用 hook的方式來實現內部狀態的改變。
// const App: React.FC = () =>{
//     const num = 980;
//     return <>
//     <h1>Counter: {num}</h1>
//     <Btn currentNum={num} />
//     </>
// }

// 為了可以順利將狀態由外到內的改變，最好的方法就是在父層就做state的宣告。
// 實現 props + state。
const App: React.FC = () =>{
    // const num = 980;
    const [num, setNum] = useState(0)

    const btnClickHandler = () => {
        setNum(num + 1);
    }
    return <>
    <h1>Counter: {num}</h1>
    <Btn currentNum={num} OnClickHandler={btnClickHandler} />
    </>
}
export {App}