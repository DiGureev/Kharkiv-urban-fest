import icon1 from '../img/icon-1.png';
import icon2 from '../img/icon-2.png';
import icon3 from '../img/icon-3.png';
import img from '../img/about-img.png';
import './About.css'
import { useContext } from 'react';
import { AppContext } from '../App.js';

const About = (props) => {
    const {data} = useContext(AppContext)
    const imgArr = [icon1, icon2, icon3]

    return (
        <div className="about-div">
            <div className="icons">
                {data.data.about.icons.map((item,idx)=> {
                    let icon = imgArr[idx]
                    return <div key={idx} className='icon'>
                        <img src={icon} />
                        <p className='subtitle'>{item.subtitle}</p>
                        </div>
                })}
            </div>
            <div className='about-container' id="about">
                <img src={img}/>
                <div className='about-content'>
                    <div className='header-div'><h2>about us</h2></div>
                    <p className='description'>KUF is an annual festival, which unites contemporary architecture, young practice, and open dialogue on the urban and social aspects of city planning through the construction of a temporary pavilion in Kharkiv and different Ukrainian cities.</p>
                    <div className='numbers'>
                        {data.data.about.numbers.map((item,idx)=> {
                                return <div className='number' key={idx}>
                                            <p className='digit'>{item.number}</p>
                                            <p className='digit-title'>{item.title}</p>
                                        </div>
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About