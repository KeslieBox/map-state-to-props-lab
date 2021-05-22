import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users! {this.props.users.length}
          {this.props.users.map(u => <li>{u.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = ({users}) => {
  return {users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
