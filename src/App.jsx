import React, {Suspense } from "react";
import ReactDOM from "react-dom";
const Products = React.lazy(()=>import("AllProducts/Products"));
const NavBar = React.lazy(()=>import("NavBar/Header"));
const Botton = React.lazy(()=>import("Botton/Footer"));
import "./styles/index.css";
import useProducts from "./Hooks/useProducts"

const App = () =>{
  const {allProducts} = useProducts()
 return(
  <div className="app">
    <Suspense fallback={"Cargando..."}>
      <NavBar/>
        <Products allProducts={allProducts}/>
        <Botton/>
    </Suspense>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
