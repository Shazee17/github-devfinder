import React from 'react'

const DisplayUser = ({user}) => {
  return (
    <div className='user-details-container'>
        <p>{user.name}</p>
        <p>{user.followers}</p>
    </div>
  )
}

export default DisplayUser