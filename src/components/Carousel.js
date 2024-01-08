import {useState} from 'react'
import img1 from '../img/carousel-1.png';
import img2 from '../img/carousel-2.png';
import img3 from '../img/carousel-3.png';
import img4 from '../img/carousel-4.png';
import img5 from '../img/carousel-5.png';
import background from '../img/background.png'
import './Carousel.css'

const Carousel = (props) => {
    const imgArr = [img1, img2, img3, img4, img5]
    const [slide, setSlide] = useState(0)

    return (
    <div className='carousel'>
    {imgArr.map((item, idx) => {
        return <div key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'}>
        <img src={item} className='img main'/>
        <img src={background} className='img background'/>
        </div>
    })}
    <span className='indicators'>
    {imgArr.map((_,idx)=>{
        return <button key={idx} onClick={()=> setSlide(idx)} className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}></button>
    })}
    </span>
    </div>
    )
}

export default Carousel