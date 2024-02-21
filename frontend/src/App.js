import './index.css';
import Register from '../src/Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgotpassword from './Components/Forgotpassword';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
