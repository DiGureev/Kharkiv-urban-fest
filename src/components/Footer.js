import './Footer.css';
import fb from '../img/fb.png'
import fbm from '../img/fbm.png'
import inst from '../img/inst.png'

const Footer = (props) => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <a href='#first-screen'><div className="logo">kharki vurban fest</div></a>
                <div>
                    <a href='#about'><p>About Urban Fest</p></a>
                    <br/>
                    <a href='#speakers'><p>Speakers</p></a>
                    <a href='#'><p>Organizers</p></a>
                    <a href='#sponsors'><p>Sponsors</p></a>
                    <a href='#'><p>Terms & Conditions</p></a>
                </div>
                <div>
                    <a href='#schedule'><p>Schedule</p></a>
                    <a href='#'><p>Lectures</p></a>
                    <a href='#exibition'><p>Exhibitions</p></a>
                    <br/>
                    <a href='#'><p>Q&A</p></a>
                    <a href='#'><p>Feedback</p></a>
                </div>
                <div>
                    <p id='contact'>Contact us:</p>
                    <p>kharkiv_urban@com.ua</p>
                    <br/>
                    <p>Follow us:</p>
                    <div>
                    <a href='#'><img src={fb}/></a>
                    <a href='#'><img src={fbm}/></a>
                    <a href='#'><img src={inst}/></a>
                    </div>
                </div>
            </div>
            <div className='create'>
                <p>Design: <a href='https://www.behance.net/gallery/188223681/Kharkiv-Urban-Festival-Landing-Page'>Valeria Gershannik</a></p>
                <p>Development: <a href='https://github.com/DiGureev'>Diana Gureev</a></p>
            </div>
        </div>
    )
}

export default Footer