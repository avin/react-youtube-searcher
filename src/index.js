import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetail';


const API_KEY = 'AIzaSyCC-H0ijL5VLto83bIySRTVtNS1uvMy5Yw';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    constructor(props) {
        super(props);

        this.videoSearch('surf');

        console.log('mount');
    }

    handleSelectVideo(selectedVideo) {
        this.setState({selectedVideo})
    };

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            console.log(videos);
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={this.handleSelectVideo.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));