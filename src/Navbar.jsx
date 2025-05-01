import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-xl font-bold text-gray-800">MySite</div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <ul className="hidden md:flex space-x-6 text-gray-600 font-medium items-center">
                    <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600">About</a></li>
                    <li className="relative group">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center hover:text-blue-600"
                        >
                            Services <ChevronDown size={16} className="ml-1" />
                        </button>
                        <ul className={`absolute top-8 left-0 bg-white shadow-md rounded-md py-2 w-40 space-y-2 text-sm
                            ${dropdownOpen ? "block" : "hidden"} group-hover:block`}>
                            <li><a href="#design" className="block px-4 hover:text-blue-600">Design</a></li>
                            <li><a href="#development" className="block px-4 hover:text-blue-600">Development</a></li>
                            <li><a href="#seo" className="block px-4 hover:text-blue-600">SEO</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.ul
                        className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 text-gray-700 font-medium"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center w-full"
                            >
                                Services <ChevronDown size={16} className="ml-1" />
                            </button>
                            {dropdownOpen && (
                                <ul className="ml-4 mt-2 space-y-1 text-sm">
                                    <li><a href="#design" onClick={closeMenu}>Design</a></li>
                                    <li><a href="#development" onClick={closeMenu}>Development</a></li>
                                    <li><a href="#seo" onClick={closeMenu}>SEO</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
