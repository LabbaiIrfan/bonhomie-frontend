import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TechnicalPage = () => {
    const [formStatus, setFormStatus] = useState('');
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
                                {rule ? (
                                    <Link to={rule} className="register-link px-4 py-2 mb-7 font-bold rounded">
                                        View Rules
                                    </Link>
                                ) : (
                                    <p className="text-gray-500">Rules not available</p>
                                )}
                            </div>
                        </div>
                    </div>
                );
            };

            const culturalEvents = [
                { imgSrc: "/autocad.png", title: "AutoCAD", to: "/autocad" },
                { imgSrc: "/ppt.png", title: "PPT Competition", to: "/ppt" },
                { imgSrc: "/poster.png", title: "Poster Competition", to: "/poster" },
                
            ];
    // const eventSchedule = [
    //     { time: "9:00 AM", title: "Opening Ceremony", description: "Ceremonial march and special performances.", venue: "Main Stage" },
    //     { time: "10:00 AM", title: "Mehndi Competition", description: "Design your own Mehndi patterns.", venue: "Art Hall" },
    //     { time: "11:30 AM", title: "Stand-Up Comedy", description: "Comedy performances by students.", venue: "Main Stage" },
    //     { time: "1:00 PM", title: "Cooking Competition", description: "Cook off to impress the judges!", venue: "Food Court" },
    //     { time: "3:00 PM", title: "Rangoli Contest", description: "Design beautiful Rangoli patterns.", venue: "Art Hall" },
    // ];

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Thank you for your message!');
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-fgcolor text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
        {/* Replace text with an image */}
        <div className="text-2xl font-bold">
            <Link to="/">
                <img 
                    src="/bonhomiee.png" 
                    alt="CulturalFest Logo" 
                    className="h-8 md:h-12" 
                />
            </Link>
        </div>
        <div className="hidden md:flex space-x-8">
            <a href="#culturalEvents" className="hover:text-gray-200">Technical Events</a>
            <a href="#schedule" className="hover:text-gray-200">Event Schedule</a>
            <a href="#testimonials" className="hover:text-gray-200">What Participants Say</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
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
                <a href="#culturalEvents" className="py-2">Cultural Events</a>
                <a href="#schedule" className="py-2">Event Schedule</a>
                <a href="#testimonials" className="py-2">What Participants Say</a>
                <a href="#contact" className="py-2">Contact</a>
            </div>
        </div>
    )}
</nav>


            {/* Cultural Events Section */}
            <section id="culturalEvents" className="py-16 bg-bgcolor">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold text-white">Technical Events</h2>
                    <div className="flex flex-wrap justify-center gap-8 mt-10">
                        {renderCards(culturalEvents)}
                    </div>
                </div>
            </section>

            {/* Event Schedule Section
            <section id="schedule" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Event Schedule</h2>
                    {renderSchedule(eventSchedule)}
                </div>
            </section> */}

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 bg-bgcolor">
    <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-white">What Participants Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-fgcolor p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-white">"The technical workshops were incredibly informative. I gained hands-on experience with the latest tools and technologies."</p>
                <h4 className="text-xl font-bold text-white mt-4">- Rohan Mehta, Computer Science</h4>
            </div>
            <div className="bg-fgcolor p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-white">"Participating in the hackathon was a challenging yet rewarding experience. It pushed my problem-solving skills to the next level."</p>
                <h4 className="text-xl font-bold text-white mt-4">- Afreen Khan, Electronics Engineering</h4>
            </div>
            <div className="bg-fgcolor p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-white">"The technical events were well-organized, and the competitive atmosphere was electrifying. A fantastic opportunity to showcase my skills."</p>
                <h4 className="text-xl font-bold text-white mt-4">- Ayesha Qureshi, Bsc IT</h4>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default TechnicalPage;
