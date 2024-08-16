import React from "react";
import UserContext from "./UserContext";
    
function UserProfile(userContext) {
    
  return (
    <UserContext.Provider >
    <div>
    <h2>{userContext.name}</h2>
    <p>Age: {userContext.age}</p>
    <p>Bio: {userContext.bio}</p>
  </div>

  </UserContext.Provider>


  )
}

export default UserProfile ; 