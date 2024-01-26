import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons'

export const menuNav = [
    {
        title: "home",
        icon: <FontAwesomeIcon icon={faHouse} />,
        url: "#home"
    },
    {
        title: "about",
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        url: "#about"
    },
    {
        title: "projects",
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        url: "#projects"
    },
    {
        title: "contact",
        icon: <FontAwesomeIcon icon={faPhone} />,
        url: "#contact"
    }
];