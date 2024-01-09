import './Schedule.css';
import arrow from '../img/arrow.png';
import { useContext , useState} from 'react';
import { AppContext } from '../App.js';
import arrowRight from '../img/arrow-right.png';
import arrowLeft from '../img/arrow-left.png';
import air1 from '../img/air-1.png';
import air2 from '../img/air-2.png';
import halo1 from '../img/halo-1.png';
import halo2 from '../img/halo-2.png';

const Schedule = (props) => {
    const {data} = useContext(AppContext)
    const airImg = [air1, air2]
    const haloImg = [halo1, halo2]
    const [screen1, setScreen1] = useState(0)
    const [screen2, setScreen2] = useState(0)

    const clickPrev = (scr)=>{
        if (scr==='screen1'){
            screen1 === 0 ? setScreen1(airImg.length-1) : setScreen1(screen1-1)
        } else {
            screen2 === 0 ? setScreen2(haloImg.length-1) : setScreen2(screen2-1)
        }
        
    }

    const clickNext = (scr)=>{
        if (scr==='screen1') {
            screen1 === airImg.length-1 ? setScreen1(0) : setScreen1(screen1+1)
        } else {
            screen2 === haloImg.length-1 ? setScreen2(0) : setScreen2(screen2+1)
        }
        
    }

    return (
        <div className='schedule' id='schedule'>
            <div className='schedule-header' style={{width: '800px'}}>
            <div style={{textAlign: 'center', backgroundColor:'#01E401', padding: '8px'}}><h2>Schedule</h2></div>
            <p>Register your personal data and grab a coffee before the lectures start</p>
            </div>
            <div className='schedule-container'>
                <div className='arrow'><img src={arrow}/></div>
                <div className='lectures'>
                    {data.data.schedule.map((item, idx)=> {
                        return <div className='lecture-item'>
                            <p className='time'>{item.time}</p>
                            <div className='lecture-details'>
                                <h3>{item.speaker}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className='galleries'>
                    <div className='gallery'>
                        <div className='gallery-carousel'>
                            <img src={arrowLeft} className='arrows' onClick={()=>clickPrev('screen1')}/>
                            <div className='photos'>
                                {airImg.map((item, idx) => {
                                    return <img src={item} className={screen1===idx ? 'photo' : 'photo photo-hidden'}/>
                                })}
                            </div>
                            <img src={arrowRight} className='arrows' onClick={()=>clickNext('screen1')}/>
                        </div>
                        <div className='gallery-content'>
                            <h3>AIR | Povitrya</h3>
                            <p>P+S Architecture Studio</p>
                            <p>10:00 - 17:00</p>
                        </div>
                    </div>
                    <div className='gallery'>
                        <div className='gallery-carousel'>
                            <img src={arrowLeft} className='arrows' onClick={()=>clickPrev('screen2')}/>
                            <div className='photos'>
                                {haloImg.map((item, idx) => {
                                    return <img src={item} className={screen2===idx ? 'photo' : 'photo photo-hidden'}/>
                                })}
                            </div>
                            <img src={arrowRight} className='arrows' onClick={()=>clickNext('screen2')}/>
                        </div>
                        <div className='gallery-content'>
                            <h3>House of Halo</h3>
                            <p>Kyiv Arts Center + Lopelab</p>
                            <p>open all day</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Schedule