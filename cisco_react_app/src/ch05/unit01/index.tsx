import {useState, useEffect} from "react";

// React Context.
// 主要是用來解決 React Props 傳遞的問題。
// 當最外層到最內層有4層，如果有個props在最外層要控制最內層的參數，那麼，就要中間每一層都要有個props來傳遞。
// context 的功能就是，當有個變數需要共用到比較底層的組件時，就可以使用context，這樣就可以在最外層定義，接著在最內層使用。

// context -> 作用域
// 1. 提供資料的人 Provider.
// 2. 接收資料的人 Consumer.
// Implement on Unit02.

type Props = {
    btnVisible: boolean
}
const D: React.FC<Props> = ({btnVisible}) => {
    console.log('btnVisible', btnVisible);
    
    return <>
    <button>D</button>
    </>
}
const C: React.FC<Props> = ({btnVisible}) => {
    return <>
    <p>C</p>
    <D btnVisible={btnVisible}/>
    </>
}
const B: React.FC<Props> = ({btnVisible}) => {
    return <>
    <p>B</p>
    <C btnVisible={btnVisible}/>
    </>
}

const APP: React.FC = ()=>{
    const [btnVis, setBtnVis] = useState(false)
    return <>
    <h1>APP</h1>
    <B btnVisible={btnVis}/>
    </>
}
export {APP}