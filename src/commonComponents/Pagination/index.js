import { Pagination } from "@mui/material";
import { memo } from "react";

export const PaginationRounded = memo(
    ({ currentPage, pagesAmount, onPageChange }) => {
        return (
            <Pagination
                page={currentPage}
                count={pagesAmount}
                variant="outlined"
                shape="rounded"
                onChange={onPageChange}
            />
        );
    }
);
