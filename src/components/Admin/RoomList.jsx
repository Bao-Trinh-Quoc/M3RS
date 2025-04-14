// src/components/Admin/RoomList.jsx
import React from 'react';

const RoomList = () => {
  const rooms = [
    { name: 'H2-101', status: 'Available' },
    { name: 'H2-102', status: 'Occupied' },
    { name: 'H2-103', status: 'Available' },
    { name: 'H2-104', status: 'Under Maintenance' },
  ];

  return (
    <div>
      <h2>Danh sách phòng</h2>
      <table>
        <thead>
          <tr>
            <th>Tên phòng</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.name}</td>
              <td>{room.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
