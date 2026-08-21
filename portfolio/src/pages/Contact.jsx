function Contact() {
  return (
    <section className="page">
      <h1>Contact Me</h1>

      <div className="content-card contact">
        <p>
          Thank you for visiting my portfolio.
        </p>

        <p>
          If you would like to connect with me, you can find me
          through GitHub or email.
        </p>

        <a
          href="https://github.com/Mkmoise"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Visit My GitHub
        </a>

        <a
          href="mailto:YOUR_EMAIL@gmail.com"
          className="button secondary-button"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
