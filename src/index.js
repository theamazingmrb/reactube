import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/search_bar';
import VideoList from '../src/components/video_list';
import VideoDetail from '../src/components/video_detail';
import {} from './css/index.css';

const https = require('https');

class App extends Component {
	constructor(props){
		super(props);
		

		this.state = { 
			videos: [],
			selectedVideo: null,
		};

		this.videoSearch("kobe")

			
	}

	videoSearch(term){

		https.get(`https://polar-journey-41401.herokuapp.com/search/${term}`  , (res) => {
		  let string = ""
		  res.on('data', (d) => {
			 string += d
		  });

		  res.on("end", (d)=>{
		  	console.log("request returned")
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
		const videoSearch = _.debounce((term) => {this.videoSearch(term); console.log("lo")}, 300)
		return (
			
			<div>
				<SearchBar onUpdate={videoSearch}/>
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



