import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function Contact() {
  const formRef = useRef(); // Ref for form submission
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    service: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p60axix", 
        "template_sy74tap", 
        formRef.current,
        "0wIATy_C3xet-R7q1" 
      )
      .then(
        (result) => {
          // toast.success("Your message has been sent successfully!", {
          //   position: "top-right",
          //   autoClose: 3000,
          // });
          alert("Your message has been sent successfully!")
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            service: "",
            timeline: "",
            message: "",
          }); // Reset form fields
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );

    e.target.reset(); // Clear form after submission
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="form-container">
        <div className="wrapper">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="col">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Service of Interest</option>
                <option value="UI/UX&Web Design">UI/UX & Web Design</option>
                <option value="Branding& Identity">Branding & Identity</option>
                <option value="Mobile App UI/UX">Mobile App UI/UX</option>
                <option value="Print&Marketing Design">
                  Print & Marketing Design
                </option>
                <option value="Wireframing & Prototyping">
                  Wireframing & Prototyping
                </option>
                <option value="Design Systems & UI Kits">
                  Design Systems & UI Kits
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col">
              <input
                type="text"
                name="timeline"
                placeholder="Timeline"
                value={formData.timeline}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Project Details..."
                value={formData.message}
                onChange={handleChange}
                style={{
                  height: "150px",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <button
                type="submit"
                style={{ cursor: "pointer" }}
                className="secondary-btn formbtn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Toast Notification Container */}
    </section>
  );
}

export default Contact;
