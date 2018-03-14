import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/search_bar';
import VideoList from '../src/components/video_list';
import VideoDetail from '../src/components/video_detail';
import {blackOut} from '../css/index.css'

const https = require('https');
let query = "kobe"

class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		https.get(`https://polar-journey-41401.herokuapp.com/search/${query}`  , (res) => {
		  let string = ""
		  res.on('data', (d) => {
			 string += d
		  });

		  res.on("end", (d)=>{
		  	let responseObject = JSON.parse(string)
		  	let videoArr = responseObject.items
		  	this.setState({
		  		videos: videoArr,
		  		selectedVideo: videoArr[0]
		  	})
		  })


		}).on('error', (e) => {
		  console.error(e);
		});
		
	}
	
	render() {
		return (
			
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>	


		);
	}
	
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();

		
