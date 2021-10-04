import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { selectedCategory } from '../redux/actions/ProductsAction'
import './CategoryDropDown.css';



const CategoryDropDown = () => {
    const [category, setCategory] = useState([])
    const dispatch = useDispatch();
    const FetchProduct = async () => {
        const Response = await axios.get("https://aveosoft-react-assignment.herokuapp.com/categories").catch((err) => { console.log("Error"); })
        setCategory(Response.data)
    }
    useEffect(() => {
        FetchProduct();
    }, [])

    const handleChange = (e) => {
        dispatch(selectedCategory(e.target.value))
    }

    return (
        <>
            <select className="select_drop" onChange={(e) => handleChange(e)}>
                <option value={"selected"}>Select Catagory</option>
                {
                    category.map(({ id, name }) => {
                        return (<option key={id} value={id} >{name}</option>)
                    })
                }
            </select>
        </>
    )
}

// export default CategoryDropDown;
export default CategoryDropDown
