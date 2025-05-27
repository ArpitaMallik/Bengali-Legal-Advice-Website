import React, { useState } from 'react';
import Header from './components/Header';
import UserMode from './components/UserMode';
import AdminMode from './components/AdminMode';
import Footer from './components/Footer';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const toggleAdminMode = () => {
    setIsAdmin(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isAdmin={isAdmin} toggleAdminMode={toggleAdminMode} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-500 ${isAdmin ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {!isAdmin && <UserMode />}
          </div>
          
          <div className={`transition-all duration-500 ${!isAdmin ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {isAdmin && <AdminMode />}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;