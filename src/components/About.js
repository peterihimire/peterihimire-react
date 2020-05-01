import React from "react";
import Title from "../components/Title";
import Fade from "react-reveal/Fade";
import { useContext } from "react";
import { ProjectContext } from "../context";

const About = () => {
  const context = useContext(ProjectContext);
  const { stacks } = context;
  return (
    <section id="about-section" className="about">
      <div className="about-center">
        <Title
          title1="about"
          title2="me"
          subtitle="Let me tell you few things..."
        />
        <div className="biography">
          <div className="biography-image">
            <img
              src="https://res.cloudinary.com/dymhdpka1/image/upload/v1588213741/20190320_161544_i3npew.jpg"
              alt="Peter Ihimire"
              className="image-round"
            />
          </div>
          <div className="biography-text">
            <p>
              Based in Nigeria, I am a seasoned front-end web developer,
              passionate about building excellent softwares that make a
              difference. I specialize in creating unique, market-centric
              websites and applications that put my clients above their
              competitors, ranging from individuals and small businesses all the
              way to large enterprice corporations.
            </p>

            <p>
              I approach every project with an attention to detail and
              determination to exceed my clients expectations. My process is
              very collaborative. I like to involve my clients closely in every
              stage of the project, listening and fully understanding their
              requirements so as to deliver an online solution that meets their
              business goals.
            </p>

            <p>
              When am not programming, you'll find me in my home studio cooking
              up some youtube tech videos, where I share my thoughts about
              mobile technologies. Click to download my
              <a
                href="https://drive.google.com/file/d/192ritcuRCLA7GOuRuGPPLdETuGzGmO5b/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="resume"
              >
                resume
              </a>{" "}
              , for more information.
            </p>
          </div>
        </div>
        <div className="stack-center">
          {stacks.map((item, index) => {
            return (
              <Fade bottom delay={500} duration={1000} key={index}>
                <article key={index} className="stack">
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </article>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
