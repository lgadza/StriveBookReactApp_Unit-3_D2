import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MyFooter extends Component {
  render() {
    return (
      <Container
        className="footerNav d-flex align-items-center justify-content-center"
        bg="dark"
      >
        <Row>
          <Col>@LouisStriveBook {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    );
  }
}
export default MyFooter;
