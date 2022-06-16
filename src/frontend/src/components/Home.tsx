import reactLogo from '../assets/react.svg'
import { useState } from 'react'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo" alt="React logo" />
                </a>
            </div>
            <h1 className="nhsuk-heading-l">Welcome</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </>
    );
}

export default Home;