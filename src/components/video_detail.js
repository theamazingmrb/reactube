import React from 'react';

const VideoDetail = ({video}) => {
if(!video){
	return <div>Loading..</div>
}

const videoId = video.id.videoId;

const url = `https://www.youtube.com/embed/${videoId}`;

	return(	
	<div className="video-detail col-md-8" style={border}>	
		<div className="video-detail embed-responsive-16by9">
			<iframe className="embed-responsive-item" style={iframeStyle} src={url} allowFullScreen></iframe>
		</div>
		<div className="details">
			<div>{video.snippet.title}</div>
			<div style={text}>{video.snippet.description}</div>
		</div>
	</div>

		);
};

const iframeStyle = {
	height: "400px",
	width: 	"700px",
}

const border = {
	margin: "0 auto",
	width: 	"700px",
}


const text = {
	maxWidth: "700px"
}



export default VideoDetail;