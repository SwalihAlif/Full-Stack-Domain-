import React, {useState, useEffect} from "react";


const AutoIncrement = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const Increment = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000);

        return () => clearInterval(Increment);
    }, [])

    return (
        <div>
            <h1  className="text-3xl font-bold">Auto count: {count}</h1>
        </div>
    )
}

export default AutoIncrement;