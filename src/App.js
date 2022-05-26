import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Addtools from './Pages/Dashboard/Addtools';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Review from './Pages/Dashboard/Review';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';
import RequireAuth from './Pages/LogIn/RequireAuth';
import Purchage from './Pages/Purchage/Purchage';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Header/Navbar';

function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchage/:purchageId'
          element={
            <RequireAuth>
              <Purchage></Purchage>
            </RequireAuth>
          }
        ></Route>
        <Route path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard>
              </Dashboard>
            </RequireAuth>
          }
        >
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
           <Route index element={<MyOrder></MyOrder>}></Route>
           <Route path='/dashboard/review' element={<Review></Review>}></Route>
           <Route path='/dashboard/addtools' element={<Addtools></Addtools>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />


    </div>
  );
}

export default App;
