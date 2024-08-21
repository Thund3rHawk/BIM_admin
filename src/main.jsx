import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./auth/Signin.jsx";
import Layout from "./layout/Layout.jsx";
import ForgotPassword from "./auth/ForgotPassword.jsx";
import PasswordLink from "./auth/PasswordLink.jsx";
import Overview from "./pages/Overview.jsx";
import CourseManagement from "./pages/CourseManagement.jsx";
import Settings from "./pages/Settings.jsx";
import ChangePassword from "./settings/ChangePassword.jsx";
import AdminList from "./settings/AdminList.jsx";
import CreateAdmin from "./settings/CreateAdmin.jsx";
import User from "./pages/User.jsx";
import CreateUser from "./user/CreateUser.jsx";
import Blogs from "./pages/Blogs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Signin />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/passwordLink" element={<PasswordLink />} />
      <Route path="/overview" element={<Overview />} />
      {/* <Route path="/user" element={<User />} /> */}
      <Route path="/blog" element={<Blogs />} />
      <Route path="/user/createUser" element={<CreateUser />} />
      <Route path="/courseManagement" element={<CourseManagement />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/changePassword" element={<ChangePassword />} />
      <Route path="/settings/adminList" element={<AdminList />} />
      <Route path="/settings/adminList/createAdmin" element={<CreateAdmin />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
