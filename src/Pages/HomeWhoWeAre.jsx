import { useEffect, useState } from "react";
import AOS from "aos";
import aboutShape1 from "../assets/images/shapes/about-three-shape-1.png";
import aboutShape2 from "../assets/images/shapes/about-three-shape-2.png";
import aboutPerumal from "../assets/img/abt-us perumalannamalai.jpg";

export default function HomeWhoWeAre({ dontWantButton = false, missonOff = false }) {

  useEffect(() => {
    // circle count
    const counters = document.querySelectorAll(".count-text");

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-stop");
        const speed = +counter.getAttribute("data-speed");
        const current = +counter.innerText;
        const increment = target / (speed / 50);

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);
  const [activeTab, setActiveTab] = useState("history");

  useEffect(() => {
    AOS.init({
      delay: 1000,
    });
  }, []);
  return (
    <section className="about-three">
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
              <div className="container">
                <h2>Who We Are</h2>

                <p className="about-intro">
                  Annamalai Foundation is an international non-profit
                  organization established to promote education, research, and
                  social service.
                </p>

                {/* TAB BUTTONS */}
                <div className="tab-buttons">
                  <button
                    className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
                    onClick={() => setActiveTab("history")}
                  >
                    CORE VALUES
                  </button>

                   <button
                    className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
                    onClick={() => setActiveTab("mission")}
                  >
                    MISSION & VISION
                  </button>

                  <button
                    className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
                    onClick={() => setActiveTab("vision")}
                  >
                    ABOUT FOUNDER
                  </button>
                </div>

                {/* CORE VALUES */}
                {activeTab === "history" && (
                  <div className="tab-content active">
                    <div className="scroll">
                      <div className="abt-para-container">
                        <div className="para">
                          <h4>
                            Integrity :
                            <span>
                              {" "}
                              We act with honesty, transparency, and
                              accountability.
                            </span>
                          </h4>
                        </div>

                        <div className="para">
                          <h4>
                            Innovation :
                            <span>
                              {" "}
                              We believe in the power of creative thinking.
                            </span>
                          </h4>
                        </div>

                        <div className="para">
                          <h4>
                            Service :
                            <span>
                              {" "}
                              Our purpose is rooted in compassion and humanity.
                            </span>
                          </h4>
                        </div>

                        <div className="para">
                          <h4>
                            Collaboration :
                            <span> Together, we achieve greater impact.</span>
                          </h4>
                        </div>

                        <div className="para">
                          <h4>
                            Excellence :
                            <span>
                              {" "}
                              We strive for the highest standards in every
                              project.
                            </span>
                          </h4>
                        </div>
                      </div>

                      <div className="abt-unique-para">
                        <h4>What Makes Us Unique :</h4>
                        <ul>
                          <li>
                            Dual presence in India and the USA, enabling
                            international collaboration.
                          </li>
                          <li>
                            Focus on both academic excellence and community
                            welfare.
                          </li>
                          <li>
                            Blend of modern innovation with cultural and ethical
                            values.
                          </li>
                          <li>
                            Transparent operations with measurable impact.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {!dontWantButton && (
                      <div className="details-btn1 m-t-xs-15 m-t-sm-15">
                        <a
                          className="e-primary-btn has-icon is-hover-white"
                          href="/aboutus"
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
                    )}
                  </div>
                )}

                {/* MISSION & VISION */}
                {activeTab === "mission" && (
                  <div className="tab-content">
                    <div className="scroll">
                      <p>
                        To empower students, educators, and innovators through
                        access to quality education and research.
                      </p>

                      <ul>
                        <li>
                          To build bridges between Indian and international
                          institutions.
                        </li>
                        <li>
                          To support technology-driven solutions for social and
                          environmental challenges.
                        </li>
                        <li>
                          To serve communities through sustainable development
                          programs.
                        </li>
                      </ul>

                      <p>
                        To create a world where knowledge, innovation, and
                        compassion work together to uplift humanity.
                      </p>
                    </div>

                  {!dontWantButton &&  <div className="details-btn1">
                      <a
                        className="e-primary-btn has-icon is-hover-white"
                        href="/"
                      >
                        KNOW MORE
                        <span className="icon-wrap">
                          <span className="icon">
                            <i className="fas fa-arrow-right"></i>
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>}
                  </div>
                )}

                {/* ABOUT FOUNDER */}
                {activeTab === "vision" && (
                  <div className="tab-content">
                    <div className="scroll">
                      <p>
                        <span style={{ fontWeight: 600 }}>
                          A Grand Heritage :
                        </span>{" "}
                        Perumal’s paternal grandfather, Mr. N. Arunchalam
                        Chettiar, was a highly respected figure in the region,
                        known for his honesty, traditional wisdom, and service
                        to the community. His grandmother, Mrs. Muniyammal,
                        lived an extraordinary life of 106 years— remaining
                        active and independent till her final days without the
                        need for walking sticks or medical support.
                      </p>

                      <p>
                        <span style={{ fontWeight: 600 }}>
                          The Visionary Father: A Village Scientist :
                        </span>{" "}
                        Perumal’s father, Mr. Annamalai Chettiar (fondly called
                        "Kannu"), was born as the fifth child in his family. He
                        lived a full and purposeful life for 83 years, passing
                        away on June 2, 2023. A man of exceptional ingenuity, he
                        introduced practical solutions to uplift the local
                        villages. From setting up flour mills, rice grinding
                        machines, and battery-powered lighting systems for
                        students, to supporting educational and farming
                        innovations, he was endearingly known by his peers as
                        the “Village Scientist.” His work inspired a generation
                        of rural progress and educational focus.
                      </p>
                    </div>

                   {!dontWantButton && <div className="details-btn1">
                      <a
                        className="e-primary-btn has-icon is-hover-white"
                        href="/"
                      >
                        KNOW MORE
                        <span className="icon-wrap">
                          <span className="icon">
                            <i className="fas fa-arrow-right"></i>
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>}
                  </div>
                )}
              </div>
            </section>
          </div>
          <div
            className="col-xl-5 col-md-5 wow fadeInRight"
            data-wow-delay=".3s"
          >
            <div className="about-three__right">
              <div className="about-three__right-img">
                <img src={aboutPerumal} alt="" />
                <div className="about-three__round-text-box">
                  <div className="about-three__round-text-box-inner  rotate-me">
                    <div className="about-three__curved-circle">
                      <span
                        className="char1"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.230769em",
                          transform: "rotate(-173.573deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        -
                      </span>
                      <span
                        className="char2"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.115385em",
                          transform: "rotate(-168.517deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char3"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.346154em",
                          transform: "rotate(-161.776deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        y
                      </span>
                      <span
                        className="char4"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-152.227deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char5"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.346154em",
                          transform: "rotate(-142.678deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        a
                      </span>
                      <span
                        className="char6"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-133.129deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        r
                      </span>
                      <span
                        className="char7"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-124.141deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        s
                      </span>
                      <span
                        className="char8"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.230769em",
                          transform: "rotate(-119.647deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char8"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.115385em",
                          transform: "rotate(-117.962deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char9"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.384615em",
                          transform: "rotate(-110.659deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        o
                      </span>
                      <span
                        className="char10"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-100.548deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        f
                      </span>
                      <span
                        className="char11"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.115385em",
                          transform: "rotate(-94.3695deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char12"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-88.1906deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char13"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.346154em",
                          transform: "rotate(-78.6413deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        x
                      </span>
                      <span
                        className="char14"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-69.092deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        p
                      </span>
                      <span
                        className="char15"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-60.1044deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char16"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-51.1168deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        r
                      </span>
                      <span
                        className="char17"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.153846em",
                          transform: "rotate(-44.3761deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        i
                      </span>
                      <span
                        className="char18"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-37.6355deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char19"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.384615em",
                          transform: "rotate(-27.5244deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        n
                      </span>
                      <span
                        className="char20"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.384615em",
                          transform: "rotate(-16.29deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        c
                      </span>
                      <span
                        className="char21"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(-6.17896deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char22"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.115385em",
                          transform: "rotate(2.84217e-14deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char23"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.230769em",
                          transform: "rotate(5.05551deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        -
                      </span>
                      <span
                        className="char24"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.115385em",
                          transform: "rotate(10.111deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char25"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.346154em",
                          transform: "rotate(16.8517deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        y
                      </span>
                      <span
                        className="char26"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(26.401deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char27"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.346154em",
                          transform: "rotate(35.9503deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        a
                      </span>
                      <span
                        className="char28"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(45.4996deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        r
                      </span>
                      <span
                        className="char29"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(54.4872deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        s
                      </span>
                      <span
                        className="char30"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.115385em",
                          transform: "rotate(60.6661deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char31"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.384615em",
                          transform: "rotate(67.9685deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        o
                      </span>
                      <span
                        className="char31"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.384615em",
                          transform: "rotate(67.9685deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        o
                      </span>
                      <span
                        className="char32"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(78.0795deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        f
                      </span>
                      <span
                        className="char33"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.115385em",
                          transform: "rotate(84.2585deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        className="char34"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(90.4375deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char35"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.346154em",
                          transform: "rotate(99.9868deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        x
                      </span>
                      <span
                        className="char36"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(109.536deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        p
                      </span>
                      <span
                        className="char37"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(118.524deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char38"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(127.511deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        r
                      </span>
                      <span
                        className="char39"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.153846em",
                          transform: "rotate(134.252deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        i
                      </span>
                      <span
                        className="char40"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(140.993deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                      <span
                        className="char41"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.384615em",
                          transform: "rotate(151.104deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        n
                      </span>
                      <span
                        className="char42"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.384615em",
                          transform: "rotate(162.338deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        c
                      </span>
                      <span
                        className="char43"
                        style={{
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-0.307692em",
                          transform: "rotate(172.449deg)",
                          transformOrigin: "center 5.92308em",
                        }}
                      >
                        e
                      </span>
                    </div>
                  </div>
                  <div className="about-three__count count-box">
                    <h3 className="count-text" data-stop="15" data-speed="1500">
                      00
                    </h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
