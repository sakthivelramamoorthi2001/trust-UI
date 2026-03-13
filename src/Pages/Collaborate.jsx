import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { mediaListAPI } from '../Hoc/api';
import Footer from './Footer';
import Header from './Headers';
import useAuth from '../auth/useAuth';
import Aos from 'aos';
import ImageComp from './ImageComp';


function Collaborate() {

  const { mediaList } = useAuth();

  console.log(
    mediaList.data.filter(i => i.PostType == "COLLAB")
  );


  const navigate = useNavigate()

  console.log(mediaList, 'mediaList');


  // fetch collaborate media items (postType=COLLAB)
  const [collabItems, setCollabItems] = useState([]);
  const [loading, setLoading] = useState({
    collabMediaLoading: true
  });
  useEffect(() => {
    Aos.init({ once: true });
  }, []);





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
                    <li><a href="blog.html">Collaborate</a></li>
                  </ul>
                </div>
                <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <h2>Collaborate</h2>
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

      <section className="services-section bg-cream p-t-100 p-t-xs-50 p-b-70 p-b-xs-0">
        <div className="container">
          <div className="row justify-content-center text-center m-b-50 m-b-xs-40">
            <div className="col-xl-12">
              <div className="common-subtitle" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                <img alt="icon-1" src="/src/assets/img/icons/icon-2.svg" /> <span>What We Do</span>
              </div>
              <div className="common-title m-b-0" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                <h2>Join a thriving community of researchers, innovators, and experts committed to advancing knowledge and creating meaningful impact.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {mediaList.loading ? (
            <div>Loading...</div>
          ) : (
            <div
              className="row"
            >
              {mediaList.data && mediaList.data.filter(i => i.PostType == "COLLAB").length > 0 ? (
                mediaList.data.filter(i => i.PostType == "COLLAB").map((item, idx) => {
                  let parsedContent = {};

                  try {
                    parsedContent = JSON.parse(item?.content || "{}");
                  } catch (e) {
                    parsedContent = {};
                  }



                  return (<div className="col-xl-4 m-b-30" key={item.id || idx}>
                    <div className="project-card style-service">
                      <div className="thumb">
                        <a href={item.link || "/"}>
                          <ImageComp
                            alt={item.title || item.filename || "thumb"}
                            src={
                              item.url ||
                              (item.key
                                ? process.env.REACT_APP_MEDIA_BASE_URL
                                  ? `${process.env.REACT_APP_MEDIA_BASE_URL.replace(/\/$/, "")}/${String(item.key).replace(/^\//, "")}`
                                  : item.key
                                : "/src/assets/img/thumbs/thumb-68.webp")
                            }
                          />
                        </a>

                        {/* this one is hide other will run */}

                        <div className="content">
                          <h5>{parsedContent.title || "New Collab"}</h5>
                          <p>{item.description || item.caption || item.alt || ""}</p>
                          <div className="details-btn">
                            <a
                              className="e-primary-btn has-icon is-hover-white"
                              onClick={() => {
                                navigate(`/preview/${item.id}`)
                              }}
                            >
                              KNOW MORE
                              <span className="icon-wrap">
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>)
                }
                )
              ) : (
                <div className="col-12">No items found for Collaborate.</div>
              )}
            </div>
          )}
        </div>

      </section>



      <Footer />

    </div>
  );
}
export default Collaborate;