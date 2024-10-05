import { useState } from 'react';

const DualRangeSlider = () => {
    // Initialize min and max state
    const [minVal, setMinVal] = useState(20);
    const [maxVal, setMaxVal] = useState(80);
    const min = 0;
    const max = 100;

    // Handler for min change
    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxVal - 1); // Ensure min doesn't exceed max
        setMinVal(value);
    };

    // Handler for max change
    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minVal + 1); // Ensure max doesn't go below min
        setMaxVal(value);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="relative w-full">
                {/* Range slider background (between min and max values) */}
                <div
                    className="absolute bg-blue-500 h-2 rounded-full"
                    style={{
                        left: `${(minVal / max) * 100}%`,
                        right: `${100 - (maxVal / max) * 100}%`,
                    }}
                ></div>

                {/* Min range slider */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={handleMinChange}
                    className="absolute w-full h-2 bg-transparent"
                    style={{ zIndex: 5 }}
                />

                {/* Max range slider */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={handleMaxChange}
                    className="absolute w-full h-2 bg-transparent"
                    style={{ zIndex: 6 }}
                />
            </div>

            {/* Display min and max values */}
            <div className="flex justify-between w-full mt-4">
                <div>Min: {minVal}</div>
                <div>Max: {maxVal}</div>
            </div>
        </div>
    );
};

export default DualRangeSlider;
