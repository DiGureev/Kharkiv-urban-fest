import './Photos.css';
import photo1 from '../img/photo1.png'
import photo2 from '../img/photo2.png'
import photo3 from '../img/photo3.png'
import photo4 from '../img/photo4.png'
import photo5 from '../img/photo5.png'
import photo6 from '../img/photo6.png'

const Photos = (props) => {

    return (
        <div className='photos-section' id='exibition'>
            <img src={photo1} className='photocard photocard-1'/>
            <div className='photocard photo-header photocard-2'><h2>Photos</h2></div>
            <img src={photo4} className='photocard photocard-5'/>
            <img src={photo6} className='photocard photocard-7'/>
            <img src={photo2} className='photocard photocard-3'/>
            <img src={photo3} className='photocard photocard-4'/>
            <img src={photo5} className='photocard photocard-6'/>
            

        </div>
    )

}

export default Photos