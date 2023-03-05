import { useState } from "react";
import Button from "../components/Button";
import { Plane } from "../components/Icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleContentInput = (e) => setContent(e.target.value);
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <section id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="even-cols">
        <div className="ContactTextContainer">
          <h3>Get in touch.</h3>
          <p>
            Thank you for taking the time to review my portfolio. I am excited
            about the opportunity to contribute my skills to a dynamic team as a
            full stack developer. I am always open to collaborating on exciting
            projects and exploring new opportunities.
          </p>
        </div>
        <div className="ContactFormContainer">
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form__input"
              id="name"
              value={name}
              onChange={handleNameInput}
              required
            />

            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="form__input"
              id="email"
              value={email}
              onChange={handleEmailInput}
              required
            />

            <label htmlFor="name">Your message...</label>
            <input
              type="textarea"
              className="form__input"
              id="content"
              value={content}
              onChange={handleContentInput}
              required
            />
            <Button
              content={"Send Message"}
              icon={<Plane />}
              styling={"blend-bg icons__icon--inverse"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
