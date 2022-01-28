import { useEffect, useState } from "react";

export const useFetching = (asyncFunction) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await asyncFunction();
                setResponse(data);
            } catch (error) {
                setErrors(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return { response, loading, errors };
};
