import City from "../../components/city/city"
import TopLanding from "../../components/topLanding/TopLanding"
import "./Landing.css"
// import json file
import data from "../../components/data/city.json"
import Serviec from "../../components/Serviec/Serviec"

// image
import WhyUs from "../../images/whyUs.jfif"
import test from "../../images/test.jfif"

// icon
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from "react-i18next"
const Landing = () => {
    const [t, i18n ] = useTranslation()
    return ( 
        <div className="LangdingpageMain">
            <TopLanding/> 
        <h1 className="cityTitle">
            {t("you can find us in: ")}
        </h1>
    <div className="cityDesignContainer">
        {data.city.map(d=>(
            <div key={d.id} >
                <City d = {d}/>
                {/* <br/><br/><br/> */}
            </div>
        ))}
    </div>
    {/* service */}
    <h1 className="cityTitle">
        {t("Explore the types of meals we offer")}
    </h1>
    <div className="serviceType">
        {data.service.map(ser=>(
            <div  key={ser.id}>
                <Serviec serv={ser}/>
            </div>
        ))}
    </div>
    <div className="whyUS">
        <div className="serectSide">
            <img src={test} alt="motivate"/>
        </div>
        <div className="leftWhyUs">
            <div className="titleWhyUS">
                <h1>{t("why us") }</h1>
                <ul className="listWhyUs">
                    <li>
                        <span className="iconContainerSpan">
                        <CheckCircleOutlineIcon/>
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, asperiores?
                        </span>
                    </li>
                    <li>

                        <span className="iconContainerSpan">
                        <CheckCircleOutlineIcon/>
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, asperiores?
                        </span>
                    </li>
                    <li>
                        <span className="iconContainerSpan">
                        <CheckCircleOutlineIcon/>
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, asperiores?
                        </span>
                    </li>
                    <li>
                        <span className="iconContainerSpan">
                        <CheckCircleOutlineIcon/>
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, asperiores?
                        </span>
                    </li>
                </ul>
            </div>
        </div>
            
        <div className="rightWhyUs">
            <img src={WhyUs} alt="motivate_image" width="100%"/>
        </div>
    </div>
        </div>
     );
}
 
export default Landing;