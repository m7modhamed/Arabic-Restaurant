import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Roll } from 'react-reveal'

const Catigory = ({distantCatigory,filter}) => {

  return (
    <Row className='my-2 mb-5'>
      <Col sm='12' className='d-flex justify-content-center'>
        <div>
          <Roll>
          {
            distantCatigory.length > 1 ? (
              distantCatigory.map((i)=>{
               return <button onClick={ ()=>{ filter(i) } } style={{border:"1px solid #B45B35"}} className='btn mx-2'>{i}</button>
                
              })
            ) :null
          }
        </Roll>
        </div>
      </Col>
    </Row>
  )
}

export default Catigory
