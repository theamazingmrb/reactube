import React from 'react';

const VideoListItem = ({video}) => {
 const imageurl =video.snippet.thumbnails.default.url;

	return(
		<li className="list-group-item" style={liStyle}>
		
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageurl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

const liStyle = {
	listStyle: "none",
	display: "inline",
}



export default VideoListItem;