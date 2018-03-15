import React from 'react';
import VideoListItem from './video_list_item';
import {videoItem} from '../css/video_list.css'

const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return <VideoListItem
					onVideoSelect={props.onVideoSelect} 
					key={video.etag} 
					video={video} />
	})

	return(
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
		)
};

export default VideoList;