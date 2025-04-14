import React, { useState } from 'react';
import Sidebar from '../components/Admin/Sidebar';
import Header from '../components/Admin/Header';
import RegistrationCard from '../components/Admin/RegistrationCard';
import Pagination from '../components/Admin/Pagination';
import '../styles/Adminpage.css';
import RoomList from '../components/Admin/RoomList'; 

import { Outlet } from 'react-router-dom';


const dummyRequests = [
  { room: 'H2-102', student: 'Nguyễn Văn A', time: 'Tiết 2-5 (3/4/2025)' },
  { room: 'H2-105', student: 'Trần Thị B', time: 'Tiết 6-7 (4/4/2025)' },
  
];

export default function AdminPage() {
  const [studentName] = useState('Nguyễn Văn A'); // Tên sinh viên
  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    console.log('Đăng xuất');
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <Header />
      <div className="main-content" >
        <Outlet /> {/* Nội dung sẽ hiện ra tại đây khi click sidebar */}
      </div>
     
     </div>


  );
};