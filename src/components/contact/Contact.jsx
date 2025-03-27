import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({}); // Track input errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Remove error message when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.from_name.trim()) errors.from_name = "Name is required";
    if (!formData.from_email.trim()) errors.from_email = "Email is required";
    if (!formData.service.trim()) errors.service = "Please select a service";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    if (!formData.phone.trim()) errors.phone = "Phone cannot be empty";
    if (!formData.timeline.trim()) errors.timeline = "Timeline cannot be empty";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_ybaqepn",
        "template_smlbxso",
        formRef.current,
        "MAcGliShU4DmDzV17"
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            service: "",
            timeline: "",
            message: "",
          });
          setFormErrors({}); // Clear errors on success
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );

    e.target.reset();
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
                style={{
                  border: formErrors.from_name ? "1px solid red" : "none",
                }}
              />
              {/* {formErrors.from_name && <p className="error-text">{formErrors.from_name}</p>} */}

              <input
                type="email"
                name="from_email"
                placeholder="Email"
                value={formData.from_email}
                onChange={handleChange}
                style={{
                  border: formErrors.from_email ? "1px solid red" : "none",
                }}
              />
              {/* {formErrors.from_email && <p className="error-text">{formErrors.from_email}</p>} */}
            </div>

            <div className="col">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  border: formErrors.phone ? "1px solid red" : "none",
                }}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  border: formErrors.service ? "1px solid red" : "none",
                }}
              >
                <option value="">Service of Interest</option>
                <option value="UI/UX&Web Design">UI/UX & Web Design</option>
                <option value="Branding& Identity">Branding & Identity</option>
                <option value="Mobile App UI/UX">Mobile App UI/UX</option>
                <option value="Print&Marketing Design">Print & Marketing Design</option>
                <option value="Wireframing & Prototyping">Wireframing & Prototyping</option>
                <option value="Design Systems & UI Kits">Design Systems & UI Kits</option>
                <option value="Other">Other</option>
              </select>
              {/* {formErrors.service && <p className="error-text">{formErrors.service}</p>} */}
            </div>

            <div className="col">
              <input
                type="text"
                name="timeline"
                placeholder="Timeline"
                value={formData.timeline}
                onChange={handleChange}
                style={{
                  border: formErrors.timeline ? "1px solid red" : "none",
                }}
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
                  border: formErrors.message ? "1px solid red" : "none",
                }}
              />
              {/* {formErrors.message && <p className="error-text">{formErrors.message}</p>} */}
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
      {/* <ToastContainer /> */}
    </section>
  );
}

export default Contact;