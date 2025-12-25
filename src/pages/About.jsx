import "./About.css";
import {
  FiMonitor,
  FiVideo,
  FiImage,
  FiEdit3,
  FiSmartphone,
  FiEye,
  FiArrowUpRight,
} from "react-icons/fi";
const skills = [
  { title: "2d Composition", icon: <FiMonitor /> },
  { title: "Video Editing", icon: <FiVideo /> },
  { title: "Comics", icon: <FiImage /> },
  { title: "Animation Coloring", icon: <FiEdit3 /> },
  { title: "Graphics Design", icon: <FiSmartphone /> },
  { title: "Motion Graphics", icon: <FiEye /> },
];
const awards = [
  {
    title: "Yellowbrick Program",
    year: "2024",
  },
  
];
const About = () => {
  return (
    <section className="about">
      <div className="about-card">
        {/* Left image */}
        <div className="about-image">
          <img src="/profile.avif" alt="Esther Bamigbade" />
        </div>

        {/* Right content */}
        <div className="about-content">
          <p className="about-intro">
            I'm <span>Esther Bamigbade</span>, a 2D Compositor and Video Editor
            passionate about crafting engaging and impactful visual stories.
            With a focus on motion, color, and composition, I create cinematic
            experiences that captivate and inspire.
          </p>

          <p>
            Over the years, I've honed my craft in post-production, blending
            technical precision with artistic storytelling to bring ideas to
            life on screen.
          </p>

          <p>
            Beyond editing and compositing, I also specialize in coloring — from
            video color grading to animation and comic coloring, giving every
            frame the depth, tone, and emotion it deserves.
          </p>

          <p>
            My goal is simple: to make visuals feel alive — whether it's a film,
            an animation, or a story told through color.
          </p>

          <div className="experience">
            <h4>EXPERIENCE</h4>

            <div className="job">
              <span className="year">2025 – Present</span>
              <strong>FULL TIME FREELANCING</strong>
              <span className="location">Nigeria</span>
            </div>

            <div className="job">
              <span className="year">2021 – 2025</span>
              <strong>COMPOSITOR / VIDEO EDITOR</strong>
              <span className="location">
                Lead Compositor, Spoof Media Limited, Nigeria.
              </span>
            </div>
          </div>

          <div className="about-actions">
            <button className="btn primary">CONTACT</button>
            <button className="btn">DOWNLOAD CV</button>
          </div>
        </div>
      </div>
      <section className="skills-awards">

  {/* LEFT — SKILLS */}
  <div className="skills">
    <h3 className="section-title">Skills</h3>

    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-text">{skill.title}</span>
        </div>
      ))}
    </div>
  </div>

  {/* DIVIDER */}
  <div className="vertical-divider" />

  {/* RIGHT — AWARDS */}
  <div className="awards">
    <h3 className="section-title">Awards</h3>

    <div className="awards-list">
      {awards.map((award, index) => (
        <div className="award-card" key={index}>
          <div className="award-thumb" />
          <div className="award-info">
            <p className="award-title">{award.title}</p>
            <span className="award-year">{award.year}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

</section>
  <section className="cta">
      <h3 className="cta-title">Let’s Work Together</h3>

      <div className="cta-action">
        <span>LETS TALK</span>
        <FiArrowUpRight />
      </div>
    </section>
    </section>
  );
};

export default About;
