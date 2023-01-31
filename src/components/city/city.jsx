// icon
import RoomIcon from '@mui/icons-material/Room';
import { useTranslation } from 'react-i18next';

import "./city.css"
const City = ({d}) => {
    const [t , i18n] =useTranslation()
    return ( 
        <div className="cityChildContainer">
            <img src={d.image} width="100%" alt={d.name}/>
            <p>{t(d.name)}</p>
            <div className="information">
                <div> 
                    <span>
                      <RoomIcon/>
                    </span>
                    {t(d.info)}
                </div>
            </div>
        </div>
     );
}
 
export default City;