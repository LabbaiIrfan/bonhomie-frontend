import React from "react";

const Footer = () => {
    return (
        <footer className="text-center text-white bg-blue-600 w-full">
            {/* Grid container */}
            <div className="px-4 py-6 max-w-7xl mx-auto">
                {/* Section: Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Text */}
                    <div className="text-center">
                    <img src="/logo.png" alt="Company Logo" className="mb-2 w-full max-w-md mx-auto" />
                        <p className="text-white">Designed and Developed by the Technical Secretary, SOET</p>
                    </div>

                    {/* Products */}
                    <div>
                        <h6 className="uppercase mb-4 font-bold">Events</h6>
                        <p><a href="#" className="text-white hover:underline">Sports</a></p>
                        <p><a href="#" className="text-white hover:underline">Cultural</a></p>
                        <p><a href="#" className="text-white hover:underline">Technical</a></p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h6 className="uppercase mb-4 font-bold">Glimpse</h6>
                        <p><a href="#" className="text-white hover:underline">Photos</a></p>
                        <p><a href="#" className="text-white hover:underline">Videos</a></p>
                        <p><a href="#" className="text-white hover:underline">Help</a></p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h6 className="uppercase mb-4 font-bold">Contact</h6>
                        <p><i className="fas fa-envelope mr-2"></i> bonhomie@gmail.com</p>
                        <p><i className="fas fa-phone mr-2"></i> +91 87675 25655</p>
                        <p><i className="fas fa-phone mr-2"></i> +91 81047 71326</p>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-white py-4">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        &copy; 2025 Copyright: <a href="https://aiktc.ac.in/" className="text-white hover:underline">AIKTC</a>
                    </div>
                    <div className="flex space-x-3">
                        <a href="#" className="text-white hover:bg-gray-700 p-2 rounded-full">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://chat.whatsapp.com/IfOGcKECmzjEIa5nW0oTuU" className="text-white hover:bg-gray-700 p-2 rounded-full">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://aiktc.ac.in/" className="text-white hover:bg-gray-700 p-2 rounded-full">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="https://www.instagram.com/bonhomie_aiktc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white hover:bg-gray-700 p-2 rounded-full">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
