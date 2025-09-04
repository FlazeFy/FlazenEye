import AtomsButton from "../atoms/atoms_button";

export default function OrganismsNavbar(props) {
    return  (
        <nav id="navbar" className="navbar">
            <ul>
                <li><AtomsButton active={props.active} state="home" url="" title="Home" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="dashboard" url="dashboard" title="Dashboard" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="pinmarker" url="pinmarker" title="PinMarker" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="gudangku" url="gudangku" title="GudangKu" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="wardrobe" url="wardrobe" title="Wardrobe" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="myride" url="myride" title="MyRide" button_type="main_nav"/></li>
                <li><AtomsButton active={props.active} state="kumande" url="kumande" title="Kumande" button_type="main_nav"/></li>
            </ul>
            <i className="fa-solid fa-bars mobile-nav-toggle" title="Open NavBar"></i>
        </nav>
    )
}