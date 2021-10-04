import {React, useEffect, useState} from 'react'
import axios from 'axios';
import {useSelector , useDispatch} from 'react-redux'


export const ProductApi = () => {
const dispatch = useDispatch();
const [product, setProduct] = useState(null)
const FetchProduct = async ()=>{
    const response = await axios.get("https://aveosoft-react-assignment.herokuapp.com/products").catch((err)=>{console.log("Error");})
    // console.log('Response.data', Response.data)
    setProduct(response.data)
    
}
useEffect(() => {
    FetchProduct();   
}, [product])
   return (
        <div>        
          
        </div>
    )
}

