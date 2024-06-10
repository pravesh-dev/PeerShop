import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const loginStatus = useSelector(store => store.user.loginStatus);
    const navigate = useNavigate();

    useEffect(() => {
      if(!loginStatus){
        navigate('/login');
      }
    }, [loginStatus, navigate])
    
  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
