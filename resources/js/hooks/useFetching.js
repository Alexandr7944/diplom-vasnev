import { useEffect, useState } from 'react';

const useFetching = ( url, opts = {}) => {
    const [ data, setData ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    useEffect(() => {
        setLoading(true);
        const fethData = async () => {
            try {
                const response = await fetch(url, opts);
                if (!response.ok) throw new Error('Error fetching');
                const result = await response.json();
                setData(result)

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fethData();

        return () => {
            setData(null);
            setError('');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return [data, loading, error]
}

export default useFetching
