import React, {Suspense } from "react";
import ReactDOM from "react-dom";
const Products = React.lazy(()=>import("AllProducts/Products"));
const NavBar = React.lazy(()=>import("NavFooter/Header"));
const Footer = React.lazy(()=>import("NavFooter/Footer"));
import "./styles/index.css";
import useProducts from "./Hooks/useProducts"
import { HashRouter } from "react-router-dom";

const App = () =>{
  const {allProducts} = useProducts()
 return(
  <div className="app">
    <Suspense fallback={"Cargando..."}>
      <NavBar/>
        <Products allProducts={allProducts}/>
        <Footer/>
    </Suspense>
  </div>
)};
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById("app"));
