import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (


      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 p-4 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logo & Brand Name */}
        
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 transition-all duration-300">
          <img 
            src={`${import.meta.env.BASE_URL}images/12618.png`}
            alt="Andy's Plumbing Logo" 
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-md object-cover ring-2 ring-blue-500/10 transition-all duration-300" 
          />
          <div>
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-[#f61d05] tracking-tight leading-none transition-all duration-300">
              Andy's
            </h1>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-[#027be3] tracking-wide uppercase mt-0.5 sm:mt-1 block transition-all duration-300">
              Complete Plumbing Service
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-slate-900 tracking-wide uppercase mt-0.5 sm:mt-1 block transition-all duration-300">
              Lic#:1156867
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        
          <nav className="hidden md:flex items-center space-x-3">
          <a 
            href="#Home" 
            className="bg-[#027be3] hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transform transition duration-150 ease-in-out text-sm"
          >
            Home
          </a>
          <a 
            href="#Services" 
            className="bg-[#027be3] hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transform transition duration-150 ease-in-out text-sm"
          >
            Services
          </a>
          <a 
            href="mailto:andyscompleteplumbingservice@gmail.com" 
            className="bg-[#027be3] hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transform transition duration-150 ease-in-out text-sm mr-2"
          >
            Contact
          </a>
          
          <button 
            data-token="1bfceaf3a3a446bbb521a95a13bb63fc" 
            data-orgname="Andys-Complete-Plumbing-Service" 
            className="hcp-button bg-green-600 hover:bg-green-700 active:scale-95 transform text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5 transition duration-150 text-sm tracking-wide"
            onClick={() => window.HCPWidget?.openModal()}
          > 
            Book Online
          </button>
        </nav>

        {/* Mobile Actions & Hamburger Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button 
            data-token="1bfceaf3a3a446bbb521a95a13bb63fc" 
            data-orgname="Andys-Complete-Plumbing-Service" 
            className="hcp-button bg-[#027be3] text-white font-bold py-2 px-4 rounded-full text-xs shadow-sm"
            onClick={() => window.HCPWidget?.openModal()}
          > 
            Book
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col space-y-1">
          <a 
            href="#Home" 
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-700 font-semibold py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-[#027be3] transition"
          >
            Home
          </a>
          <a 
            href="#Services" 
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-700 font-semibold py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-[#027be3] transition"
          >
            Services
          </a>
          <a 
            href="mailto:andyscompleteplumbingservice@gmail.com" 
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-700 font-semibold py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-[#027be3] transition"
          >
            Contact
          </a>
        </div>
      )}
    </header>
     )
    }