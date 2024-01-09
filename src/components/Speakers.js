import './Speakers.css';
import { useContext } from 'react';
import { AppContext } from '../App.js';
import cris from '../img/cris.png';
import julia from '../img/julia.png';
import harris from '../img/harris.png';
import dylan from '../img/dylan.png';
import katrina from '../img/katrina.png';
import zipeng from '../img/zipeng.png';
import adam from '../img/adam.png';
import aaron from '../img/aaron.png';

const Speakers = (props) => {
    const {data} = useContext(AppContext)
    const imgArr = [cris, julia, harris, dylan, katrina, zipeng, adam, aaron]

    return (
        <div className='speakers' id="speakers">
            <div className='speaker-header-div'><h2>Speakers</h2></div>
            <div className='speakers-cards'>
                {data.data.speakers.map((item,idx)=> {
                    return <div className={idx%2 === 0 ? 'speaker speaker-top' :'speaker speaker-bottom'} key={idx}>
                        <img src={imgArr[idx]} />
                        <h3>{item.name}</h3>
                        <p>{item.role}</p>
                    </div>
                })}

            </div>

        </div>
    )


}

export default Speakers