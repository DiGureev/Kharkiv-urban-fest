import './Nav.css'

const Nav = (props) => {

    return (
        <div className="nav-bar">
            <div className="logo">kharkiv urban fest</div>
            <ul className="nav-links">
               <li>About</li> 
               <li>Speakers</li> 
               <li>Schedule</li> 
               <li>Workshop</li> 
               <li>Contact us</li> 
            </ul>
        </div>
    )

}

export default Nav