import { BellIcon, Cog6ToothIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between ml-6 mr-6 mt-3 md:px-[30px] md:py-[10px] border-b border-gray-200 bg-white rounded-[20px]">
      {/* Top section for mobile */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-xl font-bold">
          <span className="text-primary">O</span>
          <span className="text-accent">Salean</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Navigation links - shown on desktop, conditional on mobile */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0 rounded-[20px]`}>
        <a href="#" className="nav-link active py-2 md:py-0 px-[10px] rounded-[20px]">Dashboard</a>
        <a href="#" className="nav-link py-2 md:py-0 px-[10px] rounded-[20px]">Analytics</a>
        {/* <a href="#" className="nav-link py-2 md:py-0 px-[10px] rounded-[20px]">Invoice</a> */}
        <a href="#" className="nav-link py-2 md:py-0 px-[10px] rounded-[20px]">Products</a>
      </div>

      {/* Right side icons and profile - shown on desktop, conditional on mobile */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex items-center gap-4 w-full md:w-auto pl-4 pr-4 mt-4 md:mt-0 justify-end rounded-[20px]`}>
        <button className="p-1.5 hover:bg-gray-100 rounded-[20px]">
          <BellIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-1.5 rounded-[20px]">
          <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex items-center gap-3 ml-4">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden md:block bg-gray-100 px-3 py-1 rounded-[20px]">
            <p className="text-sm font-medium">Kim Minchae</p>
            <p className="text-xs text-gray-500">minchaekim@hello.mail</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;