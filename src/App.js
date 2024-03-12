// import logo from './Components/images/logo.png';
// import './App.css';
// import ZaraLogin from './Components/ZaraLogin'
// import Login from './Components/Login'
// import AllRoutes from './Components/AllRoutes';
// import Navbar from './Components/Navbar';
// import 'swiper/swiper-bundle.css'; 
// import Homepage from './Components/Homepage';
// import { Route, Routes } from 'react-router-dom';
 

// // function App() {
// //   return (
// //     <div> 
// //       <Login/>
// //     </div>
  
// //   );
// // }
// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<div><Navbar /><Homepage /></div>} />
// //       <Route path="/login" element={<Login />} />
// //     </Routes>
// //   );
// // }

// function App() {
//   return (
//     <div className="App">
//       <Navbar/> 
//       <AllRoutes/> 
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import 'swiper/swiper-bundle.css';
const App = () => {
  return (
    <div className="App">
      <Navbar/> 
      <AllRoutes/> 
    </div>
  );
}


export default App;