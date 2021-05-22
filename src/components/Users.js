import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users! {this.props.userCount}
          {this.props.users.map(u => <li>{u.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = ({users}) => {
  return {users, userCount: users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
