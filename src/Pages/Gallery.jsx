import React, { useState } from 'react';
import Header from './Headers';
import Footer from './Footer';
import useAuth from '../auth/useAuth';
import ImageComp from './ImageComp';
import FsLightbox from "fslightbox-react";

function Gallery() {

  const { mediaList } = useAuth();

  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  console.log(mediaList, 'mediaList');

  // Prepare gallery images
  const galleryImages =
    mediaList.data
      ?.filter(i => i.PostType === "GALLERY")
      ?.map(item =>
        item.url) || [];


  console.log(galleryImages, 'galleryImages');


  return (
    <div>

      <Header />

      {/* Breadcrumb */}
      <section className="breadcrumb-section bg-cream">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-xl-12 col-lg-12">
              <div
                className="breadcrumb-content"
                style={{
                  backgroundImage:
                    "url(https://econest-html.netlify.app/econest/assets/img/bg/breadcrumb-bg.webp)"
                }}
              >
                <div className="breadcrumb-nav">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li>Gallery</li>
                  </ul>
                </div>

                <div className="breadcrumb-title">
                  <h2>Gallery</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section m-t-80 m-t-xs-20">
        <div className="container">

          {mediaList.loading ? (
            <div>Loading...</div>
          ) : (

            <div
              className="events-container"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
                gap: "20px"
              }}
            >

              {galleryImages.length > 0 ? (

                galleryImages.map((src, idx) => (
                  <div
                    key={idx}
                    style={{
                      cursor: "pointer",
                      overflow: "hidden",
                      borderRadius: "10px"
                    }}
                  >

                    <ImageComp
                      src={src}
                      alt="gallery"
                      onClick={() => {
                        setSlide(idx + 1);
                        setToggler(!toggler);
                      }}
                    />

                  </div>
                ))

              ) : (
                <div>No Gallery found.</div>
              )}

            </div>

          )}

        </div>
      </section>

      {galleryImages.length > 0 && (
        <FsLightbox
          toggler={toggler}
          sources={galleryImages}
          slide={slide}
        />
      )}
      <Footer />

    </div>
  );
}

export default Gallery;