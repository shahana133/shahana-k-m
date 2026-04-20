import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Shahana k.m. All rights reserved.</p>

      <div className="footer-links">
        <a href="https://github.com/shahana133" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/shahanakm" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
        <a href="mailto:shahananava729@gmail.com">
          <FaEnvelope className="footer-icon" /> Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;