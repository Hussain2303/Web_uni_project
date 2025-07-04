import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Bounce } from "react-toastify";
  import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
       <ToastContainer
     position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce} />
    </>
  );
};

export default App;
