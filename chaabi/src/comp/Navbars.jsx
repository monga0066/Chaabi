import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          
            <h3 style={{textAlign:"centre",color:"#F021B2"}}>
            Typing Guru...
            </h3>
           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
