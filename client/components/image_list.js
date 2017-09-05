import React from 'react';
import ImageDetails from './image_details';

const IMAGES = [
    { title: 'Pen', link: 'https://www.placecage.com/c/600/400' },
    { title: 'Pine Tree', link: 'https://www.placecage.com/600/400' },
    { title: 'Mug', link: 'https://www.placecage.com/g/600/400' }
];

const ImageList = () => {
    const RenderedImages = IMAGES.map(function(image) {
        return <ImageDetails />
    });

    return (
        <ul>
            { RenderedImages }
        </ul>
    )
};

export default ImageList;