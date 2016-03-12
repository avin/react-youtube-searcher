import React from 'react';

export default class extends React.Component {
    static propTypes = {
        video: React.PropTypes.object
    };

    render(){
        let video = this.props.video;
        let onVideoSelect = this.props.onVideoSelect;

        let imageUrl = video.snippet.thumbnails.default.url;
        let title = video.snippet.title;
        return (
            <li className="list-group-item" onClick={onVideoSelect.bind(this, video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img src={imageUrl} alt="" className="media-object"/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                            {title}
                        </div>
                    </div>
                </div>

            </li>
        )
    }
}