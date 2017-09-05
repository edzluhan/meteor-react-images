import React from 'react';
import ImageDetails from './image_details';

const IMAGES = [
    { title: 'Grayscale Nick', link: 'https://www.placecage.com/g/600/400' },
    { title: 'Crazy Nick', link: 'https://www.placecage.com/c/600/400' },
    { title: 'Calm Nick', link: 'https://www.placecage.com/600/400' }
];

const ImageList = () => {
    const RenderedImages = IMAGES.map( image =>
        <ImageDetails key={ image.title } image = { image } />
    );

    return (
        <ul className="media-list list-group">
            { RenderedImages }
        </ul>
    )
};

export default ImageList;