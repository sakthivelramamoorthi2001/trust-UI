import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Headers';
import Footer from './Footer';
import { mediaListAPI } from '../Hoc/api';
import useAuth from '../auth/useAuth';
import ImageComp from './ImageComp';



function Gallery() {

  const { mediaList } = useAuth();


  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('ALL');


  return (
    <div>
      <Header />

      <section className="breadcrumb-section bg-cream">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-xl-12 col-lg-12">
              <div
                className="breadcrumb-content"
                style={{ backgroundImage: "url(https://econest-html.netlify.app/econest/assets/img/bg/breadcrumb-bg.webp)", }}
              >
                <div className="breadcrumb-nav" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="blog.html">Gallery</a></li>
                  </ul>
                </div>
                <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <h2>Gallery</h2>
                </div>
                <div className="shape-1">
                  {/* <!-- <img src="https://econest-html.netlify.app/econest/assets/img/shapes/shape-1.webp" alt="shape"> --> */}
                </div>
              </div>
            </div>
            {/* <!-- <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                    <img src="https://econest-html.netlify.app/econest/assets/img/thumbs/thumb-1.webp" alt="thumb">
                </div>
            </div> --> */}
          </div>
        </div>
      </section>

      <section className="gallery-section m-t-80 m-t-xs-20">
        {/* Tabs for categories (generated from media parent titles) */}
        <div className="tabs">
          <button className={selectedGroup === 'ALL' ? 'active' : ''} onClick={() => setSelectedGroup('ALL')}>ALL</button>
          {groups.map(g => (
            <button key={g.key} className={selectedGroup === g.key ? 'active' : ''} onClick={() => setSelectedGroup(g.key)}>{g.title}</button>
          ))}
        </div>

        {/* Image gallery (grouped) */}
        <div className="gallery">
          {/* {selectedGroup === 'ALL' ? (
            groups.map(g => (
              <div className={`category-${g.key}`} key={g.key}>
                {g.items.map((it, i) => {
                  const src = it.url || (it.key ? (process.env.REACT_APP_MEDIA_BASE_URL ? `${process.env.REACT_APP_MEDIA_BASE_URL.replace(/\/$/, '')}/${String(it.key).replace(/^\//, '')}` : it.key) : (it.thumbnail || it.filename || '/src/assets/img/thumbs/thumb-32.webp'));
                  const title = it.title || it.filename || g.title || 'Gallery Image';
                  return (
                    <a key={it.id || i} href={src} data-fslightbox={g.key} data-title={title}>
                      <img src={src} alt={title} />
                    </a>
                  );
                })}
              </div>
            ))
          ) : (
            (() => {
              const g = groups.find(x => x.key === selectedGroup);
              if (!g) return <div>No items for this category.</div>;
              return (
                <div className={`category-${g.key}`}>
                  {g.items.map((it, i) => {
                    const src = it.url || (it.key ? (process.env.REACT_APP_MEDIA_BASE_URL ? `${process.env.REACT_APP_MEDIA_BASE_URL.replace(/\/$/, '')}/${String(it.key).replace(/^\//, '')}` : it.key) : (it.thumbnail || it.filename || '/src/assets/img/thumbs/thumb-32.webp'));
                    const title = it.title || it.filename || g.title || 'Gallery Image';
                    return (
                      <a key={it.id || i} href={src} data-fslightbox={g.key} data-title={title}>
                        <img src={src} alt={title} />
                      </a>
                    );
                  })}
                </div>
              );
            })()
          )} */}

          {mediaList.loading ? (
            <div>Loading...</div>
          ) : (

            <div className="events-container" style={{display:'flex'}}>
              {mediaList.data && mediaList.data.filter(i => i.PostType == "GALLERY").length > 0 ? (
                mediaList.data.filter(i => i.PostType == "GALLERY").map((item, idx) => {
                  const src = item.url || (item.key ? (process.env.REACT_APP_MEDIA_BASE_URL ? `${process.env.REACT_APP_MEDIA_BASE_URL.replace(/\/$/, '')}/${String(item.key).replace(/^\//, '')}` : item.key) : '/src/assets/img/event-1.jpg');

                  return <>
                    <div className={`single-category category-${item.id}`} key={item.id}>

                      <a key={item.id || i} href={src}>
                        <ImageComp src={src} alt={""} />
                      </a>
                    </div>
                  </>
                })
              ) : (
                <div className="col-12">No Gallry found.</div>
              )}
            </div>)}
        </div>

      </section >

      <Footer />

    </div >
  );
}
export default Gallery;