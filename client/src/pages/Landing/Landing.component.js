import React from 'react';
import { Login } from '../../components/Login';
import { useAuth0 } from "../../react-auth0-spa";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

export const Landing = (props) => {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            {isAuthenticated &&
                (<Redirect to="/dashboard" />)
            }

        <Container id="landing-page-body" style={{
        }}>

            <Row id="landing-welcome-text">
                <Col sm="12" md={{ size: 8, offset: 2}}>
                    <h3> Welcome to </h3>
                    <h2> MobileTTRPG </h2>

                    <Login />
                </Col>
            </Row>
        </Container>
        </div>
    )
}