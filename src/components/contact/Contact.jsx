import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <div className="form-container">
        <div className="wrapper">
          <form>
            <div className="col">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="col">
              <input type="text" placeholder="Phone Number" />
              <select name="" id="" >
                <option value="">Service of interest</option>
                <option value="UI/UX&Web Design">UI/UX&Web Design</option>
                <option value="Branding& Identity">Branding& Identity</option>
                <option value="Mobile App UI/UX">Mobile App UI/UX</option>
                <option
                  value="Print&Marketing Design
"
                >
                  Print&Marketing Design
                </option>
                <option
                  value="Wireframing & Prototyping
"
                >
                  Wireframing & Prototyping
                </option>
                <option value="Design Systems & UI Kits">Design Systems & UI Kits</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col">
              <input type="text" placeholder="Timeline" />
              <textarea
                style={{
                  height: "150px",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                placeholder="Project Details..."
              />
            </div>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <button
                style={{ cursor: "pointer" }}
                className="secondary-btn formbtn"
              >
                {" "}
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
