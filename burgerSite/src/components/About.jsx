import React from "react";
import BurgerAbout from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BurgerAbout})` }}></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, rem
          voluptas nesciunt soluta quam sapiente magni eos, in nobis optio nisi
          provident magnam cumque ad repellendus fuga tenetur architecto non.
          Enim voluptate dolor iure officia qui esse possimus recusandae quam
          hic. Consectetur tenetur, iste provident sunt fuga ipsam aspernatur
          nobis nulla repellat atque quaerat veniam quos? Quibusdam delectus
          ratione illo! Tempore consectetur inventore ex incidunt quos doloribus
          accusamus doloremque libero qui dolorum quidem, quasi omnis illum
          praesentium expedita, dolor veritatis voluptas, dolorem itaque eius!
          Numquam impedit corporis inventore molestias eaque! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Maxime, rem voluptas nesciunt
          soluta quam sapiente magni eos, in nobis optio nisi provident magnam
          cumque ad repellendus fuga tenetur architecto non. Enim voluptate
          dolor iure officia qui esse possimus recusandae quam hic. Consectetur
          tenetur, iste provident sunt fuga ipsam aspernatur nobis nulla
          repellat atque quaerat veniam quos? Quibusdam delectus ratione illo!
          Tempore consectetur inventore ex incidunt quos doloribus accusamus
          doloremque libero qui dolorum quidem, quasi omnis illum praesentium
          expedita, dolor veritatis voluptas, dolorem itaque eius! Numquam
          impedit corporis inventore molestias eaque!
        </p>
      </div>
    </div>
  );
}

export default About;
