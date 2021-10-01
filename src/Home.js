import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestHelloWorld, requestUsers } from './actions';

import User from './User';


class Home extends React.Component {
  componentDidMount() {
    this.props.requestHelloWorld();
    this.props.requestUsers();
  }

  render() {
    return ( 
      <div>
        <h1>
          {this.props.helloWorld}
        </h1>
        <div>
          {this.props.users && this.props.users.map((user) => (
            <User
            user={user}
          />
        ))}
      </div>
    </div>  
    );
  }
}

const mapStatetoProps = state => ({ helloWorld: state.helloWorld, users: state.getUsers.users });

const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestHelloWorld, requestUsers }, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
