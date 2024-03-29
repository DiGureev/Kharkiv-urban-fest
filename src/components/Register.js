import './Register.css';
import img from '../img/popup.png';
import done from '../img/final-popup.png'
import { useContext, useState } from 'react';
import { AppContext } from '../App.js';

const Register = (props) => {
    const {popup, setPopup, registered, setReg} = useContext(AppContext)
    const [msg, setMsg] = useState('')

    const handleClick = (e) => {
        setMsg('')
        e.preventDefault()
        if (e.target.name.value === ''){
            setMsg('Please, enter your name')
        } else if (e.target.email.value === '' || e.target.email.value.includes('@') === false) {
            setMsg('Please, enter valid email address')
        } else {
            setReg(true)
        }
    }

    if (registered) {
        return (
        <div className='register registered -reg' style={{backgroundImage: `url('${done}')`, backgroundRepeat: 'no-repeat', backgroundColor:'#FAFBFD'}}>
            <div className='reg-container reg-container-reg' style={{marginLeft: '400px', marginTop:'100px'}}>
                <div className='done done-reg' style={{width: '500px', textAlign:'center'}}>
                    <h2>You have been registered!</h2>
                    <p>We'll see you at the festival</p>
                </div>
            </div>
        </div>
        )
    } else {
        return (
        <div className='register'>
            <div className='reg-container'>
                <img src={img}/>
                <div className='reg-form'>
                    <h2>Register</h2>
                    <form onSubmit={(e)=> handleClick(e)}>
                        <input type='text' placeholder='Full Name' name="name"/>
                        <input type='email' placeholder='Email' name="email"/>
                        <button>Continue</button>
                        <p className='msg'>{msg}</p>
                    </form>
                </div>
            </div>
        </div>
    )
    }

    
}

export default Register