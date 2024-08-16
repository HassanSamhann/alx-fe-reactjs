import React from "react";
import UserContext from "./UserContext";
    
function UserProfile(useContext) {
    
  return (
    <UserContext.Provider >
    <div>
    <h2>{useContext.name}</h2>
    <p>Age: {useContext.age}</p>
    <p>Bio: {useContext.bio}</p>
  </div>

  </UserContext.Provider>


  )
}

export default UserProfile ; 