import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page home">
      <div>
        <p className="small-title">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Moise Nyarugabo</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p>
          I am a technology learner interested in web development,
          digital marketing and IT. I enjoy creating websites and
          learning how modern applications work.
        </p>

        <Link to="/projects" className="button">
          View My Projects
        </Link>
      </div>

      <div className="profile">
        <div className="initials">MN</div>
        <h3>Moise Nyarugabo</h3>
        <p>Developer • Learner • Creator</p>
      </div>
    </section>
  );
}

export default Home;
