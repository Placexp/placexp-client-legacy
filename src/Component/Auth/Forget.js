import React from 'react'
import './forgot.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Forgot() {
    return (
        <Container id="forgot">
            <Row>
                <Col>
                <form className="forgot_form">
                <h1>Reset Password</h1>
                <p>Enter your Vit email to reset your password?</p>
                <input type="email" placeholder="Enter your email" />
                <button>SUBMIT</button>
            </form>
            
                </Col>
            </Row>
            
        </Container>
    )
}

export default Forgot