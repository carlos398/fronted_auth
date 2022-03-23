import React from 'react'
import '../css/registerForm.css'


const RegisterForm = (props) => {

    const closeModal = () => {
        props.setOpenModal(false)
    }

    return (
        <form className='RegisterForm'>
            <h4>Create acount</h4>

            <div>
                <label>Full Name</label>
                <input type='text' name='fullname' placeholder='Juan quintana de las casas' />
            </div>

            <div>
                <label>Email</label>
                <input type='email' name='email' placeholder='juana@gmail.com' />
            </div>

            <div>
                <label>Username</label>
                <input type='text' name='username' placeholder='juanquinta123' />
            </div>

            <div>
                <label>Password</label>
                <input type='password' name='password' placeholder='Your password' />
            </div>

            <div>
                <label>Phone number</label>
                <input type='number' name='phone' placeholder='+1 43221233' />
            </div>

            <button type='submit' className='RegisterBtn'>Register</button>

            <button className='CloseRegister' type='button' onClick={closeModal}>X</button>
        </form>
    )
}

export default RegisterForm