import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = (props) => {
//     console.log(props);
//     return <div>{props.videos.length}</div>
// };

               //---- BY DESTRUCTURING---
    
const VideoList = ( {videos, onVideoSelect} ) => {
    const renderedList =  videos.map((video)=> {
        return <VideoItem 
        key={video.id.videoId} 
        onVideoSelect= {onVideoSelect} 
        video = {video}/>
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
};


export default VideoList;
