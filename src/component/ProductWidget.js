import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { SetProducts } from '../redux/actions/ProductsAction';
import { Row , Col , Card} from 'react-bootstrap';
import '../container/ProductWidget.css';
import {Link} from 'react-router-dom'




const ProductWidget = () => {
    const dispatch = useDispatch();
    const FetchProduct = async () => {
        const response = await axios.get("https://aveosoft-react-assignment.herokuapp.com/products").catch((err) => { console.log("Error"); })
        dispatch(SetProducts(response.data))
    }

    const Products = useSelector((state) => {
        return state.allProducts
    })

    useEffect(() => {
        FetchProduct()
    }, [])



    return (
        <>
            <Row xs={1} md={3} className="g-2">
                {Products.length > 0 ? Products.map((item, index) => {
                    return (
                        <Col key={index}>
                            <Link to = {`/Product/${item.id}`}>
                            <Card className="col-xs-1 center-block" >
                                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22223%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20223%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c46f46e79%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c46f46e79%22%3E%3Crect%20width%3D%22223%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2284.3671875%22%20y%3D%2286%22%3E223x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.model}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                    )
                }) : 'Product list is empty'}
            </Row>
        </>
    )
}

export default ProductWidget
