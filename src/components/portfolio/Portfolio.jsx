import React, { useState } from "react";
import "./portfolio.css";
function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "website", label: "Website Design" },
    { id: "app", label: "App Mobile Design" },
    { id: "branding", label: "Branding" },
  ];

  const projects = [
    {
      id: "website",
      title: "Vinitpay",
      date: "Jan 2023 - Feb Present",
      type: "Website Design",
      image: "/Group 427319120.png",
    },
    {
      id: "website",
      title: "Turnify",
      date: "Jan 2025 - Feb 2025",
      type: "Website Design",
      image: "/Group 427319121.png",
    },
    {
      id: "app",
      title: "Lenzer",
      date: "Dec 2025 - Present",
      type: "App Mobile Design",
      image: "/Leinzer.png",
    },
    {
      id: "website",
      title: "Mycdaonline",
      date: "Sept 2024 - Feb 2025",
      type: "Website Design",
      image: "/Group 427319122.png",
    },
    {
      id: "website",
      title: "Foritrack",
      date: "Jan 2025 - Feb 2025",
      type: "Website Design",
      image: "/Home Page(Version3 1.png",
    },
    {
      id: "branding",
      title: "Visual Design & Branding",
      date: "Jan 2022 - Present",
      type: "Branding",
      image: "/Group 427319123.png",
    },
  ];

  return (
    <section id="portfolio" >
      <h1>Featured Portfolio</h1>
      <div className="wrapper">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {projects
          .filter((project) => activeTab === "all" || project.id === activeTab)
          .map((project, index) => (
            <div key={index} className="portfolio-item">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-img"
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: 'column'}}>
                  <h3>{project.title}</h3>
                  <p>{project.date}</p>
                </div>
                <span>{project.type}</span>
              </div>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
