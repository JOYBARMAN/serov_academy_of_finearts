import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/home/Home';
import Layout from './component/Layout';
import Course from './component/course/Course';
import LoginReg from './component/auth/LoginReg';
import SendPasswordResetEmail from './component/auth/SendPasswordResetEmail';
import ResetPassword from './component/auth/ResetPassword';
import ChangePassword from './component/auth/ChangePassword';
import Dashboard from './component/dashboard/Dashboard';
import Admin from './component/admin/Admin';
import AdminLayout from './component/admin/AdminLayout';
import AddStudent from './component/admin/student/AddStudent';
import Notfound from './component/Notfound';
import { useSelector } from 'react-redux';
import About from './component/about/About';
import Product from './component/product/Product';
import Contact from './component/contact/Contact';
import AddSection from './component/admin/section/AddSection';
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path='about' element={<About />} />
            <Route path='product' element={<Product />} />
            <Route path='contact' element={<Contact />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/" />} />
            <Route path="passwordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/passwordreset/:id/:token" element={<ResetPassword />} />
            <Route path="changepassword" element={!access_token ? <LoginReg /> : <ChangePassword />} />
            <Route path='dashboard' element={access_token ? <Dashboard /> : <LoginReg />} />
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="addstudent" element={<AddStudent />} />
              <Route path="addsection" element={<AddSection />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
