import { useTranslation } from "react-i18next";
import "./contact.css"
import 'animate.css'
// icon
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactPage = () => {
    const [t ,i18n] = useTranslation()
    return ( 

        <div>
            
        <div className="ContactPage">
            {/* <div className="imagePart">
                    <img src={contact} alt="Image"/>
            </div>
                     */}
            <div className="Formpart">
                <form >
                    <div className="inputGroup">
                        <label htmlFor="Fname">{t("First Name")}</label>
                        <input type="text" id="Fname"/>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="Email">{t("Email")}</label>
                        <input type="text" id="Email"/>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="Message">{t("Message")}</label>
                        <input type="text" id="Message"/>
                    </div>
                    <div className="SendButton">
                        <button>{t("Contact Us")}</button>
                    </div>
                </form>


                <div className="SocialContact">
                    <h2>{t("we are glad to contact us ")}</h2>
                    <p> Jackpot@jack.com</p>
                    <div className="social">
                        <FacebookOutlinedIcon/>
                        <InstagramIcon/>
                        <LinkedInIcon/>
                        <TwitterIcon/>
                    </div>

                </div>

                
            </div>

            </div>
            <div className="SocialContactSection">
                    <p> Jackpot@jack.com</p>
                    <div className="social">
                        <FacebookOutlinedIcon/>
                        <InstagramIcon/>
                        <LinkedInIcon/>
                        <TwitterIcon/>
                    </div>

                </div>
        </div>
     );
}
 
export default ContactPage;