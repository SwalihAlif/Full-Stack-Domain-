import React, { useEffect, useState } from "react";

const DelayedHeading = () => {
    const [showHeading, setShowHeading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHeading(true)

        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            {showHeading && <h1>Hello after 3 seconds</h1>}
        </div>
    )
}

export default DelayedHeading;