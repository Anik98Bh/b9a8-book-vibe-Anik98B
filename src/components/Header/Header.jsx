import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                            }>
                            Home</NavLink>
                        </li>
                        <li><NavLink
                            to="/listedbooks"
                            className={({ isActive }) =>
                                isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                            }>
                            Listed Books</NavLink>
                        </li>
                        <li><NavLink
                            to="/pagesread"
                            className={({ isActive }) =>
                                isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                            }>
                            Pages To Read</NavLink>
                        </li>
                        <li><NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                            }>
                            About</NavLink>
                        </li>
                        <li><NavLink
                            to="/contract"
                            className={({ isActive }) =>
                                isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                            }>
                            Contract Us </NavLink>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                        }>
                        Home</NavLink>
                    </li>
                    <li><NavLink
                        to="/listedbooks"
                        className={({ isActive }) =>
                            isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                        }>
                        Listed Books</NavLink>
                    </li>
                    <li><NavLink
                        to="/pagesread"
                        className={({ isActive }) =>
                            isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                        }>
                        Pages To Read</NavLink>
                    </li>
                    <li><NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                        }>
                        About</NavLink>
                    </li>
                    <li><NavLink
                        to="/contract"
                        className={({ isActive }) =>
                            isActive ? "isActive bg-none border border-[#23BE0A] font-bold text-[#23BE0A]" : ""
                        }>
                        Contract Us </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-[#23BE0A] text-white font-semibold">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white font-semibold">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;