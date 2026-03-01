import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer';
import Header from './Headers';
import { mediaListAPI } from '../Hoc/api';
import useAuth from '../auth/useAuth';
import Aos from 'aos';
import ImageComp from './ImageComp';


function Blog() {
  const { mediaList } = useAuth();

  const navigate = useNavigate()

  useEffect(() => {
    Aos.init()
  }, [])
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
                    <li><a href="blog.html">Blog</a></li>
                  </ul>
                </div>
                <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <h2>Blog</h2>
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

      <section class="blog-section p-t-120 p-b-80 p-t-lg-80 p-b-lg-80 p-t-md-60 p-b-md-60 p-t-xs-60 p-b-xs-60">
        <div class="container">
          {mediaList.loading ? (
            <div>Loading...</div>
          ) : (
            <div class="row" >
              {mediaList.data && mediaList.data.filter(i => i.PostType == "BLOG").length > 0 ? (
                mediaList.data.filter(i => i.PostType == "BLOG").map((item, idx) => {
                  const src = item.url || (item.key ? (process.env.REACT_APP_MEDIA_BASE_URL ? `${process.env.REACT_APP_MEDIA_BASE_URL.replace(/\/$/, '')}/${String(item.key).replace(/^\//, '')}` : item.key) : '/src/assets/img/thumbs/thumb-32.webp');
                  const title = item.title || item.filename || 'Untitled';
                  const desc = item.description || item.caption || '';
                  const date = item.date || item.createdAt || item.publishedAt || null;
                  let day = '', month = '';
                  if (date) {
                    try {
                      const d = new Date(date);
                      day = d.getDate();
                      month = d.toLocaleString('default', { month: 'short' });
                    } catch (e) { }
                  }
                  return (
                    <div class="col-xl-4 col-md-6 col-sm-12 m-b-30" key={item.id || idx}>
                      <div class="blog-card-2">
                        <div class="thumb">
                          <a
                            onClick={() => {
                              navigate(`/preview/${item.id}`)
                            }}
                          >
                            <ImageComp src={src} alt={title} />
                          </a>
                          {date && (
                            <div class="event-date">
                              <h2>{day}</h2>
                              <h5>{month}</h5>
                            </div>
                          )}
                        </div>
                        <div class="content">
                          <div class="content-top p-0 m-b-20">
                            <div class="author">
                              <div class="admin">
                                <i class="fa fa-circle-user"></i>
                                <span>Admin</span>
                              </div>
                              <div class="solar">
                                <i class="fa fa-bookmark"></i>
                                <span>Solar</span>
                              </div>
                            </div>
                            <div class="title">
                              <h3>
                                <a onClick={() => {
                                  navigate(`/preview/${item.id}`)
                                }}>{title}</a>
                              </h3>
                            </div>
                          </div>
                          <div class="details-btn">
                            <Link to={`/preview/${item.id}`} class='e-primary-btn has-icon is-hover-white' >
                              KNOW MORE
                              <span class="icon-wrap">
                                <span class="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div class="col-12">No blog posts found.</div>
              )}
            </div>)}

          {/* <!-- <div class="row justify-content-center text-center m-t-20" data-aos="fade-up" data-aos-duration="1000"
				data-aos-delay="200">
			<div class="col-xl-6">
				<div class="project-pagination">
					<ul>
						<li class="active"><a href="#">01</a></li>
						<li><a href="#">02</a></li>
						<li><a href="#">03</a></li>
						<li class="icon"><a href="#"><i class="fa-regular fa-arrow-right"></i></a></li>
					</ul>
				</div>
			</div>
		</div> --> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Blog;