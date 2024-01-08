import './FirstScreen.css';
import Carousel from './Carousel.js';
import { useContext } from 'react';
import { AppContext } from '../App.js';

const FirstScreen = (props) => {
    const {setPopup} = useContext(AppContext)

    return (
        <div className='first-screen'>
            <div className='content'>
            <p>22-23 November | Kharkiv, Ukraine</p>
            <h1>Kharkiv urban Fest</h1>
            <button className='first-screen-btn' onClick={()=> setPopup('')}>REGISTER</button>
            </div>
            <div className='div-carousel'>
            <Carousel/>
            </div>
        </div>
    )
}

export default FirstScreen