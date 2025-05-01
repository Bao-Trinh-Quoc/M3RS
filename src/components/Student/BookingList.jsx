import React from 'react';

const BookingList = ({ bookings }) => {
  const getStatus = (booking) => {
    if (booking.rejected) return 'Bị từ chối';
    if (booking.confirmed) return 'Thành công';
    return 'Đang chờ xác nhận';
  };
  return (
    <section className="booking-section" style={{ marginBottom: '20px' }}>
      <h2>Đặt phòng của bạn</h2>
      {bookings.length === 0 ? (
        <p>Chưa có đặt phòng</p>
      ) : (
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              Phòng: {booking.roomName} - Thời gian: {booking.time}
              <strong> Trạng thái: {getStatus(booking)}</strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BookingList;
