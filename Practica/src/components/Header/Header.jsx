import { NavLink } from "react-router-dom";

const Header = () => {
    return(
            <nav className="bg-violet-600">
                <ul className="flex flex-row justify-center gap-8 p-4">
                    <li className="text-white">
                        <NavLink to="/">Generar examen</NavLink>
                    </li>
                    <li className="text-white">
                        <NavLink to="/past-exam">Examenes pasados</NavLink>
                    </li>
                </ul>
            </nav>
    );
}

export default Header;