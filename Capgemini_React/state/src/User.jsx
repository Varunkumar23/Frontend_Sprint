import React, { useState } from 'react'

const User = () => {
  let users = ["Varun","Tharun","Adithya","Hari"];
  let [user, changeUser] = useState(users);

  return (
    <div>
      {
        user.map((u, index) => (
            

                <h2 key={index}>{u}</h2>
        ))
      }

      
    </div>

    
  )
}

export default User