import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import AdminPage from './pages/Adminpage';
import ConfirmList from './components/Admin/ConfirmList';
import RoomList from './components/Admin/RoomList';
import LoginPage from './pages/LoginPage';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || 'null');
  
  if (!user || user.type !== 'admin') {
    return <Navigate to="/login/admin" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login/:userType" element={<LoginPage />} />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        >
          <Route path="confirm-list" element={<ConfirmList />} />
          <Route path="room-list" element={<RoomList />} />
        </Route>

        {/* Redirect /admin to /admin/confirm-list */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/confirm-list" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
