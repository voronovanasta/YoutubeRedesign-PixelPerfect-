import './App.css';
import { Routes, Route } from 'react-router-dom';
import ChannelPage from './pages/ChannelPage/ChannelPage';
import HomePage from './pages/HomePage/HomePage';
import VideoPage from './pages/Videopage/VideoPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/channel' element={<ChannelPage />} />
      <Route path='/video' element={<VideoPage />} />
    </Routes>
  );
}

export default App;
