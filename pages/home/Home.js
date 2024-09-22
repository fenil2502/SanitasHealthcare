import React from "react";
import { Navigate, Routes } from "../../navigation/NavigationLib";
import MyCarousel from "../../components/carousel/MyCarousel";
import Link from "next/link";
import {
  RiHome2Line,
  RiUser3Line,
  RiShapesLine,
  RiBriefcase4Line,
  RiStackLine,
  RiMessage3Line,
  RiMailSendLine,
} from "react-icons/ri";
import {
  FaBezierCurve,
  FaCode,
  FaGlobe,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

function Home() {
  const testimonialList = [
    {
      name: "Fenil Patel",
      image: "./fenil-pic.png",
      description:
        "Viren is an excellent UI/UX developer. He works with a calm mind, and his code quality is well-structured. His dedication to his work is exceptional. His planning enables him to complete tasks before the deadline. I am very grateful to work with Viren.",
    },
    // {
    //   name: "Rakesh Patel",
    //   image: "./profile-pic.png",
    //   description:
    //     "I am dealer of raw material. Great management of company, Time to time payment system. Very convenient to work with SRE.",
    // },
    // {
    //   name: "Vivek Singh",
    //   image: "./profile-pic.png",
    //   description:
    //     "Outstanding staff, Knowledgeable workers, Excellent services, satisfied answers Happy to be customer of pionear pump.",
    // },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slidesToShowForTestimonials =
    window.innerWidth > 1024
      ? 1
      : window.innerWidth < 1024 && window.innerWidth > 767
      ? 1
      : 1;

  return (
    <div className="homepage">
      <div className="portfolio-content">
        <div id="introduction" className="introduction">
          <div className="container">
            <span className="label">
              <RiHome2Line /> Introduction
            </span>
            <h1>Hello, I&apos;m Viren Patel - Developer & Designer</h1>
            <p>
              I&apos;m a dedicated web & software developer with a passion for
              transforming ideas into reality. With a solid background in
              information technology and hands-on experience in UI/UX design, I
              bring a unique blend of technical and creative skills to every
              project. My goal is to develop innovative solutions that not only
              meet but exceed expectations. Welcome to my portfolio, where you
              can explore my work and learn more about my expertise.
            </p>
            <button
              className="primary-btn"
              onClick={() => scrollToSection("project")}
            >
              My Work
            </button>
          </div>
        </div>
        <div id="about" className="about">
          <div className="container">
            <span className="label">
              <RiUser3Line /> About
            </span>
            <h2>Who I Am</h2>
            <p>
              A web & software developer driven by a love for technology and
              design. My career began with a solid educational foundation in
              Information Technology, leading me to specialize in front-end
              development. Over the years, I&apos;ve honed my skills in creating
              user-friendly and visually appealing web applications.
            </p>
          </div>
        </div>
        <div id="skills" className="skills">
          <div className="container">
            <span className="label">
              <RiShapesLine /> Skills
            </span>
            <h2>Professional Skills</h2>
            <div className="skill-list">
              <div className="skill-set">
                <div className="skill-set-inner">
                  <img src="/React-icon.png" alt="React Js" />
                  <div className="skill-detail">
                    <div className="skill-name">
                      <h5>React</h5>
                      <h5>70%</h5>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-set">
                <div className="skill-set-inner">
                  <img src="/Nextjs-icon.png" alt="Next Js" />
                  <div className="skill-detail">
                    <div className="skill-name">
                      <h5>NextJs</h5>
                      <h5>70%</h5>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-set">
                <div className="skill-set-inner">
                  <img src="/Figma-icon.png" alt="Figma" />
                  <div className="skill-detail">
                    <div className="skill-name">
                      <h5>Figma</h5>
                      <h5>90%</h5>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-set">
                <div className="skill-set-inner">
                  <img src="/Python-icon.png" alt="Python" />
                  <div className="skill-detail">
                    <div className="skill-name">
                      <h5>Python</h5>
                      <h5>85%</h5>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="service" className="service">
          <div className="container">
            <span className="label">
              <RiBriefcase4Line /> Services
            </span>
            <h2>My Services</h2>
            <p>
              I provide comprehensive services aimed at delivering high-quality
              digital products. With a focus on front-end development and UI/UX
              design, I ensure that every project is crafted to perfection.{" "}
            </p>
            <div className="service-list">
              <div className="service-card">
                <div className="service-detail">
                  <span className="service-numbers">01</span>
                  <FaBezierCurve />
                </div>
                <h4>UI/UX Design</h4>
                <p>
                  By understanding user needs and using modern design
                  principles, I create beautiful, user-friendly interfaces that
                  turn your vision into reality.
                </p>
              </div>
              <div className="service-card">
                <div className="service-detail">
                  <span className="service-numbers">02</span>
                  <FaCode />
                </div>
                <h4>Software Development</h4>
                <p>
                  Using cutting-edge technologies, I build high-quality
                  applications that drive business growth and enhance user
                  experiences, ensuring precision and dedication from concept to
                  deployment.
                </p>
              </div>
              <div className="service-card">
                <div className="service-detail">
                  <span className="service-numbers">03</span>
                  <FaGlobe />
                </div>
                <h4>Web Development</h4>
                <p>
                  Using the latest technologies, I build robust web solutions
                  tailored to your needs. From dynamic front-ends to powerful
                  back-ends, my goal is to provide a seamless online presence
                  for your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="project" className="project">
          <div className="container">
            <span className="label">
              <RiStackLine /> Project
            </span>
            <h2>What I’ve Built</h2>
            <p>
              Take a look at what I’ve built through a collection of my key
              projects. This section highlights the diverse range of digital
              solutions I’ve created, from front-end development to UI/UX
              design.
            </p>
            <div className="project-list">
              <div className="project-card">
                <div className="display-img">
                  <img src="./Pionear-display.png" alt="Pionear Pumps" />
                </div>
                <div className="project-details">
                  <div className="project-name">
                    <h5>Pionear Pumps</h5>
                    <div className="project-label">
                      <span className="tech-tools">Figma</span>
                      <span className="tech-tools">NextJs</span>
                    </div>
                  </div>
                  <a
                    href="https://www.pionearpump.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="display-img">
                  <img src="./Jaygoga-display.png" alt="jay Goga Travels" />
                </div>
                <div className="project-details">
                  <div className="project-name">
                    <h5>Jay Goga Travels</h5>
                    <div className="project-label">
                      <span className="tech-tools">Figma</span>
                      <span className="tech-tools">ReactJs</span>
                    </div>
                  </div>
                  <a
                    href="https://www.jaygogatravel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="testimonial" className="testimonial">
          <div className="container">
            <span className="label">
              <RiMessage3Line /> Testmonial
            </span>
            <h2>What People Say About Me</h2>
            <div className="testimonial-list">
              <MyCarousel
                testimonialList={testimonialList}
                sliderFor="Testimonials"
                slidesToShow={slidesToShowForTestimonials}
              />
            </div>
          </div>
        </div>
        <div id="contact" className="contact">
          <form
            className="form"
            id="contact-form"
            method="POST"
            data-toggle="validator"
            action="https://formsubmit.co/patelvirenb602@gmail.com"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.virenpatel.in/"
            />
            <div className="container">
              <span className="label">
                <RiMailSendLine /> Contact
              </span>
              <h2>Get In Touch With Me</h2>
              <div className="contact-form">
                <div className="contact-info">
                  <div className="location">
                    <div className="location-svg">
                      <FaLocationDot />
                    </div>
                    <div className="location-details">
                      <h6>Location</h6>
                      <p>Ahmedabad, Gujarat, India.</p>
                    </div>
                  </div>
                  <div className="emailid">
                    <div className="emailid-svg">
                      <FaEnvelope />
                    </div>
                    <div className="emailid-details">
                      <h6>Email</h6>
                      <Link
                        href="mailto:patelvirenb602@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        patelvirenb602@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="call">
                    <div className="call-svg">
                      <FaPhone />
                    </div>
                    <div className="call-details">
                      <h6>Mobile no.</h6>
                      <Link
                        href="tel:+919054527523"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +919054527523
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="form" method="post">
                  <div className="name-sec">
                    <div className="first-name">
                      <label>First name</label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="last-name">
                      <label>Last name</label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-details">
                    <div className="phone">
                      <label>Phone number</label>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="email">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="message">
                    <label>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>
                  <button className="primary-btn" type="submit">
                    Send message
                  </button>
                </div>
              </div>
              {/* <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790405!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721476149331!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
