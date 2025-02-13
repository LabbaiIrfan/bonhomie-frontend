import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const EventPage = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const EventCard = ({ imgSrc, title, to, rule }) => {
            return (
                <div className="w-72 h-80 card-container">
                    <div className="card">
                        <div className="card-face card-front">
                            <img
                                src={imgSrc}
                                alt={title}
                                className="w-full h-48 rounded-lg object-cover"
                            />
                            <h4 className="text-xl font-semibold mt-4">{title}</h4>
                        </div>
                        <div className="card-face card-back">
                            <h4 className="text-2xl font-bold mb-10">{title}</h4>
                            <Link to={to} className="register-link px-4 py-2 mb-7 font-bold rounded">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            );
        };

        const boysIndividualEvents = [
            { imgSrc: "/chess.png", title: "Chess", to: "/boyschess" },
            { imgSrc: "/carrom.png", title: "Carrom", to: "/boyscarrom" },
            { imgSrc: "/running.png", title: "Race 100m", to: "/boysrunning" },
            { imgSrc: "/discussthrow.png", title: "Discus Throw", to: "/boysdiscuss" },
            { imgSrc: "/shotput.jpeg", title: "Shot Put", to: "/boysshotput" },
            { imgSrc: "/badminton.png", title: "Badminton", to: "/boysbadminton" },
            { imgSrc: "/tabletennis.png", title: "Table Tennis", to: "/boystabletennis" },
            { imgSrc: "/pushup.png", title: "Pushups", to: "/boyspushup" },
        ];
        
        const boysGroupEvents = [
            { imgSrc: "/cricket.jpeg", title: "Cricket", to: "/boyscricket" },
            { imgSrc: "/boxcricket.png", title: "Box Cricket", to: "/boysboxcricket" },
            { imgSrc: "/football.png", title: "Football", to: "/boysfootball" },
            { imgSrc: "/volleyball.png", title: "VolleyBall", to: "/boysvolleyball" },
            { imgSrc: "/BGMI.webp", title: "BGMI", to: "/boysBGMI" },
        ];
        
        const girlsIndividualEvents = [
            { imgSrc: "/chess.png", title: "Chess", to: "/girlschess" },
            { imgSrc: "/carrom.png", title: "Carrom", to: "/girlscarrom" },
            { imgSrc: "/badminton.png", title: "Badminton", to: "/girlsbadminton" },
            { imgSrc: "/running.png", title: "Race 100m", to: "/girlsrunning" },
            { imgSrc: "/shotput.jpeg", title: "Shot Put", to: "/girlsshotput" },
            { imgSrc: "/discussthrow.png", title: "Discus Throw", to: "/girlsdiscuss" },
            { imgSrc: "/armwrestling.png", title: "Arm Wrestling", to: "/girlsarmwrestling" },
        ];
        
        const girlsGroupEvents = [
            { imgSrc: "/boxcricket.png", title: "Box Cricket", to: "/girlsboxcricket" },
            { imgSrc: "/throwball.jpg", title: "ThrowBall", to: "/girlsthrowball" },
            { imgSrc: "/football.png", title: "Football", to: "/girlsfootball" },
            { imgSrc: "/volleyball.png", title: "VolleyBall", to: "/girlsvolleyball" },
            { imgSrc: "/relay.png", title: "Relay Race", to: "/girlsrelay" },
            { imgSrc: "/threelegrace.jpg", title: "Three Leg Race", to: "/girlsthreelegrace" },
        ];
        
        
    // const eventSchedule = [
    //     { time: "9:00 AM", title: "Opening Ceremony", description: "Ceremonial march and special performances.", venue: "Football Ground" },
    //     { time: "9:30 AM", title: "Basketball", description: "Team basketball competition.", venue: "Basketball Court" },
    //     { time: "10:30 AM", title: "Track Events", description: "100m, 200m, and 4x100m relay.", venue: "Track Field" },
    //     { time: "12:00 PM", title: "Lunch Break", description: "Lunch served at the main cafeteria.", venue: "Cafeteria" },
    //     { time: "2:00 PM", title: "Final Match", description: "Football and Basketball finals.", venue: "Stadium" },
    // ];

    const [selectedCategory, setSelectedCategory] = useState("boysIndividual");

    const renderCards = (events) => {
        return events.map((event, index) => (
            <EventCard
                key={index}
                imgSrc={event.imgSrc}
                title={event.title}
                to={event.to}
                rule={event.rule}
            />
        ));
    };

    // const renderSchedule = (schedule) => {
    //     return schedule.map((event, index) => (
    //         <div key={index} className="mt-8 space-y-6">
    //             <div className="flex justify-between items-center bg-gray-100 rounded-lg p-6">
    //                 <div>
    //                     <h4 className="text-xl text-gray-800 font-semibold">{event.time} - {event.title}</h4>
    //                     <p className="text-gray-600">{event.description}</p>
    //                 </div>
    //                 <div>
    //                     <h4 className="text-xl text-gray-800 font-semibold">Venue: {event.venue}</h4>
    //                 </div>
    //             </div>
    //         </div>
    //     ));
    // };

    return (
        
        <div className="bg-bgcolor">
            <nav className="bg-fgcolor text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
            <Link to="/">
                <img 
                    src="/bonhomiee.png" 
                    alt="SportsFest Logo" 
                    className="h-8 md:h-12" 
                />
            </Link>
        </div>
        <div className="hidden md:flex space-x-8">
            <a href="#sports" >Sports Events</a>
            <a href="#schedule" >Event Schedule</a>
            <a href="#testimonials" >What Participants Say</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
    {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-4">
            <div className="flex flex-col items-start space-y-2 ml-4">
                <a href="#sports" className="py-2 text-black">Sports Events</a>
                <a href="#schedule" className="py-2 text-black">Event Schedule</a>
                <a href="#testimonials" className="py-2 text-black">What Participants Say</a>
                <a href="#contact" className="py-2 text-black">Contact</a>
            </div>
        </div>
    )}
