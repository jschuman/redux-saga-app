import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { requestHelloWorld, requestUsers } from './actions';

import User from './User';


class Home extends React.Component {
  componentDidMount() {
    this.props.requestHelloWorld();
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
            : <Button variant="primary" onClick={this.props.requestUsers}>Get Users</Button>}
        </Container>
      </div>  
    );
  }
}

const mapStatetoProps = state => ({ helloWorld: state.helloWorld, users: state.getUsers.users });

const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestHelloWorld, requestUsers }, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
