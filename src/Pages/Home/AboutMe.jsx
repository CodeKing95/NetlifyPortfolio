export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="about--section"
      data-aos="fade-up"
    >
      <div
        className="about--section--img"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img src="./img/sunny.jpg" alt="About Me" />
      </div>

      <div
        className="hero--section--content--box about--section--box"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="hero--section--content">
          <h2
            className="skills-section--heading"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            ABOUT ME
          </h2>

          <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            I am a software Developer and I specialize in Frontend and Backend development. 
          </p>
             <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            
            I come from an IT Support background but since I discovered coding, I felt love in it and i like the idea about turning ideas into impactful software solutions. 
          </p>

            <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
           So i have decided to change my career into becoming a software developer and I have no regrets at all :)
          </p>

          

             <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Let's get connected!
          </p>

        </div>
      </div>
    </section>
  );
}
