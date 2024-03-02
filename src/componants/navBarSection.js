import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

export const NavBarSection = ({filterBySearch}) => {

  const [input,setInput]=useState('');
  return (
    <Row>
      
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
            <div className='brand-color'>مطعم عربي</div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                
            </Nav>
            <Form className="d-flex">
              
                <Form.Control
                type="text"
                placeholder="ابحث هنا"
                className="me-2"
                onInput={(e)=>setInput(e.target.value)}
                value={input}
                />
                <button onClick={(e)=>{e.preventDefault(); filterBySearch(input); setInput(''); }} className="btn-search mx-2">بحث</button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      
    </Row>
  )
}


