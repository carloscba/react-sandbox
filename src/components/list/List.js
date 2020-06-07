import React, { useState, useEffect } from 'react';
import { useTickers } from '../../hooks/useTickers/useTickers';

const List = (props) => {
    const [currentTicker, setCurrentTicker] = useState({});
    const [tickers, loading ] = useTickers();
    
    if (loading) return <React.Fragment><p>Loading...</p></React.Fragment>    
    if (tickers) {
        return (
            <React.Fragment>
                { (currentTicker) && <h1>{ currentTicker.symbol }</h1> }
                <ul>
                    { 
                        tickers.map( (ticker, i) => {
                            return <li key={ i } onClick={ () => setCurrentTicker(ticker) }>Item { ticker.symbol }</li>
                        }) 
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default List;