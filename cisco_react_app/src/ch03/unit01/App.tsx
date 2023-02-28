import React from 'react';
import './App.css';

// function App() {
//   return (
//     <h1>Kindle AI Engineer</h1>
//   );

// }

const App: React.FunctionComponent = () =>{
  return <h1>Yeee</h1>
}

// export default App;

class App2 extends React.Component {
  render(): React.ReactNode {
    return <h1>Hello Class</h1>
  }
}
export {App, App2}
