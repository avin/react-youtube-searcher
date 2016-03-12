import React from 'react';
import ViedeoListItem from './videolistitem';

export default class extends React.Component {

    static propTypes = {
        videos: React.PropTypes.array,
        onVideoSelect: React.PropTypes.func
    };

    render() {

        return (
            <ul className="list-group">
                {this.props.videos.map((video, key) => (
                    <ViedeoListItem
                        key={video.etag}
                        video={video}
                        onVideoSelect={this.props.onVideoSelect}/>
                ))}
            </ul>
        )
    }

}