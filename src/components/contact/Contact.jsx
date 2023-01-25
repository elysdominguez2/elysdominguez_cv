import "./contact.css";
import { FaRegEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/selectors";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_skhwfqc",
      "template_vrmagrp",
      form.current,
      "kEmhGHUFtqd_iYgjE"
    );
    e.target.reset();
  };

  const theme = useSelector(selectTheme);

  return (
    <section className={theme} id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <article className="contact_regard">
          <h4>Thanks for stopping by</h4>
          <p className="thanks">
            I am currently looking to join a new team of creative developers.{" "}
            <br />
            If you think we might be a good fit, send me an email or fill the
            form.
          </p>

          <a
            href="mailto:elysdominguez2@gmail.com"
            target={"_blank"}
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaRegEnvelope className="envelope_icon" />
            Send me an email
          </a>
        </article>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" required></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
