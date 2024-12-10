import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error(`Failed to fetch with url: ${url}`);
                }

                const data = await res.json();
                setData(data);
                setError(null);
            } catch (error) {
                console.error(error);
                setError(error);
            }
            setIsPending(false);
        };

        fetchData();
    }, [url]);

    return { data, isPending, error };
}
