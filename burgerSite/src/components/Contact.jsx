import React from "react";
import ContactBurger from "../assets/banner.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactBurger})` }}></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" name="name" placeholder="Ad Soyad" />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Lütfen mesajınızı giriniz..."></textarea>
          <button>GÖNDER</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
