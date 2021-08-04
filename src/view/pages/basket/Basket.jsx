import{useEffect, useState} from 'react'
import { ImgMediaCard } from '../../components/card/Card'


function Basket(props) {
    const [saves, setSaves]=useState([])
    useEffect(()=>{
        setSaves(JSON.parse(localStorage.getItem('shoose')) || [])
    },[])
    
    return (
        <div>
            {
                props.data.filter((item)=>saves.includes(item.id)).map((item)=>(
                <ImgMediaCard key={item.id} name={item.name} price={item.price} image={item.image} id={item.id}/>
                ))
                
            }
        </div>
        
    );
}

export default Basket;
