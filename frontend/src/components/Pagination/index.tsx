import { Pagination as BSPagination } from "react-bootstrap";
import "./styles.scss";

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  totalPages: number;
}

export default function Pagination({ currentPage, setCurrentPage, totalPages }: IPaginationProps) {
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  return (
      <BSPagination unselectable="on" className="justify-content-center">
        <BSPagination.First onClick={handleFirstPage} />
        <BSPagination.Prev onClick={handlePreviousPage} />
        {/* <BSPagination.Ellipsis /> */}
        {Array.from(Array(totalPages), (x, pageNumber) => {
          pageNumber += 1;
          return (
            <BSPagination.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </BSPagination.Item>
          );
        })}
        {/* <BSPagination.Ellipsis /> */}
        <BSPagination.Next onClick={handleNextPage} />
        <BSPagination.Last onClick={handleLastPage} />
      </BSPagination>
  );
}
