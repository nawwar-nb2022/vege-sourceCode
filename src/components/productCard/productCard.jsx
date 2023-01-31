import "./productCard.css"

import brand from "../../images/brand.png"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
const ProductCard = ({product , bgMode}) => {
    const nav = useNavigate()
    const CanOrder = ()=>{
        if (localStorage.getItem("role") == "login"){
            window.alert("hhh")
        }
        else{
            nav('/Login')
        }
    }

    const [t, i18n] = useTranslation() 
    const [Popup , setPopUp] = useState()
    return ( 
        <div className="mainProductContainer">
            
        <div className="ProductCardChild">
            <img src={product.image} />
            <div className="detailCard">
                <p>{t(product.name)}</p>
                <p className="price">{product.price}</p>
            {/* card element show with out hover  */}
            </div>

            <h5>
                {/* element show on hover */}
                <p onClick={
                    ()=>{
                        setPopUp(!Popup)
                       if (Popup){
                           bgMode(false)
                       }else{
                           bgMode(true)
                       }
                    }
                }>
                {t("see details")} 
                </p>
            <div className="buttoncontainer">
                <button className="sendOrder" onClick={CanOrder}>
                    {t("order")}
                </button>
            </div>
            {/* end details  */}
            </h5>
        </div>
            { Popup &&
            <div className="popUpSection">
               
                            <p>
                            {t(product.name)}                        
                            </p>

                            <div className="displayContain">
                                
                            <div className="imageSide">
                                <img src={product.image} />    
                            </div> 


                            <div className="itemSide">
                                <p>
                                {/* {product.desc} */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, explicabo ullam! Magnam sunt deserunt ratione non exercitationem accusantium ullam eos!
                                </p>
                                  
                            </div>
                            
                            </div>
                                <p className="detailCard">
                                    <span className="orderProduct" onClick={CanOrder}>{t("order")}</span>                         
                                    <span className="price">{product.price}</span>                             
                                </p>   
                            <span className="exitButton">
                                <button 
                                onClick={
                                    ()=>{
                                        setPopUp(!Popup)
                                    }}
                                >
                                    X
                                </button>
                            </span>
                    </div>


            }
        </div>
     );
}
 
export default ProductCard;