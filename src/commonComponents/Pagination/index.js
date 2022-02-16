import { Pagination as MaterialPagination, useMediaQuery } from "@mui/material";
import { memo } from "react";

export const Pagination = memo(({ currentPage, pagesAmount, onPageChange }) => {
    const mobile = useMediaQuery("(max-width:375px)");
    return (
        <MaterialPagination
            size={mobile ? "small" : "medium"}
            page={currentPage}
            count={pagesAmount}
            variant="outlined"
            shape="rounded"
            onChange={onPageChange}
        />
    );
});
