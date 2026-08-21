function Projects() {
  return (
    <section className="page">
      <h1>My Projects</h1>

      <div className="projects">
        <div className="project">
          <h2>StreetVendorHub</h2>

          <p>
            A full-stack group project designed to help street vendors
            showcase their businesses and connect with customers.
          </p>

          <p>
            <strong>Technologies:</strong> React, Node.js, Express,
            MongoDB and Mongoose.
          </p>
            <a
    href="https://mkmoise.github.io/iyf-s11-week-12-street-vendor-hub-Mkmoise/"
    target="_blank"
    rel="noreferrer"
    className="button"> View StreetVendorHub</a>
        </div>

        <div className="project">
          <h2>CommunityHub</h2>

          <p>
            A React application with multiple pages, routing,
            reusable components, API data fetching and custom hooks.
          </p>

          <p>
            <strong>Technologies:</strong> React, React Router,
            JavaScript and Vite.
          </p>
        </div>

        <div className="project">
          <h2>MongoDB Practice</h2>

          <p>
            Backend practice involving Node.js, Express, MongoDB
            and Mongoose.
          </p>

          <p>
            <strong>Technologies:</strong> Node.js, Express,
            MongoDB and Mongoose.
          </p>
        </div>

        <div className="project">
          <h2>React Components Project</h2>

          <p>
            A React project where I practiced reusable components,
            props, state and basic application structure.
          </p>

          <p>
            <strong>Technologies:</strong> React, JavaScript and CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

