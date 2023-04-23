import ReactDOM from "react-dom";
import React, {Suspense, useEffect } from "react";
import { HashRouter,Routes,Route } from "react-router-dom";
import {Provider,useSelector,useDispatch} from 'react-redux';
import store from "./Store";
import { getProducts } from "./Store/Slices/products.slice";
import { getCart } from "./Store/Slices/cart.slice";
import NavBar from "NavFooter/Header";
import Loader from "./Components/Loader";
import Footer from "NavFooter/Footer";
const Products = React.lazy(()=>import("AllProducts/Products"));
const ProductId = React.lazy(()=>import("Product/ProductId"));
const SignUp = React.lazy(()=>import("LoginSignUp/SignUp"));
const Login = React.lazy(()=>import("LoginSignUp/Login"));
import "./styles/index.css";

const App = () =>{
  const dispatch=useDispatch();
  let products=useSelector(shop=>shop.Products);
  let cart=useSelector(shop=>shop.Cart);
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCart())
  }, [])

 return(
  <div className="app">
    <Routes>
      <Route element={<NavBar product={cart}/>}>
        {/* Ruta inicial */}
        <Route path="/" element={
          <Suspense fallback={<Loader/>}>
            <Products allProducts={products}/>
          </Suspense>}/>
          {/* Producto */}
          <Route path="/product/:id" element={
            <Suspense fallback={<Loader/>}>
            <ProductId/>
          </Suspense>
          }/>
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
  <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>
, document.getElementById("app"));
