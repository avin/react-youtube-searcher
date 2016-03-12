import React from 'react';

export default class extends React.Component {

    render(){
        const video = this.props.video;

        if (!video){
            return (
                <div>Loading...</div>
            )
        }

        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const description = video.snippet.description;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return(
            <div className="video-details com-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} className="embed-responsive-item"></iframe>
                </div>

                <div className="details">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        )
    }
}