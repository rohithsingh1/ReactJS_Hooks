import React from 'react'
import './ImageCarousel.css'

const images=[
    {
        src: 'https://picsum.photos/id/600/600/400',
        alt: 'Forest',
    },
    {
        src: 'https://picsum.photos/id/100/600/400',
        alt: 'Beach',
    },
    {
        src: 'https://picsum.photos/id/200/600/400',
        alt: 'Yak',
    },
    {
        src: 'https://picsum.photos/id/300/600/400',
        alt: 'Hay',
    },
    {
        src: 'https://picsum.photos/id/400/600/400',
        alt: 'Plants',
    },
    {
        src: 'https://picsum.photos/id/500/600/400',
        alt: 'Building',
    },
];

function ImageCarousel({images}) {
    return (
        <div>
            {images.map(({alt, src}) => (
                <img key={src} alt={alt} src={src} width="100%" />
            ))}
        </div>
    );
}

function ImageCarouselParent() {
    return (
        <div>
            <h2>Image Carousel</h2>
            <ImageCarousel images={images} />
        </div>
    )
}

export default ImageCarouselParent