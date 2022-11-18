import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";


const videoSrc = {
    type: "video",
    sources: [
        {
            // watch?v=f3hNgtuEEHg
            src: "f3hNgtuEEHg",
            provider: "youtube"
        }
    ]
};


const Player = () => {
    return (
        <>
            <Plyr source={videoSrc}/>
        </>
    );
};

export default Player;