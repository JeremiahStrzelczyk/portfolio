import { useState } from "react";
import { ButtonPrimary } from "../components/Buttons";
import { Plane } from "../components/Icons";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    content: "",
  });

  const { name, email, content } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Thank you for the note"))
      .catch((error) => alert(error));

    setFormState({ name: "", email: "", content: "" });
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
          <form
            // method="POST"
            onSubmit={handleSubmit}
            className="form"
            // name="contact"
          >
            <input type="hidden" name="form-name" value="contact" />
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
                  name="name"
                  className="form__input"
                  id="name"
                  value={name}
                  onChange={handleChange}
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
                  name="email"
                  type="email"
                  className="form__input"
                  id="email"
                  value={email}
                  onChange={handleChange}
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
                name="content"
                rows="5"
                wrap="hard"
                maxLength="300"
                placeholder="Please enter your message here"
                className="form__input"
                id="content"
                value={content}
                onChange={handleChange}
                required
              />
            </div>

            {/*********************
             * Buttons
             ****************** */}
            <ButtonPrimary
              bType={"submit"}
              content={"Send Message"}
              link={"#contact"}
              icon=<Plane />
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
