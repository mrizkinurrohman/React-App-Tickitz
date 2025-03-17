import gambar from "../../assets/svg/logoblue.svg";
import Hamburger from "../../assets/svg/Hamburger.svg";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* className=" border-b-1 border-black sticky top-0 bg-white z-10" */}
            <header className="border-b-1 border-slate-200 sticky top-0 bg-white z-30">
                <nav className="flex flex-col items-center gap-5 py-[22px] px-[10%] md:items-center md:justify-between md:flex-row md:px-[-5%]">
                    {/* // logo */}
                    <div className="flex w-full justify-between items-center md:w-auto">
                        <img src={gambar} alt="Tickitz" />
                        <button
                            className="md:hidden flex justify-end bg-none"
                            onClick={toggleMenu}
                        >
                            <img
                                src={Hamburger}
                                alt="hamburger menu"
                                className="md:hidden"
                            />
                        </button>
                    </div>
                    {/* nav link */}
                    <div
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } md:flex md:items-center md:gap-6 flex-col gap-3 md:flex-row text-center`}
                    >
                        <a href="" className="hover:bg-amber-400 inline-block">
                            Home
                        </a>
                        <a href="">Movie</a>
                        <a href="">Buy Ticket</a>
                    </div>
                    {/* nav button */}
                    <div
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } gap-2 md:flex md:items-center w-full md:gap-6 flex-col md:flex-row text-center md:w-auto`}
                    >
                        <a href="">
                            <button className="border-2 border-blue-500 p-2 text-blue-500">
                                Signin
                            </button>
                        </a>
                        <a href="">
                            <button className="bg-blue-500 p-2">Signup</button>
                        </a>
                    </div>
                </nav>
                {/* <section className="flex flex-col">
                    <section className="flex justify-between p-4 items-center ">
                        <div>
                            <img src={gambar} alt="Tickitz" />
                        </div>
                        <button
                            className="md:hidden flex justify-end bg-none"
                            onClick={toggleMenu}
                        >
                            <img src={Hamburger} alt="hamburger menu" />
                        </button>
                    </section>

                    <nav
                        className={`bg-[#1d4fd7] flex-col gap-4 absolute top-18 w-full text-white ${
                            isOpen ? "hidden" : "flex"
                        } p-7`}
                    >
                        <ul className="flex flex-col items-center gap-3">
                            <li className="hover:bg-amber-500 w-full text-center p-2">
                                <a href="">Home</a>
                            </li>
                            <li className="hover:bg-amber-500 w-full text-center p-2">
                                <a href="">Movie</a>
                            </li>
                            <li className="hover:bg-amber-500 w-full text-center p-2">
                                <a href="">Buy Ticket</a>
                            </li>
                        </ul>
                        <section className="flex flex-col items-center md:hidden">
                            <div>
                                <a href="">Login</a>
                            </div>
                            <div>
                                <a href="">Register</a>
                            </div>
                        </section>
                    </nav>
                </section> */}
            </header>
        </>
    );
}

export default Header;
