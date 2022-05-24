import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Parchase from './pages/home/Parchase';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import Navbar from './pages/sheard/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequerAuth from './pages/login/RequerAuth';
import Dashbord from './pages/home/Dashbord/Dashbord';
import MyDashbord from './pages/home/Dashbord/MyDashbord';
import ReviwProduct from './pages/home/Dashbord/ReviwProduct';
import Users from './pages/home/Dashbord/Users';
import AddProduct from './pages/home/Dashbord/AddProduct';
import ManageProduct from './pages/home/Dashbord/ManageProduct';
import Payment from './pages/home/Dashbord/Payment';
function App() {
  return (
    <div className='bg-white'>
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/parchase/:service' element={<RequerAuth>
          <Parchase></Parchase>
        </RequerAuth>}></Route>
        <Route path='dashbord' element={<RequerAuth>
          <Dashbord></Dashbord>
        </RequerAuth>}>
          <Route index element={<MyDashbord></MyDashbord>}></Route>

          <Route path='review' element={<ReviwProduct></ReviwProduct>}></Route>

          <Route path='users' element={<Users></Users>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>

          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>

          <Route path='manage' element={<ManageProduct></ManageProduct>}></Route>

        </Route>

        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
