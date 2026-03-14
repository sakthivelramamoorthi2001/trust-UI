import React from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

// images
import logoJpg from "../assets/img/logo/Annamalai12  1.jpg";
import logoPng from "../assets/img/logo/Annamalai12 1.png";
import logoCopy from "../assets/img/logo/Annamalai12  1 - Copy.jpg";
import aboutShape1 from "../assets/images/shapes/about-three-shape-1.png";
import aboutShape2 from "../assets/images/shapes/about-three-shape-2.png";
import abtUsImg from "../assets/img/abt-us-1.jpg";
import frame106 from "../assets/img/thumbs/Frame 106.jpg";
import frame107 from "../assets/img/thumbs/Frame 107.jpg";
import frame108 from "../assets/img/thumbs/Frame 108.jpg";
import manageTrust1 from "../assets/img/thumbs/manage-trust-1.jpg";
import team1 from "../assets/team/team-1.webp";
import team2 from "../assets/team/team-2.webp";
import team3 from "../assets/team/team-3.webp";
import team4 from "../assets/team/team-4.webp";
import team5 from "../assets/team/team-5.webp";
import advisor1 from "../assets/img/thumbs/advisor-1.jpg";
import advisor2 from "../assets/img/thumbs/advisor-2.jpg";
import advisor3 from "../assets/img/thumbs/advisor-3.jpg";
import icon1 from "../assets/img/icons/icon-1.svg";
import annamLogo from "../assets/img/thumbs/Annamalai_logo.jpg";
import event1 from "../assets/img/event-1.jpg";
import event2 from "../assets/img/event-2.jpg";
import Header from './Headers';
import Footer from './Footer';
import WhoWeAre from './WhoWeAre';
  import { useState } from "react";
import HomeWhoWeAre from './HomeWhoWeAre';

