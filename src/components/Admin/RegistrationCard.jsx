export default function RegistrationCard({ data }) {
  return (
    <div className="card">
      <h3>{data.room}</h3>
      <p>Sinh viên: {data.student}</p>
      <p>Thời gian: {data.time}</p>
      <div className="actions">
        <button className="btn btn-approve">Chấp thuận</button>
        <button className="btn btn-reject">Từ chối</button>
      </div>
    </div>
  );
}