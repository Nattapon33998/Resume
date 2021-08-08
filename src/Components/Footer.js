import React from "react";
import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    <div>
      <h3>
        Footer
        {
          <Typewriter
            options={{
              strings: ["Hello", "World"],
              pauseFor: 2000,
              autoStart: true,
              loop: true,
            }}
          />
        }
      </h3>
      <Typewriter
        options={{
          strings: ["Hello", "World"],
          pauseFor: 2000,
          autoStart: true,
          loop: true,
        }}
        // onInit={(typewriter) => {
        //   typewriter.typeString("Nattapon").pauseFor(2000).deleteAll().start();
        // }}
      />
    </div>
  );
};

export default Footer;
