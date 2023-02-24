import { Routes, Route } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import IndexPage from './pages';
import TestPage from './pages/test';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Cross Origin Communication</h1>
        <div>
          <ConnectButton />
        </div>
      </header>
      <div>
        <Routes>
          <Route index path='/' element={<IndexPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
