import React from 'react';
import {iframeStyle, border, text, channelName} from '../css/video_detail.css'

const VideoDetail = ({video}) => {
if(!video){
	return <div>Loading..</div>
}

const videoId = video.id.videoId;
const channelTitle= video.snippet.channelTitle

const url = `https://www.youtube.com/embed/${videoId}`;

	return(	
	<div className="video-detail col-md-8" className={border} >	
		<div className="embed-responsive-16by9">
			<iframe className="embed-responsive-item" className={iframeStyle} src={url} allowFullScreen></iframe>
		</div>
		<div className={border}>
			<div className={text}>{video.snippet.title}</div>
			<a className={channelName} href="https://www.google.com"> {video.snippet.channelTitle} </a>
			<div >{video.snippet.description}</div>
		</div>
	</div>

		);
};



export default VideoDetail;