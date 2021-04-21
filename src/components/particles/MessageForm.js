import React from "react";
import emailjs from "emailjs-com";

const { REACT_APP_USER_ID, REACT_APP_TEMPLATE_ID } = process.env;

const onSubmit = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "gmail",
      `${REACT_APP_TEMPLATE_ID}`,
      e.target,
      `${REACT_APP_USER_ID}`
    )
    .then(
      (result) => {
        alert("Meddelande skickat. Jag återkommer snart! ", result.text);
      },
      (error) => {
        alert("Ett fel uppstod, försök igen.", error.text);
      }
    );
};

const MessageForm = () => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <p className="form__p">
        Ditt namn<span>*</span>
      </p>
      <input
        name="name"
        type="text"
        placeholder="namn &#8943;"
        className="form__input"
        required
      />
      <p className="form__p">
        Din e-post<span>*</span>
      </p>
      <input
        name="email"
        type="email"
        placeholder="exempel@epost.com &#8943;"
        className="form__input"
        required
      />
      <p className="form__p">
        Medellande<span>*</span>
      </p>
      <textarea
        name="message"
        type="text"
        placeholder="medellande &#8943;"
        className="form__input_message"
        required
      ></textarea>
      <button className="form__input_button">Send Message</button>
    </form>
  );
};

export default MessageForm;
