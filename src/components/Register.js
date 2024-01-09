import './Register.css';
import img from '../img/popup.png';
import done from '../img/final-popup.png'
import { useContext } from 'react';
import { AppContext } from '../App.js';

const Register = (props) => {
    const {popup, setPopup, registered, setReg} = useContext(AppContext)

    const handleClick = (e) => {
        e.preventDefault()
        setReg(true)
    }

    if (registered) {
        return (
        <div className='register registered' style={{backgroundImage: `url('${done}')`, backgroundRepeat: 'no-repeat', backgroundColor:'#FAFBFD'}}>
            <div className='reg-container' style={{marginLeft: '400px', marginTop:'100px'}}>
                <div className='done' style={{width: '500px', textAlign:'center'}}>
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
                    <form>
                        <input type='text' placeholder='Full Name' />
                        <input type='email' placeholder='Email'/>
                        <button onClick={(e)=> handleClick(e)}>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
    }

    
}

export default Register