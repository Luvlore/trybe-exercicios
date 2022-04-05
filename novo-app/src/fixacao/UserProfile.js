import React, { Component } from "react";
import Image from "./Image";

class UserProfile extends Component {
  render() {
    const {name, email, avatar} = this.props.user

    return (
      <>
        <p> {name}</p>
        <p> {email}</p>
        <Image source={avatar} alternativeText='User avatar' />
      </>
    )
  }
}

export default UserProfile;