function Aboutus() {



   useEffect(() => {   // stat counter animation
    const counters = document.querySelectorAll(".stat-number");
    const speed = 400;
  
    counters.forEach((counter) => {
      const value = +counter.getAttribute("data-target");
      let current = 0;
  
      const animate = () => {
        const increment = value / speed;
  
        if (current < value) {
          current += increment;
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(animate);
        } else {
          if (value >= 3000) counter.innerText = "3K+";
          else if (value === 95) counter.innerText = "95%";
          else counter.innerText = value + "+";
        }
      };
  
      animate();
    });
  }, []);


 function StatsSection() {

  const statsData = [
    { target: 3000, text: "Students Trained" },
    { target: 100, text: "Scholarships Granted" },
    { target: 25, text: "Research Grants" },
    { target: 50, text: "Rural Development Projects" },
    { target: 20, text: "Global Partner Institutions" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((value, i) => {
          if (value + 10 >= statsData[i].target) {
            return statsData[i].target;
          }
          return value + 10;
        })
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">

          {statsData.map((item, index) => (
            <div className="stat-item" key={index}>
              <h3 className="stat-number">{counts[index]}</h3>
              <p className="stat-text">
                {item.text.split(" ").slice(0, -1).join(" ")}
                <br />
                {item.text.split(" ").slice(-1)}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}


  useEffect(() => {

     AOS.init({
          once: true,
          duration: 1000,
        });
    
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
                    <li><a href="blog.html">About Us</a></li>
                  </ul>
                </div>
                <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <h2>About Us</h2>
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

<HomeWhoWeAre dontWantButton={true}  />
      <section className="about-three" style={{display:"none"}}>
        <div className="about-three__shape-1 d-none d-sm-none d-md-none d-lg-block">
          <img src={aboutShape1} alt="" />
        </div>
        <div className="about-three__shape-2 d-none d-sm-none d-md-none d-lg-block">
          <img src={aboutShape2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-7">
              <section className="about-section">
             <WhoWeAre />
              </section>

            </div>
            <div className="col-xl-5 col-md-5 wow fadeInRight" data-wow-delay=".3s">
              <div className="about-three__right">
                <div className="about-three__right-img">
                  <img src={abtUsImg} alt="" />
                  <div className="about-three__round-text-box" style={{display:"none"}}>
                    <div className="about-three__round-text-box-inner  rotate-me">
                      <div className="about-three__curved-circle">
                        <span className="char1"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.230769em", transform: "rotate(-173.573deg)", transformOrigin: "center 5.92308em" }}>-</span>
                        <span className="char2"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.115385em", transform: "rotate(-168.517deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char3"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.346154em", transform: "rotate(-161.776deg)", transformOrigin: "center 5.92308em" }}>y</span>
                        <span className="char4"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-152.227deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char5"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.346154em", transform: "rotate(-142.678deg)", transformOrigin: "center 5.92308em" }}>a</span>
                        <span className="char6"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-133.129deg)", transformOrigin: "center 5.92308em" }}>r</span>
                        <span className="char7"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-124.141deg)", transformOrigin: "center 5.92308em" }}>s</span>
                        <span className="char8"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.230769em", transform: "rotate(-119.647deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char8"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.115385em", transform: "rotate(-117.962deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char9"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.384615em", transform: "rotate(-110.659deg)", transformOrigin: "center 5.92308em" }}>o</span>
                        <span className="char10"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-100.548deg)", transformOrigin: "center 5.92308em" }}>f</span>
                        <span className="char11"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.115385em", transform: "rotate(-94.3695deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char12"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-88.1906deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char13"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.346154em", transform: "rotate(-78.6413deg)", transformOrigin: "center 5.92308em" }}>x</span>
                        <span className="char14"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-69.092deg)", transformOrigin: "center 5.92308em" }}>p</span>
                        <span className="char15"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-60.1044deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char16"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-51.1168deg)", transformOrigin: "center 5.92308em" }}>r</span>
                        <span className="char17"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.153846em", transform: "rotate(-44.3761deg)", transformOrigin: "center 5.92308em" }}>i</span>
                        <span className="char18"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-37.6355deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char19"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.384615em", transform: "rotate(-27.5244deg)", transformOrigin: "center 5.92308em" }}>n</span>
                        <span className="char20"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.384615em", transform: "rotate(-16.29deg)", transformOrigin: "center 5.92308em" }}>c</span>
                        <span className="char21"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(-6.17896deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char22"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.115385em", transform: "rotate(2.84217e-14deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char23"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.230769em", transform: "rotate(5.05551deg)", transformOrigin: "center 5.92308em" }}>-</span>
                        <span className="char24"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.115385em", transform: "rotate(10.111deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char25"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.346154em", transform: "rotate(16.8517deg)", transformOrigin: "center 5.92308em" }}>y</span>
                        <span className="char26"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(26.401deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char27"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.346154em", transform: "rotate(35.9503deg)", transformOrigin: "center 5.92308em" }}>a</span>
                        <span className="char28"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(45.4996deg)", transformOrigin: "center 5.92308em" }}>r</span>
                        <span className="char29"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(54.4872deg)", transformOrigin: "center 5.92308em" }}>s</span>
                        <span className="char30"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.115385em", transform: "rotate(60.6661deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char31"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.384615em", transform: "rotate(67.9685deg)", transformOrigin: "center 5.92308em" }}>o</span>
                        <span className="char31"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.384615em", transform: "rotate(67.9685deg)", transformOrigin: "center 5.92308em" }}>o</span>
                        <span className="char32"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(78.0795deg)", transformOrigin: "center 5.92308em" }}>f</span>
                        <span className="char33"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.115385em", transform: "rotate(84.2585deg)", transformOrigin: "center 5.92308em" }}>&nbsp;</span>
                        <span className="char34"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(90.4375deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char35"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.346154em", transform: "rotate(99.9868deg)", transformOrigin: "center 5.92308em" }}>x</span>
                        <span className="char36"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(109.536deg)", transformOrigin: "center 5.92308em" }}>p</span>
                        <span className="char37"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(118.524deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char38"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(127.511deg)", transformOrigin: "center 5.92308em" }}>r</span>
                        <span className="char39"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.153846em", transform: "rotate(134.252deg)", transformOrigin: "center 5.92308em" }}>i</span>
                        <span className="char40"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(140.993deg)", transformOrigin: "center 5.92308em" }}>e</span>
                        <span className="char41"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.384615em", transform: "rotate(151.104deg)", transformOrigin: "center 5.92308em" }}>n</span>
                        <span className="char42"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.384615em", transform: "rotate(162.338deg)", transformOrigin: "center 5.92308em" }}>c</span>
                        <span className="char43"
                          style={{ position: "absolute", left: "50%", marginLeft: "-0.307692em", transform: "rotate(172.449deg)", transformOrigin: "center 5.92308em" }}>e</span>
                      </div>
                    </div>
                    <div className="about-three__count count-box">
                      <h3 className="count-text" data-stop="15" data-speed="1500">00</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {StatsSection()} */}

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">

            <div className="stat-item">
              <h3 className="stat-number" data-target="3000">0</h3>
              <p className="stat-text">
                Students
                <br />
                Trained
              </p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number" data-target="100">0</h3>
              <p className="stat-text">
                Scholarships
                <br />
                Granted
              </p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number" data-target="25">0</h3>
              <p className="stat-text">
                Research
                <br />
                Grants
              </p>
            </div>

            <div className="stat-item d-none d-sm-none d-md-none d-lg-block">
              <h3 className="stat-number" data-target="50">0</h3>
              <p className="stat-text">
                Rural Devlopment
                <br />
                Projects
              </p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number" data-target="20">0</h3>
              <p className="stat-text">
                Global Partner
                <br />
                Institutions
              </p>
            </div>

          </div>
        </div>
      </section>
{false &&
      <section className="what-we-do-section p-t-60 p-b-md-100 p-t-xs-80 p-b-xs-80">
        <div className="container why-us-section">
          <div className="section-top-2">
          {false &&  <div className="left text-center">
              <div className="common-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src={icon1} alt="icon-1" />
                <span>Why Us</span>
              </div>
              <p>
              {/* Education & Scholarship Program */}

              </p>
              <div className="common-title text-center d-none d-sm-none d-md-none d-lg-block d-xl-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <p>We believe that everyone deserves access to opportunities that empower them to learn, innovate, and grow. By bridging academia, research, and compassion, Annamalai Foundation is redefining how education transforms lives.</p>
              </div>
              <div className="common-title text-center d-block d-sm-block d-md-block d-lg-none d-xl-none" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <p>We believe that everyone deserves access to opportunities that empower them to learn...</p>
              </div>
            </div>}
          </div>
          <div className="row row-gap-md-5 row-gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="project-card text-center">
                <div className="thumb">
                  <a href='/'>
                    <div className="image-container">
                      <img src={frame106} alt="thumb-14" />
                    </div>
                  </a>
                  <div className="content">
                    <h5>Innovation & Research</h5>
                    <p>
                      Access global experts, cutting-edge facilities, and collaborative networks to accelerate your research.
                    </p>
                    {/* <div className="details-btn">
                      <a className='e-primary-btn has-icon is-hover-white' href='/'>
                        KNOW MORE
                        <span className="icon-wrap">
                          <span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span>
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="project-card text-center">
                <div className="thumb">
                  <a href='/'>
                    <div className="image-container">
                      <img src={frame107} alt="thumb-15" />
                    </div>
                  </a>
                  <div className="content">
                    <h5>Global Partnerships</h5>
                    <p>
                      Partner with us to foster cross-disciplinary projects and expand your research impact globally.
                    </p>
                    {/* <div className="details-btn">
                      <a className='e-primary-btn has-icon is-hover-white' href='/'>
                        KNOW MORE
                        <span className="icon-wrap">
                          <span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span>
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="project-card text-center">
                <div className="thumb">
                  <a href='/'>
                    <div className="image-container">
                      <img src={frame108} alt="thumb-16" />
                    </div>
                  </a>
                  <div className="content">
                    <h5>Community Development</h5>
                    <p>
                      Transform your ideas into reality with mentorship, resources, and connections to research partners.
                    </p>
                    {/* <div className="details-btn">
                      <a className='e-primary-btn has-icon is-hover-white' href='/'>
                        KNOW MORE
                        <span className="icon-wrap">
                          <span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span>
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
        {/* <!-- <div className="shape-10">
		<img src="assets/img/shapes/shape-10.webp" alt="shape-10"/>
	</div>
	<div className="shape-11">
		<img src="assets/img/shapes/shape-11.webp" alt="shape-11"/>
	</div> --> */}
      </section>}

      <section className="team-section">
        <div className="team-head">
          <h2>Meet Our Dedicated Team</h2>
          <p>
            Join a thriving community of researchers, innovators, and experts committed to advancing
            knowledge and creating meaningful impact.
          </p>
        </div>

        <h2>Managing Trustee</h2>
        <div className="team-container-3" style={{ marginBottom: "80px" }}>
          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={manageTrust1} alt="Member 1" />
              </a>
              <h4>Mr. Perumal Annamalai</h4>
              <p className="role">Former ISRO Director, India</p>
            </div>
          </div>

          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="280" fill="black" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>	  </a>
              <h4>Mrs. Mahima Kamal</h4>
              <p className="role">Human Health and Performance (HH&P) Directorate</p>
            </div>
          </div>

          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="280" fill="black" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>	  </a>
              <h4>Mrs. Sridevi Perumal</h4>
              <p className="role">Aerospace engineer</p>
            </div>
          </div>
        </div>

        <h2>Science Review Committee</h2>
        <div className="team-container">
          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={team1} alt="Member 1" />
              </a>
              <h4>Padmashri Dr. Annadurai Mylswamy</h4>
              <p className="role">Former ISRO Director, India</p>
            </div>
          </div>

          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={team2} alt="Member 2" />
              </a>
              <h4>Dr. Antony Jeevarajan</h4>
              <p className="role">Human Health and Performance (HH&P) Directorate</p>
            </div>
          </div>

          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={team3} alt="Member 2" />
              </a>
              <h4>Dr. Swati Mohan</h4>
              <p className="role">Aerospace engineer</p>
            </div>
          </div>

          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={team4} alt="Member 2" />
              </a>
              <h4>Prof. Sultan Ahmed Ismail</h4>
              <p className="role">Member, TN State Commission</p>
            </div>
          </div>
          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={team5} alt="Member 2" />
              </a>
              <h4>Prof. Na.Ganesan</h4>
              <p className="role">Director, NASA, USA</p>
            </div>
          </div>
        </div>

        <h2>Advisors</h2>
        <div className="team-container-3">
          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={advisor1} alt="Member 2" />
              </a>
              <h4>Dr. Padmanaban Mohanan</h4>
              <p className="role">Seoul Natl. Univ. Korea</p>
            </div>
          </div>

          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={advisor2} alt="Member 2" />
              </a>
              <h4>Prof.R.Kurinji Vendhan</h4>
              <p className="role">Director, Tamil University, India</p>
            </div>
          </div>

          <div className="team-card">
            <div className="p-2">
              <a href="#">
                <img src={advisor3} alt="Member 2" />
              </a>
              <h4>Dr.Thiruvengadam Arumugam</h4>
              <p className="role">MD Anderson R&D Lab, USA</p>
            </div>
          </div>
        </div>

      </section>

      <section className="latest-blog-section p-t-80 p-t-xs-80 p-b-80 p-b-xs-20 p-b-md-20 p-b-lg-20 p-b-xl-20">
        <div className="container">
          <div className="row justify-content-between m-b-xl-120 m-b-lg-100 m-b-md-80">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="latest-blog-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="common-title text-start">
                  <h2>Check Latest Blog Post</h2>
                </div>
                <div className="text">
                  <p>Join a thriving community of researchers, innovators, and experts committed to advancing knowledge.</p>
                </div>
                <div className="details-btn1">
                  <a className='e-primary-btn has-icon is-hover-white' href='/'>
                    EXPLORE ALL POST
                    <span className="icon-wrap">
                      <span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-6 col-12">
              <div className="blog-slider-active" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="blog-card">
                        <div className="thumb">
                          <a href='/econest/blog-details'><img alt="thumb-5" src={event1} /></a>
                          {/* <!-- <div className="category">
                            <a href='/econest/blog-details'>Forest</a>
                          </div> --> */}
                          <div className="event-date">
                            <h2>09</h2>
                            <h5>Jan</h5><span>2025</span>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-top p-0">
                            <div className="title">
                              <h3><a href='/econest/blog-details'>INNOVATE 25 – AI FEST 2025</a></h3>
                            </div>
                            <div className="text">
                              <p>Tirupattur’s Biggest Technology Expo. Platinum Jubilee Special Edition Sacred Heart College. </p>
                            </div>
                          </div>
                          <div className="content-bottom">
                            <a className='e-primary-btn has-icon has-small' href='/blog'>READ
                              <span className="icon-wrap"><span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span></span></a>
                            <div className="social-share">
                              <button className="total-shared"><i className="fa-solid fa-share-nodes"></i>
                                <span>367</span></button>
                              <div className="social-links">
                                <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com"><i className="fab fa-x-twitter"></i></a>
                                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="blog-card">
                        <div className="thumb">
                          <a href='/econest/blog-details'><img alt="thumb-6" src={event2} /></a>
                          {/* <!-- <div className="category">
                            <a href='/econest/blog-details'>Recycle</a>
                          </div> --> */}
                          <div className="event-date">
                            <h2>24</h2>
                            <h5>Feb</h5><span>2025</span>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-top p-0">
                            <div className="title">
                              <h3><a href='/econest/blog-details'>Expert Network</a></h3>
                            </div>
                            <div className="text">
                              <p>Connect directly with Subject Matter Experts who can guide, mentor, and collaborate on your projects.y</p>
                            </div>
                          </div>
                          <div className="content-bottom">
                            <a className='e-primary-btn has-icon has-small' href='/blog'>READ
                              <span className="icon-wrap"><span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span></span></a>
                            <div className="social-share">
                              <button className="total-shared"><i className="fa-solid fa-share-nodes"></i>
                                <span>367</span></button>
                              <div className="social-links">
                                <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com"><i className="fab fa-x-twitter"></i></a>
                                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="blog-card">
                        <div className="thumb">
                          <a href='/econest/blog-details'><img alt="thumb-5"  src={event1} /></a>
                          {/* <!-- <div className="category">
                            <a href='/econest/blog-details'>Forest</a>
                          </div> --> */}
                          <div className="event-date">
                            <h2>09</h2>
                            <h5>Jan</h5><span>2025</span>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-top p-0">
                            <div className="title">
                              <h3><a href='/econest/blog-details'>Research Resources</a></h3>
                            </div>
                            <div className="text">
                              <p>Access cutting-edge research facilities, databases, and tools through our partner institutions.</p>
                            </div>
                          </div>
                          <div className="content-bottom">
                            <a className='e-primary-btn has-icon has-small' href='/blog'>READ
                              <span className="icon-wrap"><span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span></span></a>
                            <div className="social-share">
                              <button className="total-shared"><i className="fa-solid fa-share-nodes"></i>
                                <span>367</span></button>
                              <div className="social-links">
                                <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com"><i className="fab fa-x-twitter"></i></a>
                                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="blog-card">
                        <div className="thumb">
                          <a href='/econest/blog-details'><img alt="thumb-6"  src={event2}/></a>
                          {/* <!-- <div className="category">
                            <a href='/econest/blog-details'>Recycle</a>
                          </div> --> */}
                          <div className="event-date">
                            <h2>24</h2>
                            <h5>Feb</h5><span>2025</span>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-top p-0">
                            <div className="title">
                              <h3><a href='/econest/blog-details'>Collaborative Environment</a></h3>
                            </div>
                            <div className="text">
                              <p>Work alongside international scholars in a supportive ecosystem designed for innovation.</p>
                            </div>
                          </div>
                          <div className="content-bottom">
                            <a className='e-primary-btn has-icon has-small' href='/econest/blog-details'>KNOW
                              MORE
                              <span className="icon-wrap"><span className="icon"><i className="fas fa-arrow-right"></i><i className="fas fa-arrow-right"></i></span></span></a>
                            <div className="social-share">
                              <button className="total-shared"><i className="fa-solid fa-share-nodes"></i>
                                <span>367</span></button>
                              <div className="social-links">
                                <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com"><i className="fab fa-x-twitter"></i></a>
                                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-pagination"></div>
              </div>
            </div>
          </div>
          {/* <!-- <div className="latest-blog-row-bottom" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="row-bottom-thumb">
              <div className="thumb"><img alt="thumb" src="assets/img/thumbs/thumb-84.webp" /></div>
            </div>
            <div className="row row-gap-4 align-items-center">
              <div className="col-md-6 col-12">
                <div className="common-title text-start">
                  <h2>Get interesting <span><img alt="icon" src="assets/img/icons/icon-12.svg" /></span> news
                    <span><i className="fa-solid fa-arrow-right-long"></i></span></h2>
                </div>
                <p>Sign up to get the latest updates!</p>
              </div>
              <div className="col-md-6 col-12">
                <form className="form-1">
                  <div className="input-wrap-2 m-b-20">
                    <input placeholder="example@gmail.com" type="email" />
                  </div>
                  <button className="e-primary-btn has-icon" type="submit">Subscribe Now
                    <span className="icon-wrap"><span className="icon"><i className="fa-regular fa-arrow-right"></i><i className="fa-regular fa-arrow-right"></i></span></span>
                  </button>
                </form>
              </div>
            </div>
          </div> --> */}
        </div>
        {/* <!-- <div className="shape"><img alt="shape" src="assets/img/shapes/shape-38.webp" /></div> --> */}
      </section>

    <Footer />

    </div>
  );
}
export default Aboutus;