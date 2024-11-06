import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Layout from "./Componets/Layout";
import Edit from "./Componets/Edit";
// import CardDetail from './Componets/CardDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/edit/:id"} element={<Edit />} />
            {/* <Route path={'/photoDetail/:id'} element={<CardDetail />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
