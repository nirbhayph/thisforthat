//This script is for the particles background effect and for setting its props.
import React from "react";
import Particles from "react-particles-js";
import "./../css/particle-background.css";

const ParticlesBackground = () => {
  return (
    <Particles
      className="particles-display"
      params={{
        particles: {
          number: {
            value: 50
          },
          size: {
            value: 3
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
