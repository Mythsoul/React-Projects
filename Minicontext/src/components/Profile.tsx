import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
const User = useContext(UserContext);  
    return (
    <div>Profile Username : {User}</div>
  )
}

export default Profile