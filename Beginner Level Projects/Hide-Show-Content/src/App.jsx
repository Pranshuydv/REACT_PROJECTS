import React, { useState } from 'react'

const App = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <div>
                <button onClick={() => {
                    if (isVisible === true) {
                        setIsVisible(false);
                    } else {
                        setIsVisible(true);
                    }
                }}>
                    {isVisible ? "Hide" : "Show"}
                </button>
                {isVisible && <p>This is the content</p>}
            </div>
        </>
    )
}

export default App