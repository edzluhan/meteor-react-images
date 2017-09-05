import React from 'react';

const ImageDetails = (props) => {
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src ={ props.image.link } />
            </div>
            <div className="media-body">
                <h4>{ props.image.title }</h4>
            </div>
        </li>
    )
};

export default ImageDetails;