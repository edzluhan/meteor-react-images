import React from 'react';
import ImageDetails from './image_details';

const IMAGES = [
    { title: 'Grayscale Nick', link: 'https://www.placecage.com/g/600/400' },
    { title: 'Crazy Nick', link: 'https://www.placecage.com/c/600/400' },
    { title: 'Calm Nick', link: 'https://www.placecage.com/600/400' }
];

const ImageList = () => {
    const RenderedImages = IMAGES.map(function(image) {
        return <ImageDetails image = { image } />
    });

    return (
        <ul>
            { RenderedImages }
        </ul>
    )
};

export default ImageList;