import React from "react";
import "../styles.css";

function ContactUs() {
  return (
    <div>
      <h1>Get in touch!</h1>
      <form
        action="https://formsubmit.co/91a648979bd7c79f68a38baba2337c4d"
        method="POST"
        id="contact-form"
        class="contact-us"
      >
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />
        {/* Disable captcha  */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="http://katenga-env.eba-i9t2gmux.us-west-1.elasticbeanstalk.com/"
        />
        <div id="form-group">
          <input
            id="from_name"
            name="user_name"
            class="c-input"
            type="text"
            placeholder="name"
            required
          />
          <input
            id="from_email"
            name="user_email"
            class="c-input"
            type="email"
            placeholder="email"
            required
          />
          <textarea
            id="message"
            name="message"
            class="contact-msg"
            placeholder="Type your message..."
            cols="33"
            rows="10"
          ></textarea>
        </div>
        <button class="submit-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
