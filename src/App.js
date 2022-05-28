import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';

import Addtools from './Pages/Dashboard/Addtools';
import Allusers from './Pages/Dashboard/Allusers';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageTools from './Pages/Dashboard/ManageTools';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Review from './Pages/Dashboard/Review';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';
import RequireAuth from './Pages/LogIn/RequireAuth';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
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
           <Route path='/dashboard/alluser' element={<Allusers></Allusers>}></Route>
           <Route path='/dashboard/manageorders' element={<ManageOrders></ManageOrders>}></Route>
           <Route path='/dashboard/managetools' element={<ManageTools></ManageTools>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
     


    </div>
  );
}

export default App;
