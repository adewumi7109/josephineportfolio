import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function Contact() {
  const formRef = useRef();
  const now = new Date();
  const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    service: "",
    timeline: "",
    message: "",
    time: formattedDate,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    return Object.keys(errors).length === 0;
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

    setIsSending(true);

    emailjs
      .sendForm(
        "service_ybaqepn",
        "template_smlbxso",
        formRef.current,
        "MAcGliShU4DmDzV17"
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully! I'll be in touch soon.", {
            position: "top-right",
            autoClose: 4000,
          });
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            service: "",
            timeline: "",
            message: "",
            time: formattedDate,
          });
          setFormErrors({});
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact">
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner {
          width: 15px;
          height: 15px;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
          flex-shrink: 0;
        }
        .formbtn {
          display: flex !important;
          align-items: center;
          gap: 8px;
          min-width: 100px;
          justify-content: center;
          transition: opacity 0.2s ease;
        }
        .formbtn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>

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
                style={{ border: formErrors.from_name ? "1px solid red" : "none" }}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                value={formData.from_email}
                onChange={handleChange}
                style={{ border: formErrors.from_email ? "1px solid red" : "none" }}
              />
            </div>

            <div className="col">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={{ border: formErrors.phone ? "1px solid red" : "none" }}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{ border: formErrors.service ? "1px solid red" : "none" }}
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
            </div>

            <div className="col">
              <input
                type="text"
                name="timeline"
                placeholder="Timeline"
                value={formData.timeline}
                onChange={handleChange}
                style={{ border: formErrors.timeline ? "1px solid red" : "none" }}
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
            </div>

            <div style={{ display: "flex", justifyContent: "right" }}>
              <button
                type="submit"
                className="secondary-btn formbtn"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;