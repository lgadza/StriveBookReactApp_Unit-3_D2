import { Component } from "react";
import { Card, Col, Row, Container, ListGroup } from "react-bootstrap";
import historyBooks from "../books/history.json";

class LastestRelease extends Component {
  render() {
    return (
      <Container>
        <Row xs={1} md={2} className="g-4">
          {historyBooks.map((book) => (
            <Col className="col-lg-3 my-2" key={book.asin}>
              <Card>
                <Card.Img className="bookCover" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="bookTitle">{book.title}</Card.Title>
                  {/* <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text> */}
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
