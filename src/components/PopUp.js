import './PopUp.css';
import img from '../img/popup.png';
import done from '../img/final-popup.png'
import { useContext, useState } from 'react';
import { AppContext } from '../App.js';

const PopUp = (props) => {
    const {popup, setPopup, registered, setReg} = useContext(AppContext)
    const [msg, setMsg] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log(e.target.name)
        // setReg(true)
    }

    if (registered) {
        return (
        <div className='popup registered' style={{display: popup, backgroundImage: `url('${done}')`, backgroundRepeat: 'no-repeat'}}>
            <div className='close' onClick={()=> setPopup('none')}>Close X</div>
            <div className='popup-container' style={{marginLeft: '400px', marginTop:'100px'}}>
                <div className='done' style={{width: '500px', textAlign:'center'}}>
                    <h2>You have been registered!</h2>
                    <p>We'll see you at the festival</p>
                </div>
            </div>
        </div>
        )
    } else {
        return (
        <div className='popup' style={{display: popup}}>
            <div className='close' onClick={()=> setPopup('none')}>Close X</div>
            <div className='popup-container'>
                <img src={img}/>
                <div className='reg-form'>
                    <h2>Register</h2>
                    <form onSubmit={(e)=> handleClick(e)}>
                        <input type='text' placeholder='Full Name' name="name"/>
                        <input type='email' placeholder='Email' name="email"/>
                        <button>Continue</button>
                        <p>{msg}</p>
                    </form>
                </div>
            </div>
        </div>
    )
    }

    
}

export default PopUp