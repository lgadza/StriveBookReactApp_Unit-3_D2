import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron className="jumbotron">
    <div className="darken-jumbo"></div>
    <h1>Best Personal Growth Books </h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button bsStyle="primary">View top 5</Button>
    </p>
  </Jumbotron>
);
export default Welcome;
