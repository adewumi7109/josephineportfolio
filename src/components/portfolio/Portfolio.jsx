import React, { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@400;500;600&display=swap');

  #portfolio {
    background-color: #FFFAFA;
    padding-bottom: 60px;
    font-family: 'Inter', sans-serif;
  }

  #portfolio h1 {
    margin-top: 28px;
    font-weight: 800;
    font-size: 40px;
    text-align: center;
    color: #0A0460;
    margin-bottom: 50px;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Tab Buttons */
  .tab-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }

  .tab-btn {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    border: 1.5px solid #e5e7eb;
    border-radius: 100px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.25s ease;
    color: #444;
    font-family: 'Inter', sans-serif;
  }

  .tab-btn:hover {
    border-color: #1100FD;
    color: #1100FD;
  }

  .tab-btn.active {
    background: linear-gradient(135deg, #1100FD, #0B018C);
    color: white;
    font-weight: 600;
    border-color: transparent;
    box-shadow: 0 4px 14px rgba(17, 0, 253, 0.3);
  }

  /* Portfolio Grid */
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
  }

  /* Portfolio Item */
  .portfolio-item {
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
  }

  .portfolio-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.13);
  }

  /* Fixed-height image container — keeps the info section stable */
  .portfolio-img-wrapper {
    width: 100%;
    height: 220px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .portfolio-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .portfolio-item:hover .portfolio-img {
    transform: scale(1.04);
  }

  /* Static info section — always same height regardless of image */
  .portfolio-info {
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    height: 64px;
    box-sizing: border-box;
  }

  .portfolio-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;
  }

  .portfolio-item h3 {
    font-weight: 700;
    font-size: 15px;
    color: #1001ED;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Syne', sans-serif;
  }

  .portfolio-item p {
    font-weight: 400;
    font-size: 11px;
    color: #666;
    font-style: italic;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .portfolio-type {
    font-weight: 500;
    font-size: 11px;
    color: #555;
    white-space: nowrap;
    background: #f0f0f8;
    padding: 3px 8px;
    border-radius: 100px;
    flex-shrink: 0;
    align-self: center;
  }

  @media screen and (max-width: 600px) {
    #portfolio h1 {
      font-size: 28px;
    }
    .portfolio-grid {
      grid-template-columns: 1fr;
    }
  }
`;

function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "website", label: "Website Design" },
    { id: "webapp", label: "Web Application" },
    { id: "app", label: "Mobile App Design" },
    { id: "branding", label: "Branding" },
  ];

  const projects = [
    {
      id: "vinitpay",
      category: "webapp",
      title: "Vinitpay",
      date: "Jan 2023 - Present",
      type: "Web Application",
      image: "/Group 427319120.png",
      link: "http://vnitpay.com/",
    },
    {
      id: "turnify",
      category: "webapp",
      title: "Turnify",
      date: "Jan 2025 - Feb 2025",
      type: "Web Application",
      image: "/Turnify Home Page (Banks) 1.png",
      link: "https://turnifyng.com/",
    },
    {
      id: "luma",
      category: "app",
      title: "Luma",
      date: "Dec 2025 - Present",
      type: "Mobile App Design",
      image: "/phone.png",
      link: "https://www.behance.net/gallery/238736991/Luma-20-Next-Gen-AI-Wellness-App",
    },
    {
      id: "branding",
      category: "branding",
      title: "Visual Design & Branding",
      date: "Jan 2022 - Present",
      type: "Branding",
      image: "/Group 427319123.png",
      link: "https://drive.google.com/drive/folders/1ElxaJmPK6cukbc6M8k-cw7_W4TNMWXkt",
    },
    {
      id: "daily2k",
      category: "website",
      title: "Daily 2k",
      date: "Jan 2025 - Feb 2026",
      type: "Website Design",
      image: "/Daily2k.png",
      link: "https://www.behance.net/gallery/227533647/Saas-Web-App-%28Case-Study%29?platform=direct",
    },
    {
      id: "pms360",
      category: "webapp",
      title: "PMS 360",
      date: "Jan 2025 - Feb 2026",
      type: "Web Application",
      image: "/pms 60.png",
      link: "https://www.behance.net/gallery/242302259/PMS-360-Performance-Management-System",
    },
    {
      id: "apexdrive",
      category: "website",
      title: "Apex Drive",
      date: "Jan 2025 - Feb 2026",
      type: "Website Design",
      image: "/Car.png",
      link: "https://www.behance.net/gallery/240288593/ApexDrive-Landing-Page?platform=direct",
    },
    {
      id: "deepserenity",
      category: "website",
      title: "Deep Serenity",
      date: "Jan 2025 - Feb 2026",
      type: "Website Design",
      image: "/image 5.png",
      link: "https://www.behance.net/gallery/241012333/Deep-Serenity-Luxe-Femme-Luxury-Landing-Page",
    },
  ];

  // ✅ FIXED: was incorrectly filtering by p.id instead of p.category
  const filtered = projects.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <>
      <style>{styles}</style>
      <section id="portfolio">
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
            {filtered.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="portfolio-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="portfolio-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-meta">
                    <h3>{project.title}</h3>
                    <p>{project.date}</p>
                  </div>
                  <span className="portfolio-type">{project.type}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;