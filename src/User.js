import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

import { requestUser, requestDeleteUser, requestPatchUser, requestUpdateUser } from './actions';

function User(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  let user = props.user;

  //action handlers
  const onSubmit = (data) => 
  {
    data.id = user.id;
    
    //determine func to call
    let verb = data.verb;
    let dispatchFunc = (verb === 'Patch' ? requestPatchUser : requestUpdateUser);
    delete data.verb;

    dispatch(dispatchFunc(data));
  }

  const onClickSelect = () => {
    dispatch(requestUser(props.user.id));
  }

  const onClickDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${props.user.name}?`)) {
      dispatch(requestDeleteUser(props.user.id));
    }
  }

  return ( 
    <Row className="justify-content-md-center mb-3">
      <Col lg={6}>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <h1>{user.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                {user.email}
              </Col>
            </Row>
            <Row>
              <Col>
                {user.street}
              </Col>
            </Row>
            <Row>
              <Col md={ {span: 3, offset: 3} }>
                {user.address?.city}
              </Col>
              <Col md={3}>
                {user.address?.zipcode}
              </Col>
            </Row>
            <Row>
              <Col>
                {user.website && 
                  <a href={`http://${user.website}`}>My Website</a>
                }
              </Col>
            </Row>
            <Row>
              <Col md={ {span: 2, offset: 8} }>
                <Button variant='success' onClick={onClickSelect}>Select</Button>
              </Col>
              <Col md={2}>
                <Button variant='danger' onClick={onClickDelete}>Delete</Button>  
              </Col>
            </Row>
            <hr />
            <Row>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-2">
                  <Col md={3}>
                      <Form.Label>Name:</Form.Label>
                  </Col>
                  <Col>
                      <Form.Control defaultValue={user.name} {...register("name", {required: true })} />
                      {errors.name && <span>This field is required</span>}
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={3}>
                      <Form.Label>Email Address:</Form.Label>
                  </Col>
                  <Col>
                      <Form.Control defaultValue={user.email} {...register("email", {required: true })} />
                      {errors.email && <span>This field is required</span>}
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={3}>
                      <Form.Label>Phone:</Form.Label>
                  </Col>
                  <Col>
                      <Form.Control defaultValue={user.phone} {...register("phone")} />                    
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col style={ {span: 3, offset: 4} }>
                      <div>
                        <Form.Check name='verb' {...register("verb")} inline value='Patch' type='radio' label='Patch' defaultChecked />
                        <Form.Check name='verb' {...register("verb")} inline value='Put' type='radio' label='Put' />
                      </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button type="submit">Submit</Button>
                  </Col>  
                </Row>
                  
              </Form>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default connect(null, null)(User);