

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQs";
import About from "./Components/About";
import Services from "./Components/Services";
import BookInstallation from "./Components/Book";
import QuoteForm from "./Components/QuoteForm";
import SolarGallery from "./Components/SolarGallery";
import ProjectList from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import TestimonialForm from "./Components/TestimonialForm";
import AuthPage from "./Components/AuthPage";
import AdminHome from "./Components/AdminPenal/AdminHome";
import AdminNavbar from "./Components/AdminPenal/AdminNavbar";
import Customer from "./Components/AdminPenal/Customer";
import AddCustomerForm from "./Components/AdminPenal/AddNewCustomer";
import Employee from "./Components/AdminPenal/Employee";
import DailyReportForm from "./Components/AdminPenal/DailyReportForm";
import ReportList from "./Components/AdminPenal/ReportList";
import GetUsers from "./Components/AdminPenal/GetUsers";
import AddNewEmployee from "./Components/AdminPenal/AddNewEmployee";
import ViewContacts from "./Components/AdminPenal/ViewContacts";
import Feedback from "./Components/AdminPenal/ViewFeedback";
import ProjectAdmin from "./Components/AdminPenal/ProjectAdmin";
import EmployeeAttendance from "./Components/AdminPenal/EmployeeAttendance";
import AllEmployeeDetails from "./Components/AdminPenal/AllEmployeeDetails";
import AccountComponent from "./Components/AdminPenal/AccountComponent";

// faltu kam ................................


// Wrapper component to access location
function LayoutWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<BookInstallation />} />
        <Route path="/quote" element={<QuoteForm />} />
        {/* <Route path="/gallery" element={<SolarGallery />} /> */}
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/feedback" element={<TestimonialForm />} />
        <Route path="/signup" element={<AuthPage />} />

        {/* Admin routes */}
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/admin/customers" element={<Customer />} />
        <Route path="/admin/add-new-customer" element={<AddCustomerForm />} />
        <Route path="/admin/employees" element={<Employee />} />
        <Route path="/admin/daily-report" element={<DailyReportForm />} />
        <Route path="/admin/reports/:employeeId" element={<ReportList />} />
        <Route path="/admin/users" element={<GetUsers />} />
        <Route path="/admin/add-new-employee" element={<AddNewEmployee />} />
        <Route path="/admin/view-contacts" element={<ViewContacts/>} />
        <Route path="/admin/feedback" element={<Feedback/>} />
        <Route path="/admin/projects" element={<ProjectAdmin/>} />
        <Route path="/admin/employee-attendance" element={<EmployeeAttendance />} />
        <Route path="/admin/all-employee-details" element={<AllEmployeeDetails />} />
        <Route path="/admin/account" element={<AccountComponent />} />
      </Routes>

      {/* Show Footer only if not admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;
