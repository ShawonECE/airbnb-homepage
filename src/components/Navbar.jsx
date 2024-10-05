import { FaAirbnb } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar container mx-auto px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a className="afacad-flux-font text-xl font-semibold">Stays</a></li>
                        <li><a className="afacad-flux-font text-xl hover:bg-gray-100">Experiences</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost hover:bg-transparent text-xl"><FaAirbnb className="text-4xl text-[#FF4869]" /><span className="afacad-flux-font text-3xl font-bold text-[#FF4869]">airbnb</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="afacad-flux-font text-xl font-semibold hover:bg-transparent rounded-full">Stays</a></li>
                    <li><a className="afacad-flux-font text-xl rounded-full hover:bg-gray-100">Experiences</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost rounded-full hover:bg-gray-100 afacad-flux-font text-lg">Airbnb your home</a>
                <a className="btn btn-ghost rounded-full hover:bg-gray-100"><HiOutlineGlobeAlt className="text-xl font-extrabold" /></a>
                <button className="btn rounded-full bg-white hover:bg-white hover:shadow-lg hover:shadow-gray-200"><RxHamburgerMenu className="text-xl"/><IoPersonCircle className="text-3xl"/></button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;