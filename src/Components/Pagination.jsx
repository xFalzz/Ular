import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

const PaginationButton = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="relative flex justify-center">
      <div className="pagination-container flex items-center">
        <Pagination
          page={currentPage}
          count={totalPages}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
              sx={{ color: "white" }}
            />
          )}
          onChange={onPageChange}
          sx={{
            "& .MuiPaginationItem-ellipsis": {
              color: "white",
            },
            "& .MuiPagination-ul": {
              justifyContent: "center",
            },
          }}
        />
      </div>
    </div>
  );
};

export default PaginationButton;
