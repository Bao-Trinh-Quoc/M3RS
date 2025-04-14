import React, { useState } from 'react';
import RegistrationCard from './RegistrationCard'; // Đảm bảo đường dẫn đúng
import Pagination from './Pagination'; // Import Pagination nếu có

// Dữ liệu giả lập cho danh sách đăng ký
const dummyRequests = [
  { room: 'H2-102', student: 'Nguyễn Văn A', time: 'Tiết 2-5 (3/4/2025)' },
  { room: 'H2-105', student: 'Trần Thị B', time: 'Tiết 6-7 (4/4/2025)' },
  { room: 'H2-106', student: 'Lê Văn C', time: 'Tiết 1-3 (5/4/2025)' },
  { room: 'H2-107', student: 'Phan Thị D', time: 'Tiết 4-5 (6/4/2025)' },
  { room: 'H2-108', student: 'Nguyễn Thị E', time: 'Tiết 2-6 (7/4/2025)' },
  // Thêm các yêu cầu vào đây nếu cần
];

const ConfirmList = () => {
  // Dữ liệu phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Hàm phân trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Tính toán các yêu cầu hiển thị theo trang
  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = dummyRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  return (
    <div>
      <h2>Danh sách cần xác nhận</h2>

      <div className="cards">
        {currentRequests.map((request, index) => (
          <RegistrationCard key={index} data={request} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={Math.ceil(dummyRequests.length / itemsPerPage)} paginate={paginate} />
    </div>
  );
};

export default ConfirmList;
