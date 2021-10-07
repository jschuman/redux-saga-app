import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { requestHelloWorld, requestUsers, clearUsers, setButtonType } from './actions';

import User from './User';


class Home extends React.Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }

  onChangeButtonStyle(evt) {
    this.props.setButtonType(evt.target.value);
  }

  onClickClearUsers() {
    this.props.clearUsers();
  }

  renderUserDetails() {
    return (
      <div>
        <p>
          <Button onClick={this.onClickClearUsers.bind(this)}>Clear Users</Button>
        </p>
        { this.props.users.map((user) => (
          <p>
            <User user={user} key={user.id} />
          </p>
        )) }
      </div>
    )
  }

  render() {

    return ( 
      <div>
        <h1>
          {this.props.helloWorld}
        </h1>
        {this.props.user ? 
          <h3>
            Currently Selected User is: {this.props.user.name}
          </h3>
          :
          ""
        }
        <Container>
          { (this.props.users && this.props.users.length > 0) ? this.renderUserDetails()
            : 
              <Row className="justify-content-md-center">
                <Col lg={2}>
                  <Form>
                      <p>
                        <Button variant={this.props.buttonType} onClick={this.props.requestUsers}>Get Users</Button>
                      </p>
                      <Form.Select defaultValue={this.props.buttonType} onChange={this.onChangeButtonStyle.bind(this)} >
                        {["primary", "success", "warning", "danger", "info"].map(option => (
                            <option key={option} value={option}>Option {option}</option>
                        ))}
                      </Form.Select>
                  </Form>
                </Col>
              </Row>
          }
        </Container>
      </div>  
    );
  }
}

const mapStatetoProps = state => (
  { 
    helloWorld: state.helloWorld, 
    users: state.users.all, 
    buttonType: state.buttonType,
    user: state.users.user 
  }
);

const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestHelloWorld, requestUsers, clearUsers, setButtonType }, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
