import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { requestUser } from './actions';

function User(props) {
  let user = props.user;

  const onClickSelect = () => {
    props.requestUser(props.user.id);
  }

  return ( 
    <Row className="justify-content-md-center">
      <Col lg={6}>
        <Card>
          <Card.Body>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.street}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
            <p><a href={`http://${user.website}`}>My Website</a></p>
            <Button variant='success' onClick={onClickSelect}>Select</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ requestUser }, dispatch);

export default connect(null, mapDispatchToProps)(User);