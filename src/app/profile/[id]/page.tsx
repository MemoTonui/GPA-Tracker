import React from 'react'

export default function UserProfile({params}:any) {
  return (
    <div>UserProfile
        <p>{params.id}</p>
    </div>
  )
}
