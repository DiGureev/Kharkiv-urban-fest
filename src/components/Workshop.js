import './Workshop.css';
import workshop from '../img/workshop.png';
import { useContext } from 'react';
import { AppContext } from '../App.js';

const Workshop = (props) => {
    const {setPopup} = useContext(AppContext)

    return (
        <div className='workshop'id='workshop'>
            <div className='workshop-content'>
                <div className='workshop-header'><h2>workshop</h2></div>
                <div>
                    <p>City Play is an effective activity that allows people to use the materials they have to plan, create and share ideas for their community’s infrastructure and urban problems</p>
                    <p><b>Date:</b> November 22 at 15:00 – 18:00<br/>
                    <b>Location:</b> Klochkivs’ka Str. 191, 2nd floor<br/>
                    <b>Tools:</b> just bring yourself</p>
                    <button onClick={()=> setPopup('')}>Register me</button>
                </div>
            </div>
            <img src={workshop}/>
        </div>
    )
}

export default Workshop