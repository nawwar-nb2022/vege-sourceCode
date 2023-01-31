import "./product.css"

import ProductCard from "../../components/productCard/productCard"

// import data

import  data from "../../components/data/city.json"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"

const ProductPage = () => { 
    const [bg , setbg] =useState()
    // props from router link 
    const location = useLocation()
    const type = location.state.type;
    const [filterState , setFilterState] = useState(type);
    const [showdata  , setShowdata] = useState(data.product)
    // function
    const bgFun = val=>{
        setbg(val)
    }
    // filter
    useEffect(()=>{
    if(filterState == "all" || filterState == null){
        setShowdata(data.product)
    }else {  
        setShowdata(
            data.product.filter(
                (item)=> item.type === filterState
            )
       )
    }}
,[filterState])

const searchFun =(e)=>{
    const value = e.target.value.toLowerCase();
    setShowdata(data.product.filter(item=> item.name.toLocaleLowerCase().includes(value)))
}

    return ( 
        <div className= "productCard_main">
            <div className="showdata" >
               
            { data.service.map((serv,rowindex)=>{
                return(
                    <nav key={rowindex}>
                            <li className="datatype"  >
                                <button onClick={()=>setFilterState(serv.name)}>
                                    {serv.name}
                                </button>
                            {/* {console.log(filterState===serv.name)} */}
                            </li> 
                            
                    </nav>

                )
            })

            }
                            <li className="datatype">
                                <button onClick={()=>setFilterState('all')}> see all </button>
                            </li>
                            <li className="datatype">
                                <input type="text" className="search" placeholder="search ..."
                                onChange={searchFun}/>   
                            </li>
            </div>

            <div className="productCard">
                {console.log(showdata)}
            
            { showdata.map( (pro)=>{
                return (
                    <div key={pro.id}> 
                 <ProductCard product={pro} bgMode={bgFun}/> 
                    
                </div> 
                )
            })}
            
            </div>
            
        </div>
     );
    }
    
    export default ProductPage;