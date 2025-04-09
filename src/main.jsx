import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PendingRequests from './pages/AdminPnlFun/PendingRequests.jsx'
import DisbursedLoans from './pages/AdminPnlFun/DisbursedLoans.jsx'
import Borrowers from './pages/AdminPnlFun/Borrowers.jsx'
import AdminDashboard from './pages/AdminPnlFun/AdminDashboard.jsx'
import Contact from './pages/Contact.jsx'
import AboutUs from './pages/AboutUs.jsx'
import UserDashboard from './UsersDashboard/UserDashboard.jsx'
import LoanReqPage from './UsersDashboard/LoanReqPage.jsx'
import UserProfile from './UsersDashboard/UserProfile.jsx'
import NewLoan from './UsersDashboard/NewLoan.jsx'
import ApprovedLoan from './pages/AdminPnlFun/ApprovedLoan.jsx'
import RejectedLoan from './pages/AdminPnlFun/RejectedLoan.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/pending" element={<PendingRequests />} />
        <Route path="/disbursed" element={<DisbursedLoans />} />
        <Route path="/borrowers" element={<Borrowers />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/loan-requests" element={<LoanReqPage />} />
        <Route path="/approved-loan" element={<ApprovedLoan />} />
        <Route path="/rejected-loan" element={<RejectedLoan />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/new-loan" element={<NewLoan />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
