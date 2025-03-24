import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Spider from "../../assets/picture/spiderdetail.png";
import Calender from "../../assets/svg/calendar.svg";
import Location from "../../assets/svg/entypo_location.svg";
import Ebuid from "../../assets/svg/ebuid.svg";
import Cinema from "../../assets/svg/cinema.svg";
import Hiflix from "../../assets/svg/hiflix.svg";
import { Link } from "react-router";

function Details() {
    return (
        <>
            <Header />
            <section className="bg-[url(/spider2.png)] h-[70vh] bg-right bg-cover relative -z-10 flex items-center p-5 md:h-[80vh]">
                <div className="absolute inset-0 w-full h-full bg-black opacity-70 -z-5"></div>
            </section>
            <section>
                <div className="flex flex-col gap-6 px-[10%] relative -top-50 md:flex-col md:items-center md:px-[10%] ">
                    <div className="md:flex gap-5">
                        <div>
                            <img
                                src={Spider}
                                alt="spiderman"
                                width={327}
                                height={502}
                            />
                        </div>
                        <div className="flex gap-7 flex-col md:justify-end md:flex md:flex-col md:gap-5 md:items-start md:w-[50%]">
                            <div className="flex flex-col gap-3 items-center md:items-start">
                                <h3 className="text-2xl text-center">
                                    Spiderman: Homecoming
                                </h3>
                                <div className="flex gap-5">
                                    <div className="bg-gray-200 text-[#A0A3BD] p-2 rounded-md ">
                                        Adventure
                                    </div>
                                    <div className="bg-gray-200 text-[#A0A3BD] p-2 rounded-md">
                                        Action
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A0A3BD] text-lg">
                                        Release date
                                    </p>
                                    <p>June 28, 2017</p>
                                </div>
                                <div>
                                    <p className="text-[#A0A3BD] text-lg">
                                        Directed by
                                    </p>
                                    <p>Jon Watss</p>
                                </div>
                                <div>
                                    <p className="text-[#A0A3BD] text-lg">
                                        Duration
                                    </p>
                                    <p>2 hours 13 minutes</p>
                                </div>
                                <div>
                                    <p className="text-[#A0A3BD] text-lg">
                                        Casts
                                    </p>
                                    <p>
                                        Tom Holland, Michael Keaton, Robert
                                        Downey Jr
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:grid md:col-span-2">
                        <h3 className="text-2xl mb-5">Synopsis</h3>
                        <p className="text-[#A0A3BD] leading-8">
                            Thrilled by his experience with the Avengers, Peter
                            returns home, where he lives with his Aunt May,
                            under the watchful eye of his new mentor Tony Stark,
                            Peter tries to fall back into his normal daily
                            routine - distracted by thoughts of proving himself
                            to be more than just your friendly neighborhood
                            Spider-Man - but when the Vulture emerges as a new
                            villain, everything that Peter holds most important
                            will be threatened.{" "}
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <form
                    action=""
                    className="flex flex-col gap-5 p-10 relative -top-50 md:flex-col md:gap-10 md:p-10 md:px-[10%]"
                >
                    <div className="hidden md:block">
                        <h3 className="text-2xl">Books Ticket</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 ">
                        <div className="flex gap-5 bg-gray-200 p-3 justify-between rounded-sm md:w-full md:items-center">
                            <img
                                src={Calender}
                                alt="CALENDER"
                                id="choose-date"
                            />
                            <label for="choose-date">Choose Date</label>
                            <select name="choose-date" id="choose-date">
                                <option value="date" disabled></option>
                            </select>
                        </div>
                        <div className="hidden  md:bg-gray-200 md:p-3 md:justify-between md:rounded-sm md:w-full md:flex md:items-center">
                            <img src={Calender} alt="CALENDER" />
                            <label for="choose-time">Choose Time</label>
                            <select name="choose-location" id="choose-location">
                                <option value="date" disabled></option>
                            </select>
                        </div>
                        <div className="flex gap-5 bg-gray-200 p-3 justify-between rounded-sm md:w-full">
                            <img src={Location} alt="location" />
                            <label for="choose-location">Choose Location</label>
                            <select name="choose-location" id="choose-location">
                                <option value="date" disabled></option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-700 text-white p-3 rounded-md md:w-[50%]"
                        >
                            Filter
                        </button>
                        <p className="text-[#A0A3BD] text-lg text-center md:hidden">
                            39 Result
                        </p>
                    </div>
                </form>
            </section>
            {/* modal detail movie verson mobile */}
            <section className="flex md:hidden">
                <div className="flex flex-col px-[5%] relative -top-50">
                    <div className="flex flex-col gap-5 px-5 rounded-lg border-1 border-slate-200">
                        <div className="flex justify-between items-center border-b-1 border-slate-200 py-7 ">
                            <div className="flex flex-col gap-5">
                                <a href="">
                                    <img src={Ebuid} alt="" />
                                </a>
                                <h3 className="text-2xl">EBV.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                            <label htmlFor=""></label>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-5 py-7">
                            <div className="flex flex-col gap-5">
                                <h3 className="text-2xl font-medium">
                                    REGULAR
                                </h3>
                                <div className="grid grid-cols-2 gap-7 justify-center">
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>08:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium">GOLD</h3>
                                <div className="grid grid-cols-2 gap-7 justify-center">
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>08:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium">
                                    PLATINUM
                                </h3>
                                <div className="grid grid-cols-2 gap-7 justify-center">
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>08:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                    <div className="p-2 bg-gray-200 rounded-sm text-center">
                                        <p>10:30 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="hidden md:flex gap-5 py-7 md:relative md:-top-50 md:items-center md:px-[10%]">
                    <h4 className="text-2xl flex justify-center items-center">
                        Choose Cinema
                    </h4>
                    <p className="flex justify-center items-center">
                        39 Result
                    </p>
                </div>
                <div className="hidden md:flex gap-5 py-7 md:relative md:-top-50 md:justify-between md:items-center md:px-[10%]">
                    <a href="">
                        <div className="md:flex md:justify-center md:items-center md:p-10 md:border-1 md:border-gray-300 md:rounded-sm md:w-60 md:h-30 md:hover:bg-blue-600">
                            <img src={Ebuid} alt="ebuid" />
                        </div>
                    </a>
                    <a href="">
                        <div className="md:flex md:justify-center md:items-center md:p-10 md:border-1 md:border-gray-300 md:rounded-sm md:w-60 md:h-30 md:hover:bg-blue-600">
                            <img src={Hiflix} alt="hiflix" />
                        </div>
                    </a>
                    <a href="">
                        <div className="md:flex md:justify-center md:items-center md:p-10 md:border-1 md:border-gray-300 md:rounded-sm md:w-60 md:h-30 md:hover:bg-blue-600">
                            <img src={Cinema} alt="cinema" />
                        </div>
                    </a>
                    <a href="">
                        <div className="md:flex md:justify-center md:items-center md:p-10 md:border-1 md:border-gray-300 md:rounded-sm md:w-60 md:h-30 md:hover:bg-blue-600">
                            <img src={Ebuid} alt="ebuid" />
                        </div>
                    </a>
                </div>
            </section>
            <section className="hidden md:flex md:gap-5 md:justify-center md:relative md:-top-40">
                <a href="#">&laquo;</a>
                <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 text-white rounded-lg justify-center items-center flex"
                >
                    1
                </a>
                <a
                    href="#"
                    className="w-8 h-8 bg-slate-200 text-white rounded-lg justify-center items-center flex"
                >
                    2
                </a>
                <a
                    href="#"
                    className="w-8 h-8 bg-slate-200 text-white rounded-lg justify-center items-center flex"
                >
                    3
                </a>
                <a
                    href="#"
                    className="w-8 h-8 bg-slate-200 text-white rounded-lg justify-center items-center flex"
                >
                    4
                </a>
                <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 text-white rounded-lg justify-center items-center flex"
                >
                    &raquo;
                </a>
            </section>
            <section className="flex justify-center">
                <button className="hidden md:flex md:gap-5 md:justify-center md:relative md:-top-30 md:bg-blue-700 md:text-white md:p-3 md:rounded-sm md:w-50">
                    <Link to="/movie/orderseat">Book Now</Link>
                </button>
            </section>

            <Footer />
        </>
    );
}

export default Details;
