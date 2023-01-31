import { useTranslation } from "react-i18next";

import PersonIcon from '@mui/icons-material/Person';

import "./Login.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
    // login for login
  const navigate = useNavigate();
    const logFun = (e) =>{
        e.preventDefault()
    const pass = inputGroup.pass;
    const ConPass = inputGroup.Cpass;

    // console.log(pass , ConPass);
    if (pass.length<8){
       window.alert('your password should be more than 8 character')
    }
    else if (pass != ConPass){
        window.alert("confirm password and password is not the same")
    }
    else{
         localStorage.setItem('role','"login"')
        navigate("/")
    }
    }

    // input 
    const [inputGroup ,SetInput] =useState({
        name:"",
        email:"",
        pass :"",
        Cpass :""
    })
    const changinput =(e, )=>{
        SetInput(prev=>({...prev , [e.target.name] : e.target.value}))   
    }
    const [t, i18n] =useTranslation()
    return ( 

    <div className="main_login">
        <br/>
        <div className="Login">
            <div className="brand">
                <PersonIcon/>
            </div>
            <div className="form" onSubmit={logFun}>
                <form >
                    <div className="input_controller">
                        <label  htmlFor="FullName">{t("Name")}:</label>
                        <input required name="name" 
                        type="text"
                         id="FullName"
                         value={inputGroup.name}
                         onChange={changinput}
                         />
                    </div>
                    <div className="input_controller">
                        <label htmlFor="Email">{t("Email")}:</label>
                        <input required name="email"
                         type="email"
                          id="Email"
                          value={inputGroup.email}
                          onChange={changinput}
                          />
                    </div>
                    <div className="input_controller">
                        <label htmlFor="Pass">{t("Pass")}:</label>
                        <input required name="pass"
                         type="password"
                          id="Pass"
                          value={inputGroup.pass}
                          onChange={changinput}
                          />
                    </div>
                    <div className="input_controller">
                        <label htmlFor="CPass">{t("CPass")}:</label>
                        <input required 
                        name="Cpass" 
                        type="password" 
                        id="CPass"
                        value={inputGroup.Cpass}
                        onChange={changinput}
                        />
                    </div>
                    <button className="loginbutton" onclick={logFun}>
                        {t("login")}
                    </button>
                </form>
            </div>
        </div>

    </div>
     );
}
 
export default Login;