import {FiGithub, FiLinkedin} from "react-icons/fi"

const FooterSection = () => {
  return (

    
    <div className = "relative bg-black text-white py-16 px-6 mt-0">

        

        <div className='max-w-6xl mx-auto'>

            <div className='flex justify-between items-center'>

                <h2 className='text-3xl font-bold bg-white bg-clip-text text-transparent'>
                    Maksym Ivlikov
                </h2>

                <div>
                    <h3 className='text-xl font-semibold mb-4 text-white'>
                        Connect
                    </h3>

                    <div className="flex space-x-4">
                        <a className="text-white hover:text-violet-600 transition-colors" 
                        href = "#">
                            <FiGithub className="w-5 h-5"/>
                        </a>
                    
                        <a className="text-white hover:text-violet-600 transition-colors" 
                        href = "#">
                            <FiLinkedin className="w-5 h-5"/>
                        </a>
                    </div>

                </div>
                
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm">
                    © Maksym Ivlikov. All rights reserved.
                </p>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a className = "text-gray-500 hover:text-white text-sm transition-colors" 
                    href = "#"> 
                        Privacy Policy
                    </a>
                    <a className = "text-gray-500 hover:text-white text-sm transition-colors" 
                    href = "#"> 
                        Terms of Service
                    </a>
                    <a className = "text-gray-500 hover:text-white text-sm transition-colors" 
                    href = "#"> 
                        Cookie Policy
                    </a>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default FooterSection