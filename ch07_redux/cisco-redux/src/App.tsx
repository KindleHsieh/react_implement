import './App.css';
import styled from 'styled-components'
import {useAppSelector, useAppDispatch} from './hooks'
import {addTodo, addTimeStamp} from './slices/todo'
import {useState} from 'react'
import { useGetTodoListQuery } from './services/todoApi';

const Wrapper = styled.div`
  padding: 1.5rem;
`

const Title = styled.h2`
  font-weight: 900;
  margin-top: 2rem;
`

const NoteInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: .5rem;
  box-sizing: border-box;
`

const SubmitBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  border: 0;
  font-weight: 900;
  margin-top: 1rem;

  :active {
    background: #000000be;
  }
`

const Item = styled.div`
  margin-top: 1rem;

  > b {
    margin-right: .5rem;
  }
`


function App() {
  const todoReducer = useAppSelector(state => state.todoReducer)
  const todoList = todoReducer.todoList

  const dispatch = useAppDispatch()

  const [text, setText] = useState("")

  // RTK 會回傳三種資訊。 -> data, error, isloading
  const {data, error, isLoading} = useGetTodoListQuery('1') // 裡面要帶的變數就相對於query()內的資訊。
  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <NoteInput type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
      }} />
      <SubmitBtn onClick={()=>{
        if (text === ""){
          alert("PLZ enter text.")
          return
        }
        dispatch(addTodo(text))
        setText("")
      }}>

        Submit
      </SubmitBtn>
      <SubmitBtn onClick={()=>{dispatch(addTimeStamp())}}>
        Record Timestamp
      </SubmitBtn>
      <Title>List</Title>
      {
        todoList.map((data, index) =>{
          return(
            <Item >
              <b>{index+1}</b>
              {data}
            </Item>
          )
        })
      }
      <Title>TodoInfo</Title>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
      <div>
        <p>UserID: {data?.userId}</p>
        <p>U Title: {data?.title}</p>
      </div>)}
    </Wrapper>
  );
}

export default App;