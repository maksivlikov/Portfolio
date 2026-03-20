import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"

const Header = () => {

    const form = useRef();
    // toggle menu for mobile view
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


    // contact form menu
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("portfolio8ur348t98", "template_qqcfvam", form.current, "OZI2S4xeqwsEsITou").then(
            () => {
                alert("Message sent successfully");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message, please try again.", error.text);
            }
        )

    }

    return (

        <header className="absolute w-full z-50 transition-all duration-300">
        
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                
                {/* Logo / Name */}
                <motion.div 
                initial = {{ opacity: 0, x: -50 }}
                animate = {{ opacity: 1, x: 0 }}
                transition = {{ type: "spring", stiffness: 100, damping: 25, delay: 0.3, duration: 1.2}}
                    className="flex items-center">
                    
                    <div className="h-10 w-10 rounded-xl bg-black flex items-center justify-center text-white font-bold text-xl mr-3">
                        M
                    </div>

                    <span className=" bg-black font-bold bg-clip-text text-transparent">
                        Maksym Ivlikov
                    </span>

                </motion.div>

                {/* Desktop Nav   */}
                <nav className = "lg:flex hidden space-x-8">
                    {["Home", "About", "Experience", "Contact"].map((item, index) => (
                        // "Projects", 
                        <motion.a
                        key={item}
                        initial = {{ opacity: 0, y: -20 }}
                        animate = {{ opacity: 1, y: 0 }}
                        transition = {{ type: "spring", stiffness: 100, damping: 25, delay: 0.7 + index * 0.2, duration: 1.2}}
                        className = "relative text-black hover:violet-600 dark:hover:text-violet-600 font-medium transition-colors duration-300 group"
                        href = {"#"+ item}>
                            {item}
                            <span className = "absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}

                </nav>

                {/* Social Icons - Desktop */}

                {/* Github */}
                <div className="md:flex hidden items-center space-x-4">
                    <motion.a 
                    initial = {{ opacity : 0, scale: 0.5 }}
                    animate = {{ opacity: 1, scale: 1 }}
                    transition = {{ delay: 1.3, duration: 0.8 }}
                    className = "text-black hover:violet-600 dark:hover:text-violet-600 transition-colors duration-300"
                    href = "https://github.com/maksivlikov">
                        <FiGithub className="w-5 h-5" />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a 
                    initial = {{ opacity : 0, scale: 0.5 }}
                    animate = {{ opacity: 1, scale: 1 }}
                    transition = {{ delay: 1.3, duration: 0.8 }}
                    className = "text-black hover:violet-600 dark:hover:text-violet-600 transition-colors duration-300"
                    href = "#">
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>

                    {/* Contact me */}
                    <motion.button 
                    onClick = {openContactForm}
                    initial = {{ opacity : 0, scale: 0.5 }}
                    animate = {{ opacity: 1, scale: 1 }}
                    transition = {{ delay: 1.8, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
                    className = "ml-4 px-4 py-2 rounded-xl bg-black font-bold hover:bg-purple-600 hover:text-white transition-all duration-500">
                        Contact Me
                    </motion.button>
                </div>    


                {/* Mobile Menu Button */}
                <div className = "md:hidden flex items-center">
                    <motion.button 
                    whileTap = {{ scale: 0.7}}
                    onClick = {toggleMenu}
                    className = "text-black">
                        {isOpen? <FiX className = "h-6 w-6"/> : <FiMenu className = "h-6 w-6"/>}
                    </motion.button>
                </div>
            </div>
        

            {/* mobile nav menu */}
            <motion.div 
            initial = {{ opacity: 0, height: 0}}
            animate = {{ opacity: isOpen ? 1 : 0 , height: isOpen ? "auto" : 0 }}
            transition = {{ duration: 0.5}}
            className = "md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5">
                <nav className = "flex flex-col space-y-3">
                    {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
                        <a onClick = {toggleMenu} className = "text-gray-300 font-medium py-2" key = {item} href = "#">
                            {item}
                        </a>
                    ))}
                </nav>       

                <div className = "pt-4 border-t border-white ">
                    <div className="flex space-x-5">
                        <a href = "https://github.com/maksivlikov">
                            <FiGithub className = "h-5 w-5 text-white"/>
                        </a>
                        <a href = "#">
                            <FiLinkedin className = "h-5 w-5 text-white"/>
                        </a>
                    </div>

                    <button 
                    onClick = {() => {
                        toggleMenu()
                        openContactForm()
                    }}
                    className = "mt-4 block w-full px-4 py-2 rounded-lg bg-violet-600 font-bold">
                        Contact Me
                    </button>
                </div>
            </motion.div>
            
            {/* Contact Form */}
            <AnimatePresence>
                {contactFormOpen && (
                    <motion.div
                    initial = {{opacity:0 }}
                    animate = {{opacity:1 }}
                    exit = {{ opacity:0 }}
                    transition ={{ duration: 0.5 }}
                    className = "fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
                    >
                    
                        <motion.div 
                        initial = {{ scale: 0.8, opacity: 0, y: 30 }}
                        animate = {{ scale: 1, opacity: 1, y: 0 }}
                        exit = {{ scale: 0.8, opacity: 0, y: 30 }}
                        transition = {{ type: "spring", damping: 30, stiffness: 200, duration: 0.8}}
                        className = "bg-gray-900 rounded-xl shadow-xl w-full max-w-md p-6">
                            <div className = "flex justify-between items-center mb-4">
                                <h1 className = "text-2xl font-bold text-gray-300">
                                    Get In Touch 
                                </h1>

                                <button onClick = {closeContactForm}>
                                    <FiX className = "w-5 h-5 text-gray-300 font-extrabold"/>
                                </button>
                            </div>

                            {/* Input forms */}
                            <form ref={form} onSubmit={sendEmail} className = "space-y-4">
                                {/* name */}
                                <div>
                                    <label htmlFor = "name" className = "block text-sm font-medium text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input type = "text" id = "name" placeholder = "Your Name" name = "name" 
                                    className = "w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700">
                                    </input>
                                </div>
                                {/* email */}
                                <div>
                                    <label htmlFor = "email" className = "block text-sm font-medium text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input type = "email" id = "email" placeholder = "Your Email" name = "email"
                                    className = "w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700">
                                    </input>
                                </div>
                                {/* message */}
                                <div>
                                    <label htmlFor = "message" className = "block text-sm font-medium text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea rows = "4" id = "message" placeholder = "Your Message" name = "message"
                                    className = "w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700">
                                    </textarea>
                                </div>


                                <motion.button
                                type = "submit"
                                whileHover = {{ scale: 1.03 }}
                                whileTap = {{ scale: 0.97 }}
                                className = "w-full px-4 py-2 bg-violet-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg ">
                                    Send Message
                                </motion.button>
                            </form>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    )
}

export default Header