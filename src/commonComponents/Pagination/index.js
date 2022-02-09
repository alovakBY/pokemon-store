import { Pagination as MaterialPagination } from "@mui/material";
import { memo } from "react";

export const Pagination = memo(({ currentPage, pagesAmount, onPageChange }) => {
    return (
        <MaterialPagination
            page={currentPage}
            count={pagesAmount}
            variant="outlined"
            shape="rounded"
            onChange={onPageChange}
        />
    );
});