</nav>

            {/* Button Section */}
            <div id="sports" className="flex justify-center flex-wrap p-6 gap-6">
                <button
                    onClick={() => setSelectedCategory("boysIndividual")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-fgcolor rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-custom-grey hover:scale-105 active:scale-100 "
                >
                    Boys Individual Sports
                </button>

                <button
                    onClick={() => setSelectedCategory("boysGroup")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-fgcolor rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-custom-grey hover:scale-105 active:scale-100 "
                >
                    Boys Group Sports
                </button>

                <button
                    onClick={() => setSelectedCategory("girlsIndividual")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-fgcolor rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-custom-grey hover:scale-105 active:scale-100 r"
                >
                    Girls Individual Sports
                </button>

                <button
                    onClick={() => setSelectedCategory("girlsGroup")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-fgcolor rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-custom-grey hover:scale-105 active:scale-100 "
                >
                    Girls Group Sports
                </button>
            </div>

            <div>
                {/* Boys Individual Sports */}
                {selectedCategory === "boysIndividual" && (
                    <section id="boysIndividualSports" className="py-16 bg-bgcolor">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-white">
                                Boys Individual Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(boysIndividualEvents)}
                            </div>
                        </div>
                    </section>
                )}

                {/* Boys Group Sports */}
                {selectedCategory === "boysGroup" && (
                    <section id="boysGroupSports" className="py-16 bg-bgcolor">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-white">
                                Boys Group Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(boysGroupEvents)}
                            </div>
                        </div>
                    </section>
                )}

                {/* Girls Individual Sports */}
                {selectedCategory === "girlsIndividual" && (
                    <section id="girlsIndividualSports" className="py-16 bg-bgcolor">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-white">
                                Girls Individual Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(girlsIndividualEvents)}
                            </div>
                        </div>
                    </section>
                )}

                {/* Girls Group Sports */}
                {selectedCategory === "girlsGroup" && (
                    <section id="girlsGroupSports" className="py-16 bg-bgcolor">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-white">
                                Girls Group Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(girlsGroupEvents)}
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* Event Schedule Section
            <section id="schedule" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Event Schedule</h2>
                    {renderSchedule(eventSchedule)}
                </div>
            </section> */}

<section id="testimonials" className="py-16 bg-bgcolor">
    <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-white">What Participants Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-fgcolor p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-white">"The sports event was exhilarating! The energy and enthusiasm of everyone made it a memorable experience."</p>
                <h4 className="text-xl font-bold text-white mt-4">- Shaikh Irfan, BScIT</h4>
            </div>
            <div className="bg-fgcolor p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-white">"The organization of the event was impeccable. It was great to see such passion and teamwork on display."</p>
                <h4 className="text-xl font-bold text-white mt-4">- Sanchit Tamboli, ECS</h4>
            </div>
            <div className="bg-fgcolor p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-white">"Participating in this sports event was a highlight of my college life. Kudos to the organizers for such a fantastic experience!"</p>
                <h4 className="text-xl font-bold text-white mt-4">- Aayesha Pasha, SOET</h4>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default EventPage;
