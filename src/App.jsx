import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
// import MainLayout from "./layouts/MainLayout";
import RequireAuth from "./routes/RequireRole";
import PublicRoute from "./routes/PublicRoute";

import React, { lazy, Suspense, useEffect } from "react";

const Login = lazy(() => import("./Pages/Login"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Home = lazy(() => import("./Pages/Home"));
const Aboutus = lazy(() => import("./Pages/Aboutus"));
const VolunteerDetails = lazy(() => import("./Pages/VolunteerDetails"));
const Collaborate = lazy(() => import("./Pages/Collaborate"));
const MediaTalks = lazy(() => import("./Pages/MediaTalks"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogDetails = lazy(() => import("./Pages/BlogDetails"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Donate = lazy(() => import("./Pages/Donate"));
const Unauthorised = lazy(() => import("./Pages/Unauthorised"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Profile = lazy(() => import("./Pages/Profile"));
const Customer = lazy(() => import("./Pages/Customer"));
const Admin = lazy(() => import("./Pages/Admin"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const AdminMain = lazy(() => import("./Pages/AdminMain"));
const CollaborateAdmin = lazy(() => import("./Pages/CollaborateAdmin"));
const GalleryAdmin = lazy(() => import("./Pages/GalleryAdmin"));
const BlogAdmin = lazy(() => import("./Pages/BlogAdmin"));
const Test = lazy(() => import("./Pages/Test"));
const Preview = lazy(() => import("./Pages/Preview"));
const Programer = lazy(() => import("./Pages/Programer"))
// import Aboutus from "./Pages/Aboutus";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}

export default function App() {


 
 
  return (
    <BrowserRouter>
    <ScrollToTop />
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<MainLayout />}> */}
          <Route
            path="/home"
            element={
              <RequireAuth role={["admin", "user"]}>
                <Home />
              </RequireAuth>
            }
          />

          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />

           <Route
            path="/program"
            element={
              <PublicRoute>
                <Programer />
              </PublicRoute>
            }
          />

          <Route
            path="aboutus"
            element={
              <PublicRoute>
                <Aboutus />
              </PublicRoute>
            }
          />
          <Route
            path="volunteerdetails"
            element={
              <PublicRoute>
                <VolunteerDetails />
              </PublicRoute>
            }
          />
          <Route
            path="collaborate"
            element={
              <PublicRoute>
                <Collaborate />
              </PublicRoute>
            }
          />
          <Route
            path="mediatalks"
            element={
              <PublicRoute>
                <MediaTalks />
              </PublicRoute>
            }
          />
          <Route
            path="gallery"
            element={
              <PublicRoute>
                <Gallery />
              </PublicRoute>
            }
          />
          <Route
            path="blog"
            element={
              <PublicRoute>
                <Blog />
              </PublicRoute>
            }
          />
          <Route
            path="blogdetails"
            element={
              <PublicRoute>
                <BlogDetails />
              </PublicRoute>
            }
          />
          <Route
            path="contactus"
            element={
              <PublicRoute>
                <ContactUs />
              </PublicRoute>
            }
          />
          <Route
            path="donate"
            element={
              <PublicRoute>
                <Donate />
              </PublicRoute>
            }
          />

           <Route
            path="preview/:id"
            element={
              <PublicRoute>
                <Preview />
              </PublicRoute>
            }
          />


          {/* Public-only pages (login/register) */}

         <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="admin"
            element={
              <RequireAuth role={["ADMIN"]}>
                <Profile />
              </RequireAuth>
            }
          />

          {/* <Route
            path="unauthorised"
            element={
              <PublicRoute>
                <Unauthorised />
              </PublicRoute>
            }
          /> */}

          {/* Private pages */}
          {/* <Route
            path="dashboard"
            element={
              <RequireAuth role={["admin", "user"]}>
                <Dashboard />
              </RequireAuth>
            }
          /> */}
          {/* <Route
            path="customer"
            element={
              <RequireAuth role={["admin", "user"]}>
                <Customer />
              </RequireAuth>
            }
          /> */}
          {/* <Route
            path="admin"
            element={
              <RequireAuth role={[ADMIN_ROLE, USER_ROLE]}>
                <AdminMain />
              </RequireAuth>
            }
          /> */}
          {/* <Route
            path="loginpage"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          /> */}

          {/* <Route path="test" element={<Test />} /> */}


          <Route path="*" element={<NotFound />} />

          <Route
            path="collaborateadmin"
            element={
              <RequireAuth role={["admin", "user"]}>
                <CollaborateAdmin />
              </RequireAuth>
            }
          />

          <Route
            path="galleryadmin"
            element={
              <RequireAuth role={["admin", "user"]}>
                <GalleryAdmin />
              </RequireAuth>
            }
          />
          <Route
            path="blogadmin"
            element={
              <RequireAuth role={["admin", "user"]}>
                <BlogAdmin />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
