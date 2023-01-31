import "./Serviec.css"

import brand from "../../images/brand.png"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Serviec = ({serv}) => {
    const [t , i18n] = useTranslation()
    return ( 
        <div className="servMMainContainer">
                <img src={brand} alt="food_type"/>
            <h2>
            {t(serv.name)}
            </h2>
            <h5>
                <button> 
                    <Link to="product"  state={{type:serv.name}}>
                      {t(serv.hint)}
                    </Link>
                </button>
            </h5>
        </div>
     );
}
 
export default Serviec;