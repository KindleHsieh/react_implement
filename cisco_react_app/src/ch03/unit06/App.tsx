import React from 'react'
import styled from 'styled-components'

// // Css in JavaScript.
// const AppStyle1 = {
//     color: 'blue'
// }

// const AppStyle2 = {
//     color: 'red'
// }

// const App = () => {
//     const status = false
//     return <>
//     <h1 style={status? AppStyle1 : AppStyle2}>Hello</h1>
//     </>
// }
// styled-components.
// npm install --save styled-components @types/styled-components
const H1 = styled.h1`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: 'palevioletred';
`
type BtnType = {
  Status: boolean
}

const Button = styled.button<BtnType>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${props => props.Status === true? '#000': 'palevioletred'} ;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const App = () => {
    const status = true
    return <>
    <H1>Hello</H1>
    <Button Status={status}>BTN</Button>
    </>
}


export {App}