import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Parchase from './pages/home/Parchase';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import Navbar from './pages/sheard/Navbar';

function App() {
  return (
    <div className='bg-white'>
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/parchase' element={<Parchase></Parchase>}></Route>

        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;