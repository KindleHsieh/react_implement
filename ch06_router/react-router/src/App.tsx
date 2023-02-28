import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, Outlet, useParams, useNavigate, RouteObject, useRoutes} from 'react-router-dom';
// Routes and Route: Let you control url. Remeber to use "BrowserRouter" on the index page.
// Outlet: Let you control nested Routes place.
// useParams: Catch the url string.
// useNavigate: 使用JS的方式，做跳轉頁面。 (像是使用Button做跳轉。)
// RouteObject: Let you can plan your route like Config file. Remeber to use useRoutes to implement. 

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// createBrowserRouter: Can use structed data to replace "Routes and Route".
// Remeber to use "RouterProvider" at the return.
import ErrorPage from './error-page';

// // way 1. (from video)
function Home() {
  return(
  <>
  <main>
    <h1>Welcome Home.</h1>
  </main>
  <nav>
    <Link to="/about">About</Link>
  </nav>
  </>
  )
}

export function About() {
  const n = useNavigate();
  return(
  <>
  <main>
    <h1>This is About.</h1>
  </main>
  <nav>
    <Link to="/">Home</Link>
    <button onClick={()=>{n("/itemID/1000")}}>跳轉並取得ItmeID</button>
  </nav>
  <Outlet/>
  </>
  )
}

const Main = () => {
  return <p>Main</p>
}

const Item = () => {
  const url = useParams()
  console.log('url', url);
  
  return <p>Main</p>
}

const NoMath = () => {
  return <p>No Match any URL.</p>
}

// way 2. (from offical page)
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <><div>Hello Root.</div><nav><Link to="about">About</Link></nav></>
    },
    {
      path: "about",
      element: <About/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "Main",
          element: <Main />,
        },
      ],
    },
    {path: "*", element: <NoMath/>}
  ]
);

// way 3. Config.
const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <><div>Hello Root.</div><nav><Link to="about">About</Link></nav></>
  },
  {
    path: "about",
    element: <About/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "Main",
        element: <Main />,
      },
    ],
  },
  {path: "*", element: <NoMath/>}
]



function App() {
  const elment = useRoutes(routerConfig)
  return (
    <div>
      <h1> "React Router"</h1>
      {/* way 1. (from video)*/}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path='main' element={<Main />}/>
        </Route>
        <Route path='itemID' element={<About />}>
          <Route path=':itme' element={<Item />}/>
        </Route>
      </Routes> */}

      {/* way 3. Config */}
      {elment}
      
      {/* way 2. (from offical page) */}
      {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default App;
