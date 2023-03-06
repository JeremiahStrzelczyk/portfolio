import { useState } from "react";
import ButtonPrimary from "../components/Button";
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
    alert("Test");
    setName("");
    setEmail("");
    setContent("");
  };
  return (
    <section id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="even-columns">
        <div className="column">
          <h3>Get in touch.</h3>
          <p>
            Thank you for taking the time to review my portfolio. I am excited
            about the opportunity to contribute my skills to a dynamic team as a
            full stack developer. I am always open to collaborating on exciting
            projects and exploring new opportunities.
          </p>
        </div>
        <div className="column">
          <form onSubmit={handleSubmit} className="form">
            <div className="contact__NameEmail">
              <div className="contact__input">
                <label className="bold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Jeremiah Strzelczyk"
                  id="name"
                  value={name}
                  onChange={handleNameInput}
                  required
                />
              </div>
              <div className="contact__input">
                <label className="bold" htmlFor="name">
                  Email
                </label>
                <input
                  placeholder="Jeremiahss@Hotmail.com"
                  type="email"
                  className="form__input"
                  id="email"
                  value={email}
                  onChange={handleEmailInput}
                  required
                />
              </div>
            </div>
            <div className="contact__input">
              <label className="bold" htmlFor="name">
                Your message
              </label>
              <input
                type="textarea"
                placeholder="We have a few questions to ask you..."
                className="form__input"
                id="content"
                value={content}
                onChange={handleContentInput}
                required
              />
            </div>

            <ButtonPrimary
              bType={"submit"}
              content={"Send Message"}
              icon={<Plane />}
            />

            {/* <button type="submit" className="button__primary">
              Send Message
              <Plane />
            </button> */}

            {/* <Button
              type="submit"
              content={"Send Message"}
              icon={<Plane />}
              styling={"blend-bg icons__icon--inverse"}
            /> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
