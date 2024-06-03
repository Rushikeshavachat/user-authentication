import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from "./components/Home"
import About from './components/About';
import Contact from "./components/Contact"
import Login from './pages/Login';
import Card from "./components/Card";
import SignupPage from './pages/SignupPage';

const cardData = [

  {
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    title: 'Beautiful Landscape',
    subheading: 'Nature',
    description: 'A beautiful landscape view of the mountains during sunset.'
  },
  {
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    title: 'Cityscape',
    subheading: 'Urban',
    description: 'A stunning view of the city skyline at night.'
  },
  {
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    title: 'Forest Path',
    subheading: 'Nature',
    description: 'A serene path through the dense forest.'
  },
  {
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    title: 'Mountain Range',
    subheading: 'Nature',
    description: 'A majestic view of a mountain range.'
  },
  {
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    title: 'City Lights',
    subheading: 'Urban',
    description: 'The vibrant lights of the city at night.'
  },
  {
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    title: 'Calm Beach',
    subheading: 'Nature',
    description: 'A peaceful beach with golden sands and blue waters.'
  }
];

const App = () => {
  return (
    <Router>
         <div className="flex flex-col flex-1">
          <Navbar />
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  subheading={card.subheading}
                  description={card.description}
                />
              ))}
            </div>
          <main className="flex-1 p-6">
           <Routes>
              {/* <Route exact path="/" element={<Home/>} /> */}
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<SignupPage/>} />
              
              </Routes>
          
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;



