import { useState, useEffect } from 'react';

export function useTickers() {
    const [tickers, setTickers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => { 
        async function loadTickers() {
            setLoading(true);
            const response = await fetch('https://api.coinlore.net/api/tickers/');
            const { data } = await response.json();
            setTickers(data);
            setLoading(false);
        }
        loadTickers();
    }, []);

    return [tickers, loading];
}