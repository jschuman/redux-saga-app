import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import { requestHelloWorld, requestUsers, setDangerButton } from './actions';

import User from './User';


class Home extends React.Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }

  handleCheckboxChange(evt) {
    this.props.setDangerButton(evt.target.checked);
  }

  render() {

    return ( 
      <div>
        <h1>
          {this.props.helloWorld}
        </h1>
        <Container>
          {this.props.users ? 
            this.props.users.map((user) => (
              <User user={user} key={user.id} />
            ))
            : 
              <Form>
                <Button variant={this.props.dangerButton ? 'danger' : 'primary'} onClick={this.props.requestUsers}>Get Users</Button>
                <Form.Check type='checkbox' id='button-type' label='Danger Button?' 
                  onChange={(evt) => this.props.setDangerButton(evt.target.checked)} />
              </Form>
          }
        </Container>
      </div>  
    );
  }
}

const mapStatetoProps = state => ({ helloWorld: state.helloWorld, users: state.getUsers.users, dangerButton: state.dangerButton });

const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestHelloWorld, requestUsers, setDangerButton }, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
