import React,{useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let{id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/rlagywns6069/hnm-react-router/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'><img src={product?.img} alt=""/></Col>
        <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div className='product-choice'>{product&&product.choice === true?"Conscious choice":""}</div>
        <div className='drop-down'>
        <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        사이즈 선택
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="d-grid gap-2"> <Button variant="dark" size="lg">Dark</Button></div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
