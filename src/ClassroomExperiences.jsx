//@ts-nocheck
import React from "react";
import ceroMasInfinitoImage from "./assets/images/classroom-experiences/3.0.paseando por el 0+infinito.jpg";
import dibujandoFisicamente from "./assets/images/classroom-experiences/3.2.0.Dibujando físicamente.png";
import dibujandoSimboloArbol from "./assets/images/classroom-experiences/2.Ananda y Yacon pintando arbol.jpg";
import pensandoRobot from "./assets/images/classroom-experiences/3.2.1.Pensando el Robot.2.jpg";
import robotAlLado from "./assets/images/classroom-experiences/3.3.Robot al lado.jpg";
import controlandoRobot from "./assets/images/classroom-experiences/3.5.Controlando el Robot.jpg";
import bugRobot from "./assets/images/classroom-experiences/3.6.Bug robot.jpg";
import diploma from "./assets/images/classroom-experiences/1.Diploma.jpg";
import { useContext } from "react";

function ClassroomExperiences() {
  const styles = {
    text: {
      fontFamily: "Pastel Crayon",
    },
  };
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.text,
          fontSize: 80,
          flex: 1,
        }}
      >
        Experiencias en aula
      </div>
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        Les compartimos algunas experiencias en aula que hemos realizado con
        niños y niñas de distintas edades.
      </p>
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        ¿Tenés experiencias utilizando Representar que quieras compartir?
        Escribinos y las publicamos!
      </p>

      <h2
        style={{
          ...styles.text,
          fontSize: 25,
          flex: 1,
          width: "80%",
          textAlign: "left",
        }}
      >
        Verano 2023 en los latorios del pabellón 0+Infinito de la facultad de
        exactas de la UBA:
      </h2>
      <img src={ceroMasInfinitoImage} style={{ width: "80%" }} />
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        Blah blah blah blah! bla bla bla bla bla bla bla bla bla bla bla bla
        bla.
      </p>
      <img src={dibujandoFisicamente} style={{ width: "80%" }} />
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        Blah blah blah blah? Bla bla bla! bla bla bla bla bla bla bla bla bla
        bla.
      </p>
      <img src={dibujandoSimboloArbol} style={{ width: "80%" }} />
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        Blah blah blah blah bla bla bla bla bla bla bla bla bla bla bla bla bla.
      </p>
      <div>
        <img src={pensandoRobot} style={{ width: "50%" }} />
        <img src={robotAlLado} style={{ width: "38.6%" }} />
      </div>
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        Blah blah blah blah! bla bla bla bla bla bla bla bla bla bla bla bla
        bla.
      </p>
      <img src={controlandoRobot} style={{ width: "80%" }} />
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        BLAH! blah blah blah? bla bla bla bla bla bla bla bla bla bla bla bla
        bla.
      </p>
      <img src={bugRobot} style={{ width: "80%" }} />
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        Blah blah blah blah! bla bla bla bla bla bla bla bla bla bla bla bla
        bla.
      </p>
      <img src={diploma} style={{ width: "80%" }} />
      <p
        style={{
          ...styles.text,
          fontSize: 20,
          flex: 1,
          width: "80%",
        }}
      >
        Gracias a todos los que participaron!
      </p>
    </div>
  );
}

export default ClassroomExperiences;
