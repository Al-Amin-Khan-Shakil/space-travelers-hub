import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Rockets from './components/Rockets';
import MyProfile from './components/ProfilePage/MyProfile';
import Missions from './components/Mission/Missions';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
