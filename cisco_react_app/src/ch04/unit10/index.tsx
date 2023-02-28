import React, {useState, useRef, useEffect} from "react";

const APP: React.FC = () =>{
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")

    const logIn = () =>{
        console.log('account', account);
        console.log('password', password);
        
    }

    const clickHandler = (event: React.FormEvent<HTMLInputElement>) => {
        if(event.currentTarget){
            setAccount(event.currentTarget.value)
            
        }
    }

    const clickPasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
        if(event.currentTarget){
            setPassword(event.currentTarget.value)
            
        }
    }

    return<>
    <h1>Form</h1>
    <p>帳號</p>
    <input type="text" name="" value={account} id="account" onChange={clickHandler}/>
    <p>你輸入的帳號: {account}</p>
    <p>密碼</p>
    <input type="text" name="" value={password} id="account" onChange={clickPasswordHandler}/>
    <div>
        <button onClick={logIn}>登入</button>
    </div>

    </>
}

export {APP}