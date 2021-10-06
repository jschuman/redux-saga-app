import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { requestUser } from './actions';

function User(props) {
  const dispatch = useDispatch();
  let user = props.user;

  const onClickSelect = () => {
    dispatch(requestUser(props.user.id));
  }

  const onClickDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${props.user.name}?`)) {
      console.log('delete the user');
    } else {
      console.log('DON\'T delete the user');
    }
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
            <p><Button variant='success' onClick={onClickSelect}>Select</Button></p>
            <p><Button variant='danger' onClick={onClickDelete}>Delete</Button></p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default connect(null, null)(User);