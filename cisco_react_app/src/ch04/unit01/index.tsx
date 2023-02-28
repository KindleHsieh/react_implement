import React from 'react'

// Why Hook?
// 1. HOC共用邏輯複雜。  HOC就是共用邏輯(函式)。
// 2. 不能顧慮class的大小事。 ＥＸ： this。
// 
// class 組件：
// ＡＢ組件 -> 共用的邏輯 -> 抽離出來為函式function。
// ＡＢ -> 抽離函式(HOC)
// 函式(A) -> 產生一個擁有總分邏輯的A邏輯。
// 函式(B) -> 產生一個擁有總分邏輯的B邏輯。
// 
// 
// Hook，就是取代ＨＯＣ的方法，可以降低HOC的複雜度，達到共用邏輯的效果。


type BProps = {
  totalScore: number;
}
type BState = {
  // totalScore: number;
}

type AProps = {
  totalScore: number;
}
type AState = {
  // totalScore: number;
}

// --------------------------------------------------------

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

// --------------------------------------------------------

class ScoreBoardB extends React.Component<BProps, BState> {
  constructor(props: BProps) {
    super(props)
    // this.state = {
    //   totalScore: 0
    // }
  }

  // 組件被安裝時
  componentDidMount() {
    // this.setState({
    //   totalScore: getCurrentScore() + getScoreByBoardName('boardB')
    // })
  }

  render(): React.ReactNode {
      return <>
        <p>B Total Score: {this.props.totalScore}</p>
      </>
  }
}

class ScoreBoardA extends React.Component<AProps, AState> {
  constructor(props: AProps) {
    super(props)
    // this.state = {
    //   totalScore: 0
    // }
  }

  // 組件被安裝時
  componentDidMount() {
    // this.setState({
    //   totalScore: getCurrentScore() + getScoreByBoardName('boardA')
    // })
  }

  render(): React.ReactNode {
      return <>
        {/* <p>A Total Score: {this.state.totalScore}</p> */}
        <p>A Total Score: {this.props.totalScore}</p>
      </>
  }
}


// HOC寫法！
function withTotalScore(WrappedComponent: React.ComponentType<any>, boardName: string) {
  return class extends React.Component<{}, { totalScore: number }> {
    constructor(props: {}) {
      super(props);
      this.state = {
        totalScore: 0
      };
    }
    componentDidMount() {
      this.setState({
        totalScore: getCurrentScore() + getScoreByBoardName(boardName)
      })
    }

    render(): React.ReactNode {
        return <WrappedComponent totalScore={this.state.totalScore} />
    }
  } 
}

function Main() {
  const WrappedComponentA = withTotalScore(ScoreBoardA, 'boardA')
  const WrappedComponentB = withTotalScore(ScoreBoardB, 'boardB')
  return (
    <>
      {/* <ScoreBoardA />
      <ScoreBoardB /> */}
      <WrappedComponentA />
      <WrappedComponentB />
    </>
  )
}

export default Main