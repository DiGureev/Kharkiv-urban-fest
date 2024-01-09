import './Nav.css'

const Nav = (props) => {

    return (
        <div className="nav-bar">
            <a href='#first-screen'><div className="logo">kharkiv urban fest</div></a>
            <ul className="nav-links">
            <a href='#about'><li>About</li></a>
            <a href='#speakers'><li>Speakers</li></a>
            <a href='#schedule'><li>Schedule</li></a>
            <a href='#workshop'><li>Workshop</li></a>
            <a href='#contact'><li>Contact us</li></a>
            </ul>
        </div>
    )

}

export default Nav