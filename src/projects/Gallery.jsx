import React, { useState } from "react";

function Gallery() {
    const [lightboxImage, setLightboxImage] = useState(null); // State for the lightbox image
    const images = [
        "ga/1.png",
        "ga/2.png",
        "ga/3.png",
        "ga/4.png",
        "ga/5.png",
        "ga/6.png",
        "ga/7.png",
        "ga/8.png",
        "ga/9.png",
        "ga/10.png",
        "ga/11.png",
        "ga/12.png"
    ];

    // Function to open the lightbox
    const openLightbox = (src) => {
        setLightboxImage(src);
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div>
            <h1>Gallery</h1>
            {/* Image Gallery */}
            <div className="gallery">
                {images.map((im, index) => (
                    <img
                        src={im}
                        alt={`Image ${index + 1}`}
                        key={index}
                        className="gallery-image"
                        onClick={() => openLightbox(im)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={lightboxImage} alt="Full View" className="lightbox-img" />
                        <br/><br/>
                        <span className="close" onClick={closeLightbox}>
                           close
                        </span>&nbsp;
                        <a className="download" href={lightboxImage} download="hyper">DOWNLOAD </a>&nbsp;
                        <span className=".author">&copy;Created By HYPER VISUALS</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
