import React, {Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter,Routes,Route } from "react-router-dom";
import useProducts from "./Hooks/useProducts"
import "./styles/index.css";
import NavBar from "NavFooter/Header";
const Footer = React.lazy(()=>import("NavFooter/Footer"));
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
          <Suspense fallback={"Cargando..."}>
            <Products allProducts={allProducts}/>
          </Suspense>}/>
        {/* Ruta Login */}
        <Route path="/login" element={
          <Suspense fallback={"Cargando..."}>
          <Login/>
          </Suspense>}/>
        {/* Ruta signUp */}
        <Route path="/signUp" element={
        <Suspense fallback={"Cargando..."}>
          <SignUp/>
        </Suspense>}/>
        <Route path="/purchases" element={
        <h2>Hola mundo</h2>}/>
      </Route>
    </Routes>
  </div>
)};
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById("app"));
