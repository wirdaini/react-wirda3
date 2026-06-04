import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const Components = React.lazy(() => import("./pages/Components"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const FiturXYZ = React.lazy(() => import("./pages/FiturXYZ"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        
        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/fitur-xyz" element={<FiturXYZ />} />
          <Route path="/components" element={<Components />} />
          {/* PRODUCTS */}
          <Route path="/products" element={<Products />} />
          {/* DYNAMIC ROUTE */}
          <Route path="/products/:id" element={<ProductDetail />} /> 
          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}