import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
import Header from "./Headers";
import Footer from "./Footer";
import WhoWeAre from "./WhoWeAre";
import { useState } from "react";
import HomeWhoWeAre from "./HomeWhoWeAre";

function Programers() {
  useEffect(() => {
    // stat counter animation
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

    // duplicate to make 6

    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
      const interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((value, i) => {
            if (value + 10 >= statsData[i].target) {
              return statsData[i].target;
            }
            return value + 10;
          }),
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

  const whyUsData = [
    {
      title: "Education & Scholarship Program",
      desc: "We provide educational support and scholarships for underprivileged students to pursue higher studies, skill training, and global exposure.",
      img: frame106,
      includes: [
        "Merit-based scholarships",
        "Rural school development",
        "Career guidance workshops",
        "International student exchange",
      ],
    },
    {
      title: "Research & Innovation Program",
      desc: "We identify and support innovators working in emerging fields like AI, IoT, Robotics, and Clean Energy.",
      img: frame107,
      includes: [
        "Seed funding for student projects",
        "Mentorship by global experts",
        "International research partnerships",
        "Publication and patent support",
      ],
    },
    {
      title: "International Collaboration Program",
      desc: "We believe knowledge should travel across borders. Our collaboration initiatives bring Indian students and global institutions together for mutual learning.",
      img: frame108,
      includes: [
        "Student and faculty exchange",
        "Joint research and workshops",
        "Education policy dialogues",
        "Global research conferences",
      ],
    },
    {
      title: "Community Development Program",
      desc: "We work to uplift communities through social, cultural, and environmental initiatives.",
      img: frame106,
      includes: [
        "Rural education and digital literacy",
        "Women entrepreneurship training",
        "Health and nutrition camps",
        "Temple heritage and environmental projects",
      ],
    },
  ];

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
                style={{
                  backgroundImage:
                    "url(https://econest-html.netlify.app/econest/assets/img/bg/breadcrumb-bg.webp)",
                }}
              >
                <div
                  className="breadcrumb-nav"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="blog.html">Programs</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="breadcrumb-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <h2>Programs</h2>
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

      <section className="what-we-do-section p-t-60 p-b-md-100 p-t-xs-80 p-b-xs-80">
        <div className="container why-us-section">
          <div className="section-top-2">
            {true && (
              <div className="left text-center">
                <div
                  className="common-subtitle"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <img src={icon1} alt="icon-1" />
                  <span>Why Us</span>
                </div>
                <p>{/* Education & Scholarship Program */}</p>
                <div
                  className="common-title text-center d-none d-sm-none d-md-none d-lg-block d-xl-block"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <p>
                    We believe that everyone deserves access to opportunities
                    that empower them to learn, innovate, and grow. By bridging
                    academia, research, and compassion, Annamalai Foundation is
                    redefining how education transforms lives.
                  </p>
                </div>
                <div
                  className="common-title text-center d-block d-sm-block d-md-block d-lg-none d-xl-none"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <p>
                    We believe that everyone deserves access to opportunities
                    that empower them to learn...
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className="row row-gap-md-5 row-gap-4 m-b-30"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            {whyUsData.map((item, index) => (
              <div className="col-xl-4 col-md-6 col-sm-12" key={index}>
                <div className="project-card text-center">
                  <div className="thumb">
                    <div className="image-container">
                      <img src={item.img} alt={item.title} />
                    </div>

                    <div className="content">
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>

                      {/* <ul className="program-list">
                        {item.includes.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- <div className="shape-10">
        <img src="assets/img/shapes/shape-10.webp" alt="shape-10"/>
    </div>
    <div className="shape-11">
        <img src="assets/img/shapes/shape-11.webp" alt="shape-11"/>
    </div> --> */}
      </section>

      <Footer />
    </div>
  );
}
export default Programers;
