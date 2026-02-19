import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import WalletModal from './components/WalletModal'
import Hero from './sections/Hero';

function App() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const handleConnectWallet = () => {
    setIsWalletModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-bg-base text-text-primary overflow-x-hidden">
        <Navbar onConnectWallet={handleConnectWallet} />
        <main className="relative">
          <Hero />
        </main>
        <WalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
        />
      </div>
    </>
  )
}

export default App
