import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {	
 const imageurl =video.snippet.thumbnails.default.url;

 console.log(video)

	return(
		<li onClick={() => onVideoSelect(video)} className="list-group-item" style={style.liStyle}>
		
			<div className="video-list media" style={ style.flex}>
				<div className="media-left" >
					<img className="media-object" src={imageurl} />
				</div>

				<div style={style.move}>
					<div className="media-heading">{video.snippet.title}</div>					
					channel: <a style={style.title} href='https://google.com'> {video.snippet.channelTitle}</a>
				</div>
			</div>
		</li>
	);
};

const style = {
	liStyle:{
		listStyle: "none",
		width:  "700px",
		margin: "0 auto",
		marginTop: "20px",
		overflow: "hidden"
	},

	flex: {
		display: "flex",
	},

	title: {
		color: "red",

	},

	move: {
		paddingBottom: "20px",
		display: "inline-block",
		paddingLeft: "20px",
		marginBottom: "20px",
		marginTop: "25px"
	},
	
	"list-group-item:hover": {
		backgroundColor: "#eeee"
	}
}



export default VideoListItem;