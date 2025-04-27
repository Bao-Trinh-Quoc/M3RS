import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StudentPage.css';
import SidebarStudent from '../components/Student/SidebarStudent';
import HeaderStudent from '../components/Student/HeaderStudent';
import SearchForm from '../components/Student/SearchForm';
import RoomList from '../components/Student/RoomList';
import BookingList from '../components/Student/BookingList';
import StudentList from '../components/Student/StudentList';
import StudentDetail from '../components/Student/StudentDetail';

const StudentPage = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([
    { id: 1, name: 'H2-101', capacity: 4, equipment: 'Projector' },
    { id: 2, name: 'H2-102', capacity: 6, equipment: 'Whiteboard' },
    { id: 3, name: 'H2-103', capacity: 2, equipment: 'TV Screen' },
  ]);
  const [bookings, setBookings] = useState([
    { id: 1, roomName: 'H2-101', time: '2025-03-02 10:00' },
  ]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    capacity: '',
    equipment: '',
    time: '',
  });
  const [selectedMenu, setSelectedMenu] = useState('booking-list');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || 'null');
    if (!user || user.type !== 'student') {
      navigate('/login/student');
    }
  }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    alert('Chức năng tìm kiếm sẽ được triển khai');
  };

  const filteredRooms = rooms.filter(room => {
    return (
      (searchCriteria.capacity === '' || room.capacity >= parseInt(searchCriteria.capacity)) &&
      (searchCriteria.equipment === '' || room.equipment.toLowerCase().includes(searchCriteria.equipment.toLowerCase()))
    );
  });

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const handleBooking = () => {
    if (!selectedRoom || !searchCriteria.time) {
      alert('Vui lòng chọn phòng và thời gian đặt phòng');
      return;
    }
    const newBooking = {
      id: bookings.length + 1,
      roomName: selectedRoom.name,
      time: searchCriteria.time,
    };
    setBookings([...bookings, newBooking]);
    alert(`Đặt phòng thành công cho phòng ${selectedRoom.name} vào lúc ${searchCriteria.time}`);
    setSelectedRoom(null);
    setSearchCriteria({ capacity: '', equipment: '', time: '' });
  };

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="admin-container">
      <SidebarStudent onMenuSelect={handleMenuSelect} />
      <HeaderStudent />
      <div className="main-content">
        <div className="student-page">
          {selectedMenu === 'booking-list' && <h1>Danh sách đặt phòng</h1>}
          {selectedMenu === 'room-list' && <h1>Trạng thái phòng học</h1>}
          {selectedMenu === 'student' && <h1>Danh sách sinh viên</h1>}

          {selectedMenu === 'booking-list' && (
            <>
              <BookingList bookings={bookings} />
            </>
          )}

          {selectedMenu === 'room-list' && (
            <>
              <SearchForm
                searchCriteria={searchCriteria}
                onSearchChange={handleSearchChange}
                onSearch={handleSearch}
              />

              <RoomList
                rooms={filteredRooms}
                selectedRoom={selectedRoom}
                onRoomSelect={handleRoomSelect}
              />

              {selectedRoom && (
                <section>
                  <h2>Đặt phòng: {selectedRoom.name}</h2>
                  <button onClick={handleBooking}>Xác nhận đặt phòng</button>
                </section>
              )}
            </>
          )}

          {selectedMenu === 'student' && (
            <div>
              <StudentList onSelectStudent={handleStudentSelect} />
              <StudentDetail student={selectedStudent} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
