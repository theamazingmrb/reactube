import React from 'react';
import {title, flex, iframeTextBox, listGroupItem, videoPreviewBox, mediaHeading, mediaObject} from '../css/video_list_item.css';

const VideoListItem = ({video, onVideoSelect}) => {	
const imageurl =video.snippet.thumbnails.default.url;


	return(
		<li onClick={() => onVideoSelect(video)} className={listGroupItem, videoPreviewBox}>
		
			<div className={flex} >
				<div className="media-left" >
					<img className={mediaObject} src={imageurl} />
				</div>

				<div className={iframeTextBox}>
					<div className={mediaHeading}>{video.snippet.title}</div>					
					channel: <a className={title} href='https://google.com'> {video.snippet.channelTitle}</a>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;