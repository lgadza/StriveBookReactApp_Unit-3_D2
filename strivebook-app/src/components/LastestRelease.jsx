import { Component } from "react";
import { Card, Col, Row, Container, ListGroup } from "react-bootstrap";
import historyBooks from "../books/history.json";

class LastestRelease extends Component {
  render() {
    return (
      <Container>
        <Row className="g-4">
          {historyBooks.slice(0, 4).map((book) => (
            <Col
              className="col-lg-4 col-xl-3 col-md-4 col-sm-6  col-xs-12 my-2"
              key={book.asin}
            >
              <Card>
                <Card.Img className="bookCover" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="bookTitle">{book.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price: ${book.price}</ListGroup.Item>
                  <ListGroup.Item>Category: {book.category}</ListGroup.Item>
                  <ListGroup.Item>Asin ({book.asin})</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default LastestRelease;
