import { useState } from "react";
import { ButtonPrimary } from "../components/Buttons";
import { Plane } from "../components/Icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleContentInput = (e) => setContent(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setContent("");
  };
  return (
    <section id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="even-columns contact__stackColumns">
        <div className="column">
          <h3>Get in touch.</h3>
          <p>
            Thank you for taking the time to review my portfolio. I am excited
            about the opportunity to contribute my skills to a dynamic team as a
            full stack developer. I am always open to collaborating on exciting
            projects and exploring new opportunities.
          </p>
        </div>

        {/****************************
         * FORM
         ************************** */}
        <div className="column">
          <form onSubmit={handleSubmit} className="form">
            <div className="contact__NameEmail">
              {/*********************
               * Name
               ****************** */}
              <div className="contact__input">
                <label className="bold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="name"
                  value={name}
                  onChange={handleNameInput}
                  required
                />
              </div>

              {/*********************
               * Email
               ****************** */}
              <div className="contact__input">
                <label className="bold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form__input"
                  id="email"
                  value={email}
                  onChange={handleEmailInput}
                  required
                />
              </div>
            </div>

            {/*********************
             * Message
             ****************** */}
            <div className="contact__input">
              <label className="bold" htmlFor="textarea">
                Your message
              </label>
              <textarea
                rows="5"
                wrap="hard"
                maxLength="300"
                placeholder="We have a few questions to ask you..."
                className="form__input"
                id="content"
                value={content}
                onChange={handleContentInput}
                required
              />
            </div>

            {/*********************
             * Buttons
             ****************** */}
            <ButtonPrimary
              bType={"submit"}
              content={"Send Message"}
              icon={<Plane />}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
