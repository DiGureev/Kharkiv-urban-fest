import './PopUp.css';
import img from '../img/popup.png';
import done from '../img/final-popup.png'
import { useContext } from 'react';
import App, { AppContext } from '../App.js';

const PopUp = (props) => {
    const {popup, setPopup, registered, setReg} = useContext(AppContext)

    const handleClick = (e) => {
        e.preventDefault()
        setReg(true)
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

export default PopUp