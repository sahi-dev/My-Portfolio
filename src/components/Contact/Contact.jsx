// import React, { useContext, useRef, useState } from "react";
import React, { useContext, useRef } from "react";
import "./Contact.css";
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  // const [done, setDone] = useState(false)
  const [state, handleSubmit] = useForm('mrgwebkr');
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_2mu5xtl",
  //       "template_m5udu2c",
  //       form.current,
  //       "VLwg1ltOWvnCYAiK_"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         form.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // function Contact() {
  //   const [state, handleSubmit] = useForm('mrgwebkr');
  
  //   if (state.succeeded) {
  //     return <p>Thanks for your submission!</p>;
  //   }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        {/* <form action="https://formspree.io/f/mrgwebkr" method='POST' ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" className="user"  placeholder="Name" autoComplete="off" required />
          <input type="email" name="user_email" className="user" placeholder="Email" autoComplete="off" required />
          <textarea name="message" className="user" placeholder="Message" autoComplete="off" required />
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form> */}
        <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name="user_name" className="user" placeholder="Name" autoComplete="off" required />
        <ValidationError prefix="Name" field="user_name" errors={state.errors} />

        <input type="email" name="user_email" className="user" placeholder="Email" autoComplete="off" required />
        <ValidationError prefix="Email" field="user_email" errors={state.errors} />

        <textarea name="message" className="user" placeholder="Message" autoComplete="off" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <input type="submit" value="Send" className="button" disabled={state.submitting} />
        <span>{state.succeeded && "Thanks for Contacting me"}</span>

        <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>

      </div>
    </div>
  );
};

export default Contact;
