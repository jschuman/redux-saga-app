import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const user = ({ user }) => (
  <Row className="justify-content-md-center">
    <Col lg={6}>
      <Card>
        <Card.Body>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.street}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
          <a href={user.website}>My Website</a>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default user;
