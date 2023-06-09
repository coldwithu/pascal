import React, { useEffect, useState, useRef } from "react";

const ProgressBar = ({progress}) => {
    const size = 80;
    const center = size / 2;
    const strokeWidth = 12;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const circleOneStroke = '#D9D9D9';
    const circleTwoStroke = '#1257D8';
    const progressOffset = circumference - progress / 100 * circumference;
    return(
        <svg className="svg" width={size} height={size}>
            <circle
                className="svg-circle-bg"
                stroke={circleOneStroke}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
            />
            <circle
                className="svg-circle"
                stroke={circleTwoStroke}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
            />
            <text className="svg-circle-text" x={center}  y={center + 5}>
                {progress}%
            </text>
        </svg>
    )
}

export default ProgressBar;