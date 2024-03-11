import logo from './Components/images/logo.png';
import './App.css';
import ZaraLogin from './Components/ZaraLogin'
import Login from './Components/Login'
//import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import 'swiper/swiper-bundle.css'; 
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 

// function App() {
//   return (
//     <div> 
//       <Navbar/>
//       <Homepage/>
//     </div>
  
//   );
// }
function App() {
  return (
    <Routes>
      <Route path="/" element={<div><Navbar /><Homepage /></div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
