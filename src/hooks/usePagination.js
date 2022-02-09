import { useState, useCallback, useEffect } from "react";

export const usePagination = (pageName) => {
    const startPage = +localStorage.getItem(pageName) || 1;
    const [page, setPage] = useState(startPage);

    const handlePageChange = useCallback((_, page) => {
        setPage((state) => (state = page));
    }, []);

    useEffect(() => localStorage.setItem(pageName, page), [page]);

    return [page, handlePageChange];
};
