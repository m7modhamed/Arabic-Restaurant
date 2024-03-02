import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Fade} from 'react-reveal';
const ItemList = ({data}) => {
  return (
    <Row>
        {
            data.length > 0 ? (
                data.map( (item,index)=>{
                    return (
                    <Fade left>
                        <Col sm='12' key={index} className='mb-3'>
                            <Card className='d-flex flex-row' style={{backgroundColor: '#F8F8F8' , padding:'10px'}}>
                                <Card.Img className='img-item' variant="top" src={item.imgurl} />
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-between'>
                                        <div className='item-title'>{item.title}</div>
                                        <div className='item-price'>{item.price} $</div>
                                    </Card.Title>
                                    <Card.Text className='py-2'>
                                    <div className='item-description'>{item.description}</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Fade>
                    );
                } ) 
            ) : <h2 className='test-center'>لا يوجد وجبات حاليا</h2>
        }

        
    </Row>
  )
}

export default ItemList
