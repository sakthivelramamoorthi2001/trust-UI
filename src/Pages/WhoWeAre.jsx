 import React, { useEffect, useState } from "react";
import AOS from 'aos'
export default function WhoWeAre() {

    useEffect(() => {
        AOS.init()
    },[])
  const [activeTab, setActiveTab] = useState("history");

  console.log(activeTab,'activeTab');
  
  return (
    <div className="container">
      <h2>ho We Are</h2>

      <p className="about-intro">
        Annamalai Foundation is an international non-profit organization
        established to promote education, research, and social service.
      </p>

      {/* TAB BUTTONS */}
      <div className="tab-buttons">
        <button
          className={activeTab === "history" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("history")}
        >
          CORE VALUES
        </button>

        <button
          className={activeTab === "mission" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("mission")}
        >
          MISSION & VISION
        </button>

        <button
          className={activeTab === "vision" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("vision")}
        >
          ABOUT FOUNDER
        </button>
      </div>

      {/* TAB CONTENT */}
      {/* <div className="tab-content-wrapper"> */}

        {activeTab == "history" && (
          <div className="tab-content">
            <h3>Core Values</h3>
            <p>Integrity, Innovation, Service, Collaboration, Excellence.</p>
          </div>
        )}

        {activeTab == "mission" && (
          <div className="tab-content">
            <h3>Mission & Vision</h3>
            <ul>
              <li>Empower students and innovators.</li>
              <li>Build bridges between Indian and international institutions.</li>
              <li>Support technology-driven solutions.</li>
            </ul>
          </div>
        )}

        {activeTab == "vision" && (
          <div className="tab-content">
            <h3>About Founder</h3>
            <p>
              Perumal’s family heritage and contributions to village innovation
              inspired the foundation's mission.
            </p>
          </div>
        )}

      </div>
    // </div>s
  );
}