import { useEffect, useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [queryResult, setQueryResult] = useState([]);

    useEffect(() => {
        fetch('/api')
            .then((response) => response.json())
            .then((result) => {
                setQueryResult(result);
            });
    }, []);

    return (
        <>
            <div className="header">
                <h1>Vite + React</h1>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Click to Increment Count
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>

            <div className="query-result">
                <h2>Cities from Database:</h2>
                <ul className="city-list">
                    {queryResult.map((item, index) => (
                        <li key={index} className="city-item">
                            <div className="city-info">
                                <strong>Name:</strong> {item.name}
                            </div>
                            <div className="city-info">
                                <strong>Population:</strong> {item.population}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;