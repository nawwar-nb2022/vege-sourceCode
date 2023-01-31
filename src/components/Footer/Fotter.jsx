import { useTranslation } from "react-i18next";

const Fotter = () => {
    const [t, i18n] =useTranslation()
    return ( 
        <div style={{backgroundColor:"black"  , bottom :"0" ,"textAlign" :"center" ,color :"white", width:"100%"}}>
            {t("All rights reserved for")} <span className="ccc">Nawwar Nabhan</span>
        </div>
     );
}
 
export default Fotter;