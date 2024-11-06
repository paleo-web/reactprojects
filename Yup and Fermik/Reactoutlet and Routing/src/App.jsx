import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Componets/Home";
import Contact from "./Componets/Contact";
import About from "./Componets/About";
import NotFound from "./Componets/NotFound";
import Layout from "./Componets/Layout";
import EditForm from "./Componets/EditForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />;
        <Route path="/contact" element={<Contact/>} />;
        <Route path="/about" element={<About/>} />;
        <Route path="/edit/:id" element={<EditForm/>} />;
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
