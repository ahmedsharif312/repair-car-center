import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService/AddService';
import ManageService from './ManageService/ManageService';
import { ToastContainer } from 'react-toastify';
import OrdersPage from './Pages/OrdersPage/OrdersPage/OrdersPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        } />
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService />
          </RequireAuth>
        } />
        <Route path='/order' element={
          <RequireAuth>
            <OrdersPage />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
