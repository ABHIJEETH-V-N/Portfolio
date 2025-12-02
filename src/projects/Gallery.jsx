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
        "ga/12.png",
        "ga/13.png",
        "ga/14.png",
        "ga/15.png"
    ];

    // Function to open the lightbox
    const openLightbox = (src) => {
        setLightboxImage(src);src/projects/Gallery.jsx
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        setLightboxImage(null);
    };
    return (
        <div>
            <div className="poster">
                <h1>Gallery</h1></div><br/>
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
                        <img src={lightboxImage} alt="Full View" className="lib" />
                        <img src={lightboxImage} alt="Full View" className="li" />
                        <br/><br/>

                        <div className="opt">
                            <a id="author" class="fa-solid fa-circle"/>
                            <a id="close" className="fa-solid fa-xmark" onClick={closeLightbox}/>
                            <a id="download" className="fa-solid fa-download"  href={lightboxImage} download="hyper"/> 
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
