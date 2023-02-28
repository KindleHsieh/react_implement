import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import{ App,  App2 } from './unit01/App';
// import{App} from './unit02/App';
// import{App} from './unit03/App';
// import{App} from './unit04/App';
// import{App} from './unit05/App';
// import{App} from './unit06/App';
// import{Main} from './ch04/unit02';
// import{APP, Parent, APP3} from './ch04/unit03';
// import{APP} from './ch04/unit04';
// import{APP} from './ch04/unit05';
// import{APP} from './ch04/unit06';
// import{APP} from './ch04/unit06_1';
// import{APP} from './ch04/unit07';
// import{APP} from './ch04/unit08';
// import{APP} from './ch04/unit09';
// import{APP} from './ch04/unit10';
// import{APP} from './ch05/unit02';
// import{APP} from './ch05/unit03';
import{APP} from './ch05/unit04';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



// unit03
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//       {/* <App2/> */}
//     </React.StrictMode>
//   );
// }, 1000)

// unit04
root.render(
  <React.StrictMode>
    <APP />
    {/* <Parent /> */}
    {/* <APP3 /> */}
    {/* <App2/> */}
  </React.StrictMode>
);