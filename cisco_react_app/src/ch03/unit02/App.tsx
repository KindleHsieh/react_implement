import React from 'react'
import './App.css'
import Header from './components/Header'

const Body:React.FC = () => {
    return <>
        {/* props -> 屬性 */}
        {/* 注意唷，這邊的tag不是網頁的tag，而是javascript的React.createElement物件 */}
        <h1 className='color-blue'>Hello</h1>
        <p>Cisco...</p>
        <img src="/logo512.png" alt="" srcSet="" />
    </>
}

const A: React.FC = () => {
    // 寫法一： 一次只能回傳ㄧ種html元素，所以我們用div將他們包起來。
    // return <div>
    //     {/* props -> 屬性 */}
    //     <h1 className='color-blue'>Hello</h1>
    //     <p>Cisco...</p>
    //     <img src="/logo512.png" alt="" srcSet="" />
    // </div>

    // 寫法二： fragment.
    return <>
    <Header />
    <Body />
    </>
}
export {A}