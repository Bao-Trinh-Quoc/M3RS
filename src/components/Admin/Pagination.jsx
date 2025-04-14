export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="pagination">
      <button className="page-button">1</button>
      <button className="page-button">2</button>
      <button className="page-button">3</button>
      {totalPages > 4 && <span>...</span>}
      {totalPages > 4 && <button className="page-button">{totalPages}</button>}
    </div>
  );
}