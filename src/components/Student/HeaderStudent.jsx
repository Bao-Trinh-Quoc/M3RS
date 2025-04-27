import React from 'react';
import '../../components/Admin/Header.css'; // dùng lại css của Header

const HeaderStudent = () => {
  return (
    <header className="header">
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>

      <div className="header-right">
        <img src="/images/logo-bach-khoa-dongphucsongphu2.png" alt="BK logo" className="admin-logo" />
        <span className="username">STUDENT</span>
        <button className="logout-button">Đăng xuất</button>
      </div>
    </header>
  );
};

export default HeaderStudent;
