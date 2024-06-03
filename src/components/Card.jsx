import React, { useState } from 'react';
import CardModal from './CardModal';

const Card = ({ image, title, subheading, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className='flex items-center gap-4'>
        <h2 className='text-center mb-4 text-blue-700 font-extrabold text-2xl'>Basic Cards</h2>
            
        </div>
      <img className="w-full h-48 object-cover" src={image} alt="Card image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{subheading}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          onClick={openModal}
        >
          View More
        </button>
      </div>
      {isModalOpen && <CardModal image={image} title={title} subheading={subheading} description={description} onClose={closeModal} />}
    </div>
  );
};

export default Card;
