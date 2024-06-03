import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { Search } from 'lucide-react';
import { MdPerson } from 'react-icons/md';
import LoginModal from "./LoginModal"
import RegisterModal from './RegisterModal';
import { AiOutlineUser } from 'react-icons/ai';
const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <nav className="bg-blue-900 w-full h-full flex items-center justify-center flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <Link to="/" className="text-2xl font-bold text-white"><PublishedWithChangesIcon className='flex items-center gap-4 text-white'/>  MATERIAL PRO </Link>
            <div className='flex items-center justify-center ml-4 flex-col gap-4'>
              <Search className='text-white font-bold text-lg block cursor-pointer'/>
            </div>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link to="/login" className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/register" className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
            </div>
            <div className="ml-10 flex items-baseline space-x-6">
             <button className=' px-4 py-4 rounded-lg flex items-center bg-red-800 text-white hover:bg-teal-800 cursor-pointer transition ease-in-out'>
              UPGRADE PRO
             </button>
            </div>
            <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl tracking-tight"><AiOutlineUser className='text-2xl flex items-center gap-4'/></Link>
      </div>
      <div className="flex items-center">
        <button onClick={openLoginModal} className="bg-transparent text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 mr-4">
          <MdPerson size={24} />
        </button>
        <button onClick={openRegisterModal} className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
          Register
        </button>
      </div>
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
    </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
