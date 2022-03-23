import React, {useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import Modal from './Modal'
import '../css/login.css'
import RegisterForm from './RegisterForm'


const Login = (props) => {
    let navigate = useNavigate()
    const user = sessionStorage.getItem('user')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')


    const [openModal, setOpenModal] = useState(false)

    const viewModal = () =>{
        setOpenModal(prevState => !prevState)
    }

    const Login = async (e) => {

        e.preventDefault()
        const options = {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }

        const res = await fetch('http://localhost:4000/api/login', options)
        const data = await res.json()

        sessionStorage.setItem('user', data.access_token)
        props.setToken(data.access_token)
        if(user && user!=='' && user!==undefined){
            navigate('/dashboard')
        }
        else{
            alert('nao nao mujer nao opina aqui')
        }
    }

    useEffect(() => {
        if(user && user!=='' && user!==undefined){
            navigate('/dashboard')
        }
    }, []);

    return (
        <div className='LoginContainer'>
            <div className='LoginLogo'></div>
            <div className='FormContainer'>
                <form>

                    <div>
                        <label >Email</label>
                        <input type='text' name='fullName' placeholder='someone@gmail.com' value={email}  onChange={(e) => {setEmail(e.target.value)}} />

                    </div>

                    <div>
                        <label >Password</label>
                        <input type='password' name='fullName' placeholder='your password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                    </div>

                    <button onClick={Login}>Login!</button>

                </form>
                <div className='RegisterContainer'>
                    <div onClick={viewModal}>...REGISTER HERE!</div>
                </div>
            </div>

            {openModal && (

                <Modal>
                    <RegisterForm setOpenModal={setOpenModal}/>
                </Modal>
            )}
        </div>
    )
}

export default Login