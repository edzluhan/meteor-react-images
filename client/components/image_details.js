import React from 'react';
import VotesBar from './votes_bar';

const ImageDetails = (props) => {
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src ={ props.image.link } />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{ props.image.title }</h4>
                <p>{ props.image.description }</p>
                <VotesBar ups={ props.image.ups } downs={ props.image.downs } />
            </div>
        </li>
    )
};

export default ImageDetails;