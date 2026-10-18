

import './App.css'



const skills = [

  'Java',

  'Spring Boot',

  'React',

  'JavaScript',

  'HTML5',

  'CSS3',

  'MySQL',

  'REST APIs',

  'Hibernate / JPA',

  'Git',

  'GitHub',

  'Maven',

]



const projects = [
  {
    number: '01',
    icon: '💼',
    name: 'JobConnect',
    category: 'JOB PORTAL MANAGEMENT SYSTEM',
    description:
      'A full-stack job portal where job seekers can explore job opportunities and recruiters can manage companies, job postings, and applications with role-based authentication.',
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
     githubUrl: 'https://github.com/ARULVIGASH/JobConnect',
    liveDemoUrl: 'https://job-connect-iota-three.vercel.app/',
  },
  {
    number: '02',
    icon: '🎓',
    name: 'Student Management System',
    category: 'JAVA JDBC STUDENT MANAGEMENT SYSTEM',
    description:
      'A student management application built with Java and JDBC to connect with a MySQL database, register student details, and store and manage student records.',
    technologies: ['Java', 'JDBC', 'MySQL', 'Servlets', 'HTML', 'CSS'],
     githubUrl: 'https://github.com/ARULVIGASH/Student-Management-System',
    liveDemoUrl: '',
  },
]

function App() {

  return (

    <div className="portfolio">

      {/* Navigation */}

      <nav className="navbar">

        <a className="logo" href="#home">

          AV<span>.</span>

        </a>



        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>



        <a className="nav-button" href="#contact">

          Let's Talk ↗

        </a>

      </nav>



      <main>
        <div className="availability-strip">
          <span className="status-dot"></span>
          Open to entry-level opportunities <span className="strip-divider">/</span> Java · Spring Boot · React · MySQL
        </div>

        {/* Home / Hero */}

        <section className="hero section" id="home">

          <div className="hero-content">

            <p className="eyebrow">

              <span className="status-dot"></span>

              JAVA FULL STACK DEVELOPER

            </p>



            <h1>

              Hi, I'm

              <br />

              <span>Arul Vigash.</span>

              <br />

              I build things for the web.

            </h1>



            <p className="hero-description">

              I'm an aspiring Java Full Stack Developer passionate about

              building modern web applications using Java, Spring Boot,

              React, and MySQL. I enjoy learning new technologies and

              turning ideas into practical software solutions.

            </p>



            <div className="hero-buttons">

              <a className="button primary" href="#projects">

                Explore My Work ↘

              </a>



              <a className="button secondary" href="#contact">

                Contact Me

              </a>

            </div>



            <p className="hero-note">

              <span>✳</span> Learning. Building. Improving.

            </p>

          </div>



          {/* Developer Profile Card */}

          <div className="hero-visual">

            <div className="orbit orbit-one"></div>

            <div className="orbit orbit-two"></div>



            <div className="profile-card">

              <div className="card-top">

                <span>DEVELOPER PROFILE</span>

                <span className="card-live">● AVAILABLE</span>

              </div>



              <div className="avatar"><img src="/profile.jpeg" alt="Arul Vigash" onError={(event) => { event.currentTarget.style.display = "none" }} /></div>



              <h2>Arul Vigash</h2>

              <p>Java Full Stack Developer</p>



              <div className="code-window">

                <div className="code-dots">● ● ●</div>



                <code>

                  <span className="code-purple">class</span> Developer {'{'}

                  <br />

                  &nbsp; <span className="code-green">String</span> name =

                  <br />

                  &nbsp; "Arul Vigash";

                  <br />

                  &nbsp; <span className="code-purple">void</span> build() {'{'}

                  <br />

                  &nbsp;&nbsp; createFuture();

                  <br />

                  &nbsp; {'}'}

                  <br />

                  {'}'}

                </code>

              </div>



              <div className="profile-footer">

                <span>☕ Java</span>

                <span>⚡ React</span>

                <span>◈ Spring Boot</span>

              </div>

            </div>



            <span className="floating-badge badge-top">

              {'</>'} Clean Code

            </span>



            <span className="floating-badge badge-bottom">

              ✦ Problem Solver

            </span>

          </div>

        </section>



        {/* About Me */}

        <section className="section about" id="about">

          <p className="eyebrow">01 / ABOUT ME</p>



          <h2 className="section-title">

            Turning ideas into <span>digital solutions.</span>

          </h2>



          <div className="about-grid">

            <p>

              I'm an aspiring Java Full Stack Developer who enjoys

              creating web applications and learning how frontend and

              backend technologies work together. I have completed

              Java full-stack development training and developed

              projects to strengthen my programming and problem-solving

              skills. I'm looking forward to starting my career and

              contributing to real-world software projects.

            </p>



            <div className="about-stat">

              <span>MY APPROACH</span>

              <strong>Build. Learn. Grow.</strong>

              <p>

                Focused on clean code, continuous learning, and

                creating useful digital experiences.

              </p>

            </div>

          </div>

        </section>



        {/* Skills */}

        <section className="section skills" id="skills">

          <p className="eyebrow">02 / TECH STACK</p>



          <h2 className="section-title">

            Technologies I <span>work with.</span>

          </h2>



          <p className="section-description">

            Technologies I've learned and used while developing projects.

          </p>



          <div className="skills-grid">

            {skills.map((skill) => (

              <div className="skill-item" key={skill}>

                <span className="skill-icon">✳</span>

                {skill}

              </div>

            ))}

          </div>

        </section>



        {/* Projects */}

        <section className="section projects" id="projects">

          <p className="eyebrow">03 / MY WORK</p>



          <h2 className="section-title">

            Projects I've <span>built.</span>

          </h2>



          <p className="section-description">

            Practical applications showcasing my journey in full-stack

            development.

          </p>



          <div className="projects-grid">

            {projects.map((project) => (

              <article className="project-card" key={project.number}>

                <div className="project-top">

                  <span className="project-number">

                    {project.number}

                  </span>



                  <span className="project-icon">

                    {project.icon}

                  </span>

                </div>



                <p className="project-type">{project.category}</p>



                <h3>{project.name}</h3>



                <p className="project-description">

                  {project.description}

                </p>



                <div className="tech-list">

                  {project.technologies.map((technology) => (

                    <span key={technology}>{technology}</span>

                  ))}

                </div>



              
<div className="project-actions">
                  {project.liveDemoUrl ? (
                    <a className="button primary project-demo" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="demo-status">Live demo not deployed yet</span>
                  )}
                  <a className="project-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub Source ↗
                  </a>
                </div>


              </article>

            ))}

          </div>

        </section>



        {/* Resume */}

        <section className="section resume-section">

          <div>

            <p className="eyebrow">04 / MY RESUME</p>



            <h2 className="section-title">

              Let's talk about <span>my experience.</span>

            </h2>



            <p className="section-description">

              Explore my education, technical skills, and project experience.

            </p>

          </div>



          <a

            className="button primary"

            href="/resume.pdf"

            target="_blank"

            rel="noreferrer"

          >

            ↓ View My Resume

          </a>

        </section>



        {/* Contact */}

        <section className="section contact" id="contact">

          <p className="eyebrow">05 / GET IN TOUCH</p>



          <h2 className="section-title">

            Let's build something <span>great.</span>

          </h2>



          <p className="section-description">

            I'm interested in entry-level Java Developer and Full Stack

            Developer opportunities. Feel free to reach out!

          </p>



          <div className="contact-links">

            <a href="mailto:arulvigash7@gmail.com">

              Email Me ↗

            </a>



            <a

              href="https://www.linkedin.com/in/arulvigash"

              target="_blank"

              rel="noreferrer"

            >

              LinkedIn ↗

            </a>



            <a

              href="https://github.com/ARULVIGASH"

              target="_blank"

              rel="noreferrer"

            >

              GitHub ↗

            </a>

          </div>

        </section>

      </main>



      {/* Footer */}

      <footer className="footer">

        <a className="logo" href="#home">

          AV<span>.</span>

        </a>



        <p>Designed and built by Arul Vigash.</p>



        <a href="#home">Back to top ↑</a>

      </footer>

    </div>

  )

}



export default App
