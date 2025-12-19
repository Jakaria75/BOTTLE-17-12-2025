
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Bottle from './bottle';

function App() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Bottle user={user} />
            </Suspense>
        </>
    )
}

export default App
