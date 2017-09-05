import React from 'react';

const ImageDetails = (props) => {
    return (
        <li>
            <h3>{ props.image.title }</h3>
            <img src ={ props.image.link } />
        </li>
    )
};

export default ImageDetails;