import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/LogIn/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Header/Navbar';

function App() {
  return (
    <div>
      
     <Navbar></Navbar>
     <Routes>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/registration' element={<Registration></Registration>}></Route>
     </Routes>
     
     <Footer></Footer>
     
     
    </div>
  );
}

export default App;
