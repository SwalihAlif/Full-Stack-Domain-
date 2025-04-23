import React, {useState, useEffect} from "react";

const UptoTen = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const toTen = setInterval(() => {
            setCount((prev) => {
                if (prev === 9) {
                    clearInterval(toTen)
                }
                return prev + 1
            });
        }, 1000);

        return () => clearInterval(toTen)
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-semibold text-blue-600">
          Count Upto 10: {count}
        </h1>
      </div>
      
    )
}

export default UptoTen;