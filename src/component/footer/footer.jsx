import React from "react";
import "./footer.css";

export default function Foo() {
  return (
    <>
      <section className="contact">
      <fieldset>
      <legend><h3>Contact</h3></legend>
        <ul>
          <li>
            <img src="/asset/instagram (1).png" alt="instagram icon" />
            <a href="instagram">instagram</a>
          </li>
          <li>
            <img src="/asset/twitter (1).png" alt="X icon" />
            <a href="instagram">X</a>
          </li>
          <li>
            <img src="/asset/email (1).png" alt="instagram icon" />
            <a href="instagram">Email</a>
          </li>
        </ul>
        </fieldset>
      </section>
      <section className="service">
        
      <fieldset>
      <legend><h3>Service</h3></legend>
        <p>
          -Lorem ipsum dolor sit amet consectetur.
        </p>
        <p>
          -Lorem ipsum dolor sit amet consectetur.
        </p>
        <p>
          -Lorem ipsum dolor sit amet consectetur.
        </p>
        </fieldset>
      </section>
    </>
  );
}
