import "./style.css";

import team23321 from "./assets/Team23321.jpg";
import team28668 from "./assets/Team28668.jpg";

import moment1 from "./assets/moment1.jpg";
import moment2 from "./assets/moment2.jpg";
import moment3 from "./assets/moment3.jpg";
import moment4 from "./assets/moment4.jpg";

function App() {
  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-logo">
          <span>FPT</span>
          <strong>ROBOTICS</strong>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#teams">Teams</a>
          <a href="#achievements">Achievements</a>
          <a href="#gallery">Gallery</a>
        </nav>

        <a className="nav-button" href="#teams">
          Meet the Teams
        </a>
      </header>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-background"></div>

        <div className="hero-content">
          <p className="hero-small">
            FIRST TECH CHALLENGE · FPT PT
          </p>

          <h1>
            BUILD.
            <br />
            <span>CREATE.</span>
            <br />
            COMPETE.
          </h1>

          <p className="hero-text">
            Two teams. One community.
            <br />
            Engineering the future through robotics.
          </p>

          <div className="hero-buttons">
            <a href="#teams" className="primary-button">
              MEET OUR TEAMS
            </a>

            <a href="#achievements" className="secondary-button">
              OUR ACHIEVEMENTS →
            </a>
          </div>
        </div>

        <div className="hero-numbers">
          <div>
            <strong>23321</strong>
            <span>FPT PT 1</span>
          </div>

          <div>
            <strong>28668</strong>
            <span>FPT PT 2</span>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="intro">
        <p className="section-label">01 — WHO WE ARE</p>

        <div className="intro-grid">
          <h2>
            MORE THAN
            <br />
            <span>ROBOTICS.</span>
          </h2>

          <p>
            We are students from FPT Schools, united by our passion
            for engineering, programming, design and innovation.
            Through FIRST Tech Challenge, we turn ideas into robots
            and challenges into opportunities to grow.
          </p>
        </div>
      </section>


      {/* TEAMS */}
      <section className="teams-section" id="teams">
        <div className="section-header">
          <div>
            <p className="section-label">02 — OUR TEAMS</p>

            <h2>
              MEET THE
              <br />
              <span>TEAMS.</span>
            </h2>
          </div>

          <p>
            Two FTC teams from FPT PT,
            each with its own identity,
            engineering philosophy and story.
          </p>
        </div>


        <div className="team-grid">

          {/* TEAM 23321 */}
          <article className="team-card team-one">
            <div className="team-image">
              <img src={team23321} alt="FTC Team 23321" />

              <div className="team-number">
                23321
              </div>
            </div>

            <div className="team-info">
              <p className="team-type">
                FPT PT 1 · ROOKIE 2023
              </p>

              <h3>FPT PT 1</h3>

              <p>
                One of the first FTC teams representing
                FPT PT, combining mechanical engineering,
                software and strategic game play.
              </p>

              <a href="#achievements">
                VIEW ACHIEVEMENTS →
              </a>
            </div>
          </article>


          {/* TEAM 28668 */}
          <article className="team-card team-two">
            <div className="team-image">
              <img src={team28668} alt="FTC Team 28668" />

              <div className="team-number">
                28668
              </div>
            </div>

            <div className="team-info">
              <p className="team-type">
                FPT PT 2 · ROOKIE 2024
              </p>

              <h3>FPT PT 2</h3>

              <p>
                A new generation of FPT PT robotics,
                pushing ambitious engineering and
                competition performance onto the field.
              </p>

              <a href="#achievements">
                VIEW ACHIEVEMENTS →
              </a>
            </div>
          </article>

        </div>
      </section>


      {/* ACHIEVEMENTS */}
      <section className="achievements" id="achievements">
        <div className="section-header">
          <div>
            <p className="section-label">03 — ACHIEVEMENTS</p>

            <h2>
              BUILT
              <br />
              <span>TO COMPETE.</span>
            </h2>
          </div>

          <p>
            Our journey through FIRST Tech Challenge,
            from Vietnam to international competition.
          </p>
        </div>


        <div className="achievement-list">

          <div className="achievement">
            <div className="achievement-team">
              <span>23321</span>
              <small>FPT PT 1</small>
            </div>

            <div className="achievement-title">
              <h3>Finalist Alliance</h3>
              <p>1st Team Selected · Vietnam FTC 2023–24</p>
            </div>

            <span className="achievement-year">
              2024
            </span>
          </div>


          <div className="achievement">
            <div className="achievement-team">
              <span>23321</span>
              <small>FPT PT 1</small>
            </div>

            <div className="achievement-title">
              <h3>Control Award</h3>
              <p>Vietnam Championship</p>
            </div>

            <span className="achievement-year">
              2024
            </span>
          </div>


          <div className="achievement">
            <div className="achievement-team">
              <span>23321</span>
              <small>FPT PT 1</small>
            </div>

            <div className="achievement-title">
              <h3>Finalist Alliance</h3>
              <p>Captain · Vietnam Championship</p>
            </div>

            <span className="achievement-year">
              2024
            </span>
          </div>


          <div className="achievement">
            <div className="achievement-team">
              <span>28668</span>
              <small>FPT PT 2</small>
            </div>

            <div className="achievement-title">
              <h3>Finalist Alliance</h3>
              <p>1st Team Selected · Vietnam Championship</p>
            </div>

            <span className="achievement-year">
              2025
            </span>
          </div>


          <div className="achievement">
            <div className="achievement-team">
              <span>28668</span>
              <small>FPT PT 2</small>
            </div>

            <div className="achievement-title">
              <h3>Winning Alliance</h3>
              <p>Man o' War Division · Run for the Robots Premier Event</p>
            </div>

            <span className="achievement-year">
              2025
            </span>
          </div>


          <div className="achievement">
            <div className="achievement-team">
              <span>28668</span>
              <small>FPT PT 2</small>
            </div>

            <div className="achievement-title">
              <h3>Innovate Award</h3>
              <p>2nd Place · Vietnam Championship</p>
            </div>

            <span className="achievement-year">
              2026
            </span>
          </div>

        </div>
      </section>


      {/* QUOTE */}
      <section className="quote">
        <p className="quote-mark">“</p>

        <h2>
          WE DON'T JUST
          <br />
          BUILD ROBOTS.
          <br />
          <span>WE BUILD PEOPLE.</span>
        </h2>

        <p className="quote-author">
          — FPT PT ROBOTICS
        </p>
      </section>


      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <div className="section-header">
          <div>
            <p className="section-label">04 — GALLERY</p>

            <h2>
              MOMENTS
              <br />
              <span>THAT MATTER.</span>
            </h2>
          </div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item gallery-large">
            <img src={moment1} alt="FTC Robotics Moment 1" />
            <div className="gallery-caption">
              <strong>IN THE FIELD</strong>
              <span>Focus. Build. Compete.</span>
            </div>
          </div>

          <div className="gallery-item">
            <img src={moment2} alt="FTC Robotics Moment 2" />
            <div className="gallery-caption">
              <strong>TOGETHER</strong>
              <span>Ideas. People. Progress.</span>
            </div>
          </div>

          <div className="gallery-item">
            <img src={moment3} alt="FTC Robotics Moment 3" />
            <div className="gallery-caption">
              <strong>ON THE ARENA</strong>
              <span>Strategy meets reality.</span>
            </div>
          </div>

          <div className="gallery-item gallery-wide">
            <img src={moment4} alt="FTC Robotics Team" />
            <div className="gallery-caption">
              <strong>BEYOND THE GAME</strong>
              <span>A community. A journey.</span>
            </div>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <span>FPT</span>
          <strong>ROBOTICS</strong>
        </div>

        <p>
          FTC 23321 · FTC 28668
        </p>

        <p>
          FPT PT · Da Nang, Vietnam
        </p>

        <div className="footer-contact">
          <a
            href="https://www.facebook.com/profile.php?id=61556132914975"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.tiktok.com/@ftc23321fptpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>

          <a href="mailto:FPT_PT.FIRST@gmail.com">
            FPT_PT.FIRST@gmail.com
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;