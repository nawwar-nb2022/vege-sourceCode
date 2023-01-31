import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./TopLanding.css"
const TopLanding = () => {
    const [t, i18n] =useTranslation()
    return ( 
        <div className="TopLanding">
            <br/>
            <div className="bloredSection">

            <h2 className="ValueSection">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Voluptatibus et maiores itaque non odit repudiandae placeat
                 culpa illo, illum nam.</h2>
            <h4 className="Motivate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nemo!</h4>

            <div className="buttonController">
                <button> 
                    <Link to="contact">
                    {t("Contact Us")}
                    </Link>
                </button>
            </div>

            </div>
            <br/>
        </div>
     );
}
 
export default TopLanding;