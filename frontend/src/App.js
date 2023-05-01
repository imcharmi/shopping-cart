import './App.css'
import "react-toastify/dist/ReactToastify.css"

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './componant/Home';
import Navbar from './componant/Navbar';
import Cart from './componant/Cart';
import NotFound from './componant/NotFound';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
