import React, { useEffect} from 'react'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = (props) => {

  let navigate = useNavigate()

  const logedUser = sessionStorage.getItem('user')

  const LogOut = () => {
    console.log(props.token)
  }

  return (
    <div className='DashContainer'>
        <section>
            <button onClick={LogOut}>LogOut</button>
        </section>
        <section>

        </section>
    </div>
  )
}

export default Dashboard