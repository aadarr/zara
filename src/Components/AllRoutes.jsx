// import Login from './Login'
// import React from 'react'
// import {BrowserRouter, Routes, Route } from 'react-router-dom'
//import Help from '../Components/Help'
// import SignIn from './SignIn'
//import SinglePage from '../Components/SinglePage'
//import ProductPage from '../Routes/ProductPage'
// import Homepage from './Homepage'
//import Cart from '../Components/Cart'
//import Checkout from '../Components/Checkout'
//import Companylogin from './Company'
//import PaymentMethod from '../Components/PaymentMethod'
//import Search from '../Components/Search'
//import CardDetail from '../Routes/CardDetail'
//import OTP from './OTP'
//import ProtectedRoute from './ProtectedRoute'
// const AllRoutes = () => {
//   return (
//     <BrowserRouter>
//      <Routes>
//       <Route path='/' element={<Homepage />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/signin' element={<SignIn />} /> 
//     </Routes>
//     </BrowserRouter>
   
//   )
// }
// const AllRoutes = () => {
//     return (
//       <Router>
//         <Routes>
//           <Route path='/' element={<Homepage />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/signin' element={<SignIn />} />
//         </Routes>
//       </Router>
//     );
//   };

// export default AllRoutes

//12 march:
// import Login from './Login'
// import React from 'react'
// import {BrowserRouter, Routes, Route } from 'react-router-dom'
// import SignIn from './SignIn'
// import Homepage from './Homepage'
// const AllRoutes = () => {
//   return (
//     <BrowserRouter>
//      <Routes>
//       <Route path='/' element={<Homepage />} />
//       <Route path='/' element={<Login />} />
//       <Route path='/signin' element={<SignIn />} /> 
//     </Routes>
//     </BrowserRouter>
   
//   )
// }
// export default AllRoutes




import LogIn from './LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import Homepage from './Homepage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  )
}

export default AllRoutes
