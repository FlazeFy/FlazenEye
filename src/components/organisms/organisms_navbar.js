import AtomsButton from "../atoms/atoms_button";

export default function OrganismsNavbar(props) {
    return  (
        <nav id="navbar" className="navbar">
            <ul>
                <li><AtomsButton active={props.active} state="home" url="" title="Home" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="dashboard" url="dashboard" title="Dashboard" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="pinmarker" url="pinmarker" title="Pinmarker" button_type="main_nav"/></li>
            </ul>
            <i className="fa-solid fa-bars mobile-nav-toggle" title="Open NavBar"></i>
        </nav>
    )
}