import React, {Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter,Routes,Route } from "react-router-dom";
import "./styles/index.css";
import NavBar from "NavFooter/Header";
import Loader from "./Components/Loader";
import Footer from "NavFooter/Footer";
import {Provider,useSelector,useDispatch} from 'react-redux';
import store from "./Store";
import { getProducts } from "./Store/Slices/products.slice";
const Products = React.lazy(()=>import("AllProducts/Products"));
const SignUp = React.lazy(()=>import("LoginSignUp/SignUp"));
const Login = React.lazy(()=>import("LoginSignUp/Login"));

const App = () =>{
  const dispatch=useDispatch();
  let products=useSelector(shop=>shop.Products)
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const product =[
    {
        "id": 16346,
        "quantity": 2,
        "createdAt": "2023-04-16T15:54:35.681Z",
        "updatedAt": "2023-04-16T15:54:35.681Z",
        "productId": 1,
        "userId": 1,
        "product": {
            "id": 1,
            "title": "Samsung Galaxy S22",
            "description": "Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version. 8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22*",
            "price": "850.00",
            "brand": "Samsung",
            "createdAt": "2023-02-22T17:46:50.541Z",
            "updatedAt": "2023-02-22T17:46:50.541Z",
            "categoryId": 3,
            "images": [
                {
                    "id": 1,
                    "url": "https://e-commerce-api-v2.academlo.tech/uploads/c.jpg"
                },
                {
                    "id": 2,
                    "url": "https://e-commerce-api-v2.academlo.tech/uploads/b.jpg"
                },
                {
                    "id": 3,
                    "url": "https://e-commerce-api-v2.academlo.tech/uploads/a.jpg"
                }
            ]
        }
    },
    {
        "id": 16345,
        "quantity": 2,
        "createdAt": "2023-04-16T15:54:09.125Z",
        "updatedAt": "2023-04-16T15:54:09.125Z",
        "productId": 2,
        "userId": 1,
        "product": {
            "id": 2,
            "title": "Samsung 32 inches QLED 4K Smart TV",
            "description": "4K UHD Processor: a powerful processor optimizes your tv’ s performance with 4K picture quality Inputs & Outputs: 3 HDMI ports, 1 Ethernet port, 2 USB Ports (v 2.0), 1 Digital Audio Output (Optical), 1 Composite Input (AV), Dimensions with Stand | without Stand Weight: 11.7 lb. 4K UHD: see what you’ve been missing on a crisp, clear picture that’s 4x the resolution of Full HD Smart TV with Universal Guide: our simple on-screen Guide is an easy way to find streaming content and live TV showsHD: see shades of color that reveal more detail than HDTV can deliver",
            "price": "500.00",
            "brand": "Samsung",
            "createdAt": "2023-02-22T17:49:51.643Z",
            "updatedAt": "2023-02-22T17:49:51.643Z",
            "categoryId": 2,
            "images": [
                {
                    "id": 4,
                    "url": "https://e-commerce-api-v2.academlo.tech/uploads/d.jpg"
                },
                {
                    "id": 5,
                    "url": "https://e-commerce-api-v2.academlo.tech/uploads/e.jpg"
                },
                {
                    "id": 6,
                    "url": "https://e-commerce-api-v2.academlo.tech/uploads/f.jpg"
                }
            ]
        }
    }
]

 return(
  <div className="app">
    <Routes>
      <Route element={<NavBar product={product}/>}>
        {/* Ruta inicial */}
        <Route path="/" element={
          <Suspense fallback={<Loader/>}>
            <Products allProducts={products}/>
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
  <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>
, document.getElementById("app"));
