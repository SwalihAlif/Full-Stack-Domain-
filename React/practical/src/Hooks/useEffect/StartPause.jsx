import React, { useEffect, useState } from 'react'

const StartPause = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isRunning])

    const handleReset = () => {
        setIsRunning(false);
        setCount(0);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
  <h1 className="text-3xl font-bold text-gray-800">
    Counter with Start, Pause and Reset: {count}
  </h1>
  <div className="space-x-4">
    <button
      onClick={() => setIsRunning(true)}
      className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
    >
      Start
    </button>
    <button
      onClick={() => setIsRunning(false)}
      className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
    >
      Pause
    </button>
    <button
      onClick={handleReset}
      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
    >
      Reset
    </button>
  </div>
</div>

    )
}

export default StartPause;