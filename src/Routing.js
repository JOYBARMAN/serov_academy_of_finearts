import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
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
import About from './component/about/About';
import Product from './component/product/Product';
import Contact from './component/contact/Contact';
import AddSection from './component/admin/section/AddSection';
import AllSection from './component/admin/section/AllSection';
import AllStudent from './component/admin/student/AllStudent';
import DetailStudent from './component/admin/student/DetailStudent';
import EditStudent from './component/admin/student/EditStudent';
import AllPayment from './component/admin/student_payment/AllPayment';
import AddPayment from './component/admin/student_payment/AddPayment';
import EditPayment from './component/admin/student_payment/EditPayment';
import AddTrainer from './component/admin/trainer/AddTrainer';
import AllTrainer from './component/admin/trainer/AllTrainer';
import { getUserIsAdmin } from "./services/localStoregService";

const Routing = () => {
    const { access_token } = useSelector(state => state.auth)
    const is_admin = getUserIsAdmin()
    return (
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
                    <Route path="admin" element={access_token && is_admin ? <AdminLayout /> : <Home />}>
                        <Route index element={<Admin />} />
                        <Route path="addstudent" element={<AddStudent />} />
                        <Route path="allstudent" element={<AllStudent />} />
                        <Route path="student/:id" element={<DetailStudent />} />
                        <Route path="student/:id/edit" element={<EditStudent />} />
                        <Route path="addsection" element={<AddSection />} />
                        <Route path="allsection" element={<AllSection />} />
                        <Route path="allpayment" element={<AllPayment />} />
                        <Route path="addpayment" element={<AddPayment />} />
                        <Route path="payment/:id/edit" element={<EditPayment />} />
                        <Route path="addtrainer" element={<AddTrainer />} />
                        <Route path="alltrainer" element={<AllTrainer />} />
                    </Route>
                    <Route path="*" element={<Notfound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing