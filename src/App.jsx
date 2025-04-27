
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import AdminPage from './pages/Adminpage';
import ConfirmList from './components/Admin/ConfirmList';  // Sửa lại đường dẫn import đúng

import RoomList from './components/Admin/RoomList';  // Đảm bảo đường dẫn đúng
import StudentPage from './pages/StudentPage';


function App() {
  return (
    <Router>
    <Routes>
      {/* Route chính cho trang home */}
      <Route path="/" element={<HomePage />} />

      {/* Route cho trang student */}
      <Route path="/login/student" element={<StudentPage />} />

      {/* Route chính cho trang admin */}
      <Route path="/admin" element={<AdminPage />}>
        {/* Route con cho trang admin */}
        <Route path="confirm-list" element={<ConfirmList />} /> {/* Định nghĩa confirm-list trong admin */}
        <Route path="room-list" element={<RoomList />} /> {/* Định nghĩa confirm-list trong admin */}
      </Route>
    </Routes>
  </Router>
);
}

export default App;
