import React from "react";
import UserContext from "./UserContext";
    
function UserProfile(props) {
  return (
    <UserContext.Provider >
    <div>
    <h2>{props.name}</h2>
    <p>Age: {props.age}</p>
    <p>Bio: {props.bio}</p>
  </div>

  </UserContext.Provider>


  )
}

export default UserProfile ; 