import "./Footer.css";
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <h3>ESTHER BAMIGBADE</h3>
          <p>
            Crafting refined digital experiences with precision,
            aesthetics, and purpose.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ESTHER BAMIGBADE. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
