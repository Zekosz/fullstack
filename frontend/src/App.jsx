import { useEffect, useState } from 'react';

function App() {
    const [queryResult, setQueryResult] = useState([]);

    useEffect(() => {
        fetch('http://108.143.27.225:3000/api')
            .then((response) => response.json())
            .then((result) => {
                setQueryResult(result);
            });
    }, []);
    

    return (
        <>
            <div className="query-result">
                <h2>Players from Database:</h2>
                <ul className="players-list">
                    {queryResult.map((item, index) => (
                        <li key={index} className="players-item">
                            <div className="players-info">
                                <strong>Name:</strong> {item.name}
                            </div>
                            <div className="players-info">
                                <strong>Club:</strong> {item.club}
                            </div>
                            <div className="players-info">
                                <strong>Age:</strong> {item.age}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
