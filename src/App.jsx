import React, {Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter,Routes,Route } from "react-router-dom";
import useProducts from "./Hooks/useProducts"
import "./styles/index.css";
import NavBar from "NavFooter/Header";
import Loader from "./Components/Loader";
import Footer from "NavFooter/Footer"
const Products = React.lazy(()=>import("AllProducts/Products"));
const SignUp = React.lazy(()=>import("LoginSignUp/SignUp"));
const Login = React.lazy(()=>import("LoginSignUp/Login"));

const App = () =>{
  const {allProducts} = useProducts()
 return(
  <div className="app">
    <Routes>
      <Route element={<NavBar/>}>
        {/* Ruta inicial */}
        <Route path="/" element={
          <Suspense fallback={<Loader/>}>
            <Products allProducts={allProducts}/>
          </Suspense>}/>
        {/* Ruta Login */}
        <Route path="/login" element={
          <Suspense fallback={<Loader/>}>
          <Login/>
          </Suspense>}/>
        {/* Ruta signUp */}
        <Route path="/signUp" element={
        <Suspense fallback={<Loader/>}>
          <SignUp/>
        </Suspense>}/>
        <Route path="/purchases" element={
        <h2>Hola mundo</h2>}/>
      </Route>
    </Routes>
    <Footer/>
  </div>
)};
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById("app"));
