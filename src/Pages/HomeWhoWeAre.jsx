import { useEffect, useState } from "react";
import  AOS  from "aos";
export default function HomeWhoWeAre() {
  const [activeTab, setActiveTab] = useState("history");

  useEffect(() => {
    AOS.init({
        delay:1000,
    })
  },[])
  return (
    <div className="container">
      <h2>Who We Are</h2>

      <p className="about-intro">
        Annamalai Foundation is an international non-profit organization
        established to promote education, research, and social service.
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
                    We act with honesty, transparency, and accountability.
                  </span>
                </h4>
              </div>

              <div className="para">
                <h4>
                  Innovation :
                  <span> We believe in the power of creative thinking.</span>
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
                    We strive for the highest standards in every project.
                  </span>
                </h4>
              </div>
            </div>

            <div className="abt-unique-para">
              <h4>What Makes Us Unique :</h4>
              <ul>
                <li>
                  Dual presence in India and the USA, enabling international
                  collaboration.
                </li>
                <li>
                  Focus on both academic excellence and community welfare.
                </li>
                <li>
                  Blend of modern innovation with cultural and ethical values.
                </li>
                <li>Transparent operations with measurable impact.</li>
              </ul>
            </div>
          </div>

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
        </div>
      )}

      {/* MISSION & VISION */}
      {activeTab === "mission" && (
        <div className="tab-content">
          <div className="scroll">
            <p>
              To empower students, educators, and innovators through access to
              quality education and research.
            </p>

            <ul>
              <li>
                To build bridges between Indian and international institutions.
              </li>
              <li>
                To support technology-driven solutions for social and
                environmental challenges.
              </li>
              <li>
                To serve communities through sustainable development programs.
              </li>
            </ul>

            <p>
              To create a world where knowledge, innovation, and compassion work
              together to uplift humanity.
            </p>
          </div>

          <div className="details-btn1">
            <a className="e-primary-btn has-icon is-hover-white" href="/">
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
      )}

      {/* ABOUT FOUNDER */}
      {activeTab === "vision" && (
        <div className="tab-content">
          <div className="scroll">
            <p>
              <span style={{ fontWeight: 600 }}>A Grand Heritage :</span>
              {" "}
              Perumal’s paternal grandfather, Mr. N. Arunchalam Chettiar, was a
              highly respected figure in the region, known for his honesty,
              traditional wisdom, and service to the community. His grandmother,
              Mrs. Muniyammal, lived an extraordinary life of 106 years—
              remaining active and independent till her final days without the
              need for walking sticks or medical support.
            </p>

            <p>
              <span style={{ fontWeight: 600 }}>
                The Visionary Father: A Village Scientist :
              </span>{" "}
              Perumal’s father, Mr. Annamalai Chettiar (fondly called "Kannu"),
              was born as the fifth child in his family. He lived a full and
              purposeful life for 83 years, passing away on June 2, 2023. A man
              of exceptional ingenuity, he introduced practical solutions to
              uplift the local villages. From setting up flour mills, rice
              grinding machines, and battery-powered lighting systems for
              students, to supporting educational and farming innovations, he
              was endearingly known by his peers as the “Village Scientist.”
              His work inspired a generation of rural progress and educational
              focus.
            </p>
          </div>

          <div className="details-btn1">
            <a className="e-primary-btn has-icon is-hover-white" href="/">
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
      )}
    </div>
  );
}