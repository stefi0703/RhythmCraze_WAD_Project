import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const iconStyle = {
        color: 'white',
        fontSize: '24px',
        margin: '0 10px',
    };

    return (
        <div className="bg-dark text-light py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
