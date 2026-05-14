import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const Register = React.lazy(() => import("./pages/Auth/Register"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/error-400" element={<Error400 />} />
        <Route path="/error-401" element={<Error401 />} />
        <Route path="/error-403" element={<Error403 />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
    </Suspense>
    
  );
}
