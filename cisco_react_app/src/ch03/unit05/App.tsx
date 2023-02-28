import React from 'react'

// 1. props state.
// 2. 生命週期(這是class的特色，function沒有這個東西)
// 生命週期 包含3階段： 出生的時候，要被更新的時候，解除安裝的時候。
// 3. this.

type BtnProps = {
    ClickHandler: () => void
}
type BtnState = {}

class Btn extends React.Component<BtnProps, BtnState> {
    constructor(props: BtnProps){
        super(props)
    }
    componentWillUnmount() {
        console.log('Btn Unmount');
    }

    render(): React.ReactNode{
        return <button onClick={this.props.ClickHandler}>+1</button>
    }
}

type AppProps = {}
type AppState = {
    count: number
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps){
        super(props)
        this.state = {
            count: 0 
        }

    // 這一段程式碼，是保證this永遠指向App. 不管是windows還是其他物件在執行這定義的function時。
    this.countClickHandler = this.countClickHandler.bind(this)

    }

    
    countClickHandler() {
        console.log('here');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        
    }

    // 生命週期，要去 over write 一些方法。
    componentDidMount() {
        console.log('Mount');
    }
    // update，就會跟state有關係，因此要去實作state。
    componentDidUpdate() {
        console.log('Update', this.state);
    }
    componentWillUnmount() {
        console.log('Unmount');
    }

    render(): React.ReactNode {
        return <>
        <h1>Count: {this.state.count}</h1>
        {this.state.count == 5? null: < Btn ClickHandler={this.countClickHandler}/>}
        </>
    }
}

export {App}
