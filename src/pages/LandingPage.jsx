import React, { useEffect, useState } from "react";
import { SiAdobeaftereffects } from "react-icons/si";
import "./LandingPage.css";
import { FiArrowUpRight } from "react-icons/fi";
const reviews = [
  {
    name: "Jane Kurt",
    role: "Marketing Manager",
    text: "I recently started using this website for my online shopping, and I couldn't be happier with the experience. The interface is user-friendly, the product descriptions are detailed, and the checkout process is smooth and secure.",
    avatar: "/profile.avif",
  },
  {
    name: "Michael Stone",
    role: "Creative Director",
    text: "Working with this team was seamless. The visuals, pacing, and attention to detail exceeded expectations. Highly recommended.",
    avatar: "/profile.avif",
  },
  {
    name: "Sarah Lee",
    role: "Product Designer",
    text: "The final output was polished, cinematic, and delivered on time. Communication throughout the project was excellent.",
    avatar: "/profile.avif",
  },
];
const servicesData = [
  {
    title: "2D Animation Compositing",
    items: [
      "Scene assembly & layering",
      "Character and background integration",
      "Effects compositing (light, glow, particles, VFX)",
      "Rotoscoping & masking",
      "Camera moves & depth",
      "Final polish & render optimization",
    ],
  },
  {
    title: "Video Editing",
    items: [
      "Story-driven cuts",
      "Transitions & pacing",
      "Sound sync & cleanup",
      "Final export optimization",
    ],
  },
  {
    title: "Comic Coloring",
    items: [
      "Flat coloring",
      "Shading & lighting",
      "Mood & atmosphere",
      "Print & digital prep",
    ],
  },
  {
    title: "Color Grading",
    items: [
      "Color correction & balance",
      "Cinematic look development",
      "Mood & tone enhancement",
      "Shot matching & consistency",
      "Highlight & shadow control",
      "Final color pass for web & broadcast",
    ],
  },
  {
    title: "Graphics Design",
    items: [
      "Social media designs",
      "Posters & flyers",
      "Brand visuals",
      "Thumbnails & banners",
    ],
  },
];
const projects = [
  {
    title: "Power and Control",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sevenson",
    tag: "Brand",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
];

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="expert-section">
      <div className="expert-frame">
        <div className="expert-layout">
          {/* Image Card */}
          <div className="expert-card">
            <div className="expert-image">
              <img src="profile.avif" alt="Esther Bamigbade" />
            </div>
            <div className="expert-content">
              <h2>Esther Bamigbade</h2>
              <p>
                A passionate 2D Compositor and Video Editor with 4+ years of
                turning creative visions into polished, powerful visuals,
                bringing stories to life through motion, color, and composition
                crafting visuals that move audiences worldwide.
              </p>
              <div className="buttons">
                <button className="btn1">CONTACT ME </button>
                <button className="btn2">DOWNLOAD CV</button>
              </div>
            </div>
          </div>

          {/* Expert Content */}
          <div className="expert-content">
            <h2>My Expert area</h2>

            {/* Tools */}
            <div className="expert-tools">
              <div className="tool">
                <SiAdobeaftereffects />
                <br />
                <span>Adobe Aftereffects</span>
              </div>
              <div className="tool">
                Pr
                <br />
                <span>Adobe Premiere Pro</span>
              </div>
              <div className="tool">
                Ps
                <br />
                <span>Adobe Photoshop</span>
              </div>
              <div className="tool">
                Ai
                <br />
                <span>Adobe Illustrator</span>
              </div>
              <div className="tool">
                🎨
                <br />
                <span>Davinci</span>
              </div>
              <div className="tool">
                Tb
                <br />
                <span>Toon Boom</span>
              </div>
            </div>

            {/* Services Accordion */}
            <div className="services-section">
              <h2 className="services-title">Services</h2>
              <div className="services">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className={`service ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <div
                      className="service-header"
                      onClick={() => toggleService(index)}
                    >
                      {service.title}
                    </div>
                    <ul className="service-list">
                      {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Showreel Section */}
      <div className="showreel-section">
        <h2 className="showreel-title">SHOWREEL</h2>
        <div className="showreel-container">
          <video
            src="https://res.cloudinary.com/dcapipfeg/video/upload/f_auto,q_auto:good,w_1920/FINAL_RENDER_2_ejrchs.mp4"
            poster="https://res.cloudinary.com/dcapipfeg/video/upload/so_1/FINAL_RENDER_2_ejrchs.jpg"
            autoPlay
            // muted
            loop
            playsInline
            className="project-video"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </div>
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <span>{project.tag}</span>
                </div>

                <div className="arrow">
                  <FiArrowUpRight />
                </div>
              </div>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="testimonial-wrapper">
        <div className="testimonial-content">
          <div className="profile">
            <img src={review.avatar} alt={review.name} />
            <div>
              <h3 className="name">{review.name}</h3>
              <span className="role">{review.role}</span>
            </div>
          </div>

          <p className="quote">“{review.text}”</p>
        </div>

        <div className="navigation">
          <button className="nav-btn" onClick={prev}>
            <svg viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button className="nav-btn" onClick={next}>
            <svg viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
