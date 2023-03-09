import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './component/home/Home';
import Layout from './component/Layout';
import Course from './component/course/Course';
import LoginReg from './component/auth/LoginReg';
import SendPasswordResetEmail from './component/auth/SendPasswordResetEmail';
import ResetPassword from './component/auth/ResetPassword';
import ChangePassword from './component/auth/ChangePassword';
import Dashboard from './component/dashboard/Dashboard';
import Notfound from './component/Notfound';
import { useSelector } from 'react-redux';
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/" />} />
            <Route path="passwordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/passwordreset/:id/:token" element={<ResetPassword />} />
            <Route path="changepassword" element={!access_token ? <LoginReg /> : <ChangePassword />} />
            <Route path='dashboard' element={access_token ? <Dashboard /> : <LoginReg />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
