
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header = (props) => {
    return (
        <header>
                            <Navbar bg="light" >
                    <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="images/logolucrecia.svg"
                        width="30"
                        height="30"
                        color="white"
                        className="d-inline-block align-top"
                        />{' '}
                        Lucrecia Records
                    </Navbar.Brand>
                    </Container>
                </Navbar>
                
        </header>
    );
}

export default Header;