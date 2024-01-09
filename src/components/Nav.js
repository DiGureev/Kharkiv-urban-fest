import './Nav.css'

const Nav = (props) => {

    return (
        <div className="nav-bar">
            <a href='#first-screen'><div className="logo">kharkiv urban fest</div></a>
            <ul className="nav-links">
            <a href='#about'><li id='link-about'>About</li></a>
            <a href='#speakers'><li id='link-speakers'>Speakers</li></a>
            <a href='#schedule'><li id='link-schedule'>Schedule</li></a>
            <a href='#workshop'><li id='link-workshop'>Workshop</li></a>
            <a href='#contact'><li>Contact us</li></a>
            </ul>
        </div>
    )

}

export default Nav