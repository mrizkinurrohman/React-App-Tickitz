import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Spider from "../../assets/picture/spider1.png";
import Cinema from "../../assets/svg/cinema.svg";
import Step from "../../components/Steps/Step.jsx";
import { Link } from "react-router";

function OrderSeat() {
    return (
        <div>
            <Header />
            <main className="flex flex-col gap-10 bg-gray-200 md:py-[31px] md:px-[131px]">
                <Step />
                <section className="md:flex md:gap-2">
                    <div className="py-5 md:flex-1 bg-white rounded-[6px] md:py-[39px] md:px-[22px] ">
                        <div className="flex flex-col gap-2 items-center md:border-1 md:border-gray-400 md:w-full md:flex-row md:justify-start md:gap-5 md:p-2">
                            <div>
                                <img
                                    src={Spider}
                                    alt="spider"
                                    className="w-[300px] h-[200px] md:w-[300px] md:h-[150px]"
                                />
                            </div>
                            <div className="flex flex-col gap-4 items-center md:items-start w-full">
                                <h4 className="text-2xl ">
                                    Spider-Man: Homecoming
                                </h4>
                                <div className="flex gap-3">
                                    <p className="py-1 px-3 bg-gray-200 rounded-lg">
                                        Action
                                    </p>
                                    <p className="py-1 px-3 bg-gray-200 rounded-lg">
                                        Adventure
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 md:flex-row md:justify-between md:w-full md:gap-5 md:items-center">
                                    <p>Regular - 13:00 PM</p>
                                    <button
                                        type="submit"
                                        className="bg-blue-700 py-1 px-3 rounded-lg md:w-20"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center md:justify-center mt-5 overflow-x-scroll">
                                <div className="w-90 h-1 bg-gray-300"></div>
                                <div className="flex  py-4 px-2 gap-9 seats md:justify-center">
                                    <div className="mt-8 grid grid-cols-[repeat(8,10px)] grid-rows-[repeat(8,10px)] gap-7">
                                        <div className="bg-none">A</div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none">B</div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className=" bg-none">C</div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none">D</div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none">E</div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none">F</div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat gabung"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none ">G</div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none"></div>
                                        <div className="bg-none">1</div>
                                        <div className="bg-none">2</div>
                                        <div className="bg-none">3</div>
                                        <div className="bg-none">4</div>
                                        <div className="bg-none">5</div>
                                        <div className="bg-none">6</div>
                                        <div className="bg-none">7</div>
                                    </div>
                                    <div className="mt-8 grid grid-cols-[repeat(8,10px)] grid-rows-[repeat(8,10px)] gap-7">
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none"></div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className=" bg-none"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat avaible"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat gabung"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none "></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="seat"></div>
                                        <div className="bg-none"></div>
                                        <div className="bg-none">8</div>
                                        <div className="bg-none">9</div>
                                        <div className="bg-none">10</div>
                                        <div className="bg-none">11</div>
                                        <div className="bg-none">12</div>
                                        <div className="bg-none">13</div>
                                        <div className="bg-none">14</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold">
                                    Seating key
                                </h3>
                                <div className="flex gap-5 flex-wrap mt-5">
                                    <div className="flex gap-5 items-center">
                                        <p>Available</p>
                                        <div className="w-7 h-7 bg-blue-600 rounded-md"></div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <p>Selected</p>
                                        <div className="w-7 h-7 bg-[#F589D7] rounded-md"></div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <p>Love nest</p>
                                        <div className="w-7 h-7 bg-[#6E7191] rounded-md"></div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <p>Sold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-5 w-[350px]">
                        <div className=" bg-white rounded-[6px] md:flex md:flex-col md:gap-5 md:py-[39px] md:px-[22px]">
                            <div className="flex flex-col gap-2 items-center">
                                <img src={Cinema} alt="cinema" />
                                <p className="font-bold text-lg">
                                    CineOne21 Cinema
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 ">
                                    <p className="text-gray-400">
                                        Movie selected
                                    </p>
                                    <p className="">Spider-Man: Homecoming</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="text-gray-400">
                                        Tuesday, 07 July 2020
                                    </p>
                                    <p>13:00pm</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="text-gray-400">
                                        One ticket price
                                    </p>
                                    <p>$10</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="text-gray-400">
                                        Seat choosed
                                    </p>
                                    <p>C4, C5, C6</p>
                                </div>
                            </div>
                            <div className="flex justify-between border-t-1 border-gray-400 mt-5 py-5">
                                <p className="font-bold text-xl">
                                    Total Payment
                                </p>
                                <p className="text-blue-700 text-xl font-bold">
                                    $30
                                </p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-700 py-2 px-3 rounded-md"
                        >
                            <Link to="/movie/resultorder">Checkout Now</Link>
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default OrderSeat;
