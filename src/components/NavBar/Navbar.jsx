import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./Navbar.css"
// import image 
import brand from "../../images/brand.png"


//  icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login'; 
import LogoutIcon from '@mui/icons-material/Logout';
// language
const NavbarProject = ({DLmode} ) => {
    const [mode , setMode ] = useState(false)
    const [isOpen, SetOpen] = useState(false)
    const [t , i18n ] = useTranslation()

    // logout function
    const logout = ()=>{
       localStorage.setItem('role','"unlogin"')
       setlog('"unlogin"')
            }    
            
    const [logs , setlog]= useState(()=>{
    const log = localStorage.getItem('role')
    
    return log || ""
    })
    useEffect(()=>{
        console.log(
            localStorage.getItem('role')
        );
    },[localStorage.getItem('role')])
    return ( 
        <div className="navBarMainStyle">
            {logs}
            <nav className={`${isOpen && "open"}`}>
                {  logs === '"unlogin"'  &&
                <div className="brand">
                    <img src={brand} alt="brand_image" width="100%"/>
                    <span>
                        <Link to ="Login" title={t("login")}> <LoginIcon/> </Link>
                    </span>
                </div>}

                { logs == '"login"' &&
                    <div className="brand_logout">
                        <p><ShoppingCartIcon/> </p>
                        <button onClick={logout} title={t("logout")}><LogoutIcon/></button>
                        
                    </div>
                }
                <div className="tabs">
                    <ul>
                        <li><Link to="/">{t("Home")}</Link></li>
                        <li><Link to="product" state={{type:"all"}}>{t("Product")}</Link></li>
                        <li><Link to="contact">{t("Contact Us")}</Link></li>
                        <li><Link to="privacy">{t("Privacy policy")}</Link></li>
                    </ul>
                </div>
                <div className="langMode">
                    { !mode &&
                        <button className="mode"
                        onClick ={()=>{
                            setMode(!mode)
                            DLmode(mode)
                        }}
                        > <DarkModeIcon style={{color:"gray"}}/> </button>}
                    { mode &&
                        <button className="mode"
                        onClick ={()=>{
                            setMode(!mode)
                            DLmode(mode)
                        }}
                        > <WbSunnyIcon style={{color:"gold"}}/> </button>}
                    {i18n.language === "en"  &&
                    <button className="lang"
                    onClick={()=>{
                        i18n.changeLanguage("ar")
                    }}
                    > english</button>
                    }
                    
                    {i18n.language === "ar"  &&
                    <button className="lang"
                    onClick={()=>{
                        i18n.changeLanguage("en")
                    }}
                    > arabic</button>
                    }

                </div>
                <div className="openclosetap">
                  <button onClick={()=>{
                      SetOpen(!isOpen)
                      }}> 
                    <MenuIcon/>
                    
                  </button>
                </div>
            </nav>
        </div>
     );
}
 
export default NavbarProject;