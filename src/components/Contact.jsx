import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container fade-in">
        <h2>📩 Contact Me</h2>
        <p>Feel free to reach out — whether it's for a project, job opportunity, or just to say hi!</p>

        <form
          className="contact-form"
          action="https://formspree.io/f/xkgbwyyj"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows={6} required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info glow-box">
          <div className="info-item fade-in-up">
            <FaEnvelope className="info-icon" />
            <div>
              <span className="info-label">Email:</span>
              <a href="mailto:dishenmalinga@gmail.com" className="info-value">
                dishenmalinga@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item fade-in-up" style={{ animationDelay: '0.2s' }}>
            <FaPhoneAlt className="info-icon" />
            <div>
              <span className="info-label">Phone:</span>
              <a href="tel:+94701188941" className="info-value">
                +94 701188941
              </a>
            </div>
          </div>

          <div className="info-item fade-in-up" style={{ animationDelay: '0.4s' }}>
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <span className="info-label">Location:</span>
              <span className="info-value">Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
