import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
const User = useContext(UserContext);  
   if(!User)return <div>Please Login</div>
   return(
    <div>
      Hello {User}
    </div>
   )
}

export default Profile