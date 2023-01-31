import NavbarProject from "./components/NavBar/Navbar";
import ContactPage from "./views/ContactPage/contact";
import Landing from "./views/landingPage/Landing";
import PrivacyPage from "./views/PrivacyPage/privacy";
import ProductPage from "./views/ProductPage/product";
import Fotter from "./components/Footer/Fotter";
// react router 

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// language 
import "./components/i18next"
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Login from "./views/login/Login";

function App() {
 
  // 
  const [t, i18n] = useTranslation();
  const DLmode = (mode)=>{
    SetLight(mode)
  }
  const [Light , SetLight] =useState(true)

  // local storage
  // const [IsLogin , setIsLogin] =useState("login")
  // useEffect( ()=>{ 
  //    localStorage.setItem('role',JSON.stringify(IsLogin))
  // },[IsLogin])
  useEffect(()=>{
console.log('hello world  ')
  },[localStorage.getItem('role')])

  return (
    <div className={Light? "light" : "dark"} style={{direction:t("dir")}}>
      {/* {console.log(i18n.language)} */}
     
<BrowserRouter>
           <NavbarProject DLmode={DLmode}/>
    <Routes>
        <Route path="/">
            <Route index   element={<Landing/> }/>
            <Route path="contact"   element={ <ContactPage/>}/>
            <Route path="privacy"   element={<PrivacyPage/> }/>
            <Route path= "product"   element={<ProductPage/>}/>
            <Route path= "Login"   element={<Login />}/>
        </Route>
    </Routes>
    {/* <Fotter/> */}
  </BrowserRouter> 

    </div>
  );
}

export default App;
