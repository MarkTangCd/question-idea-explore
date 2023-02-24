import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages';
import Index2Page from './pages/index2';
import TestPage from './pages/bridge';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route index path='/' element={<IndexPage />} />
          <Route path='/index2' element={<Index2Page />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
