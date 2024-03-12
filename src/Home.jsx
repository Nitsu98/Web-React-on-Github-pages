//@ts-nocheck
import "./App.css";
import "./Home.css";
import React from "react";
import "./style.css";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import hojaCarton from "./assets/images/fondo-textura-carton-blanca.jpg";

const imageSmalltalkPath = "Representar.image";

function Home() {
  const navigate = useNavigate();

  const styles = {
    cartonButton: {
      backgroundImage: `url(${hojaCarton})`,
      backgroundBlendMode: "multiply",
      borderRadius: "20px 20px 20px 20px",
      borderWidth: 0,
      borderBottomWidth: "1vh",
      borderColor: "grey",
    },
    header: {
      height: "40vh",
      display: "flex",
      flexDirection: "column ",
      alignItems: "center",
      justifyContent: "center",
    },
    mainTitle: {
      fontSize: "10vw",
    },
    introduction: {
      fontSize: "2vw",
      width: "65%",
      textAlign: "center",
    },
    rowContainer1: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "30vh",
      width: "100%",
    },
    rowContainer2: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: "30vh",
      width: "100%",
    },
    columnContainer: {
      display: "flex",
      flexDirection: "column",
      height: "90%",
      alignItems: "stretch",
      justifyContent: "space-around",
    },
    tryOnlineButton: {
      backgroundColor: `rgba(0, 100, 255, 0.7)`,
      fontSize: "5vw",
      width: "50%",
      height: "25vh",
    },

    tinyButton: {
      fontSize: "2vw",
      padding: "10px 10px 10px 10px",
      marginLeft: 5,
      marginRight: 5,
    },

    middleButton: {
      fontSize: "3vw",
      height: "25vh",
      width: "30%",
      marginLeft: 5,
      marginRight: 5,
    },
  };

  return (
    <>
      <div style={styles.header}>
        <div className="Text" style={styles.mainTitle}>
          Representar
        </div>
        <div className="Text" style={styles.introduction}>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah
        </div>
      </div>
      <div style={styles.rowContainer1}>
        <Button
          className="Text CartonButton TryOnlineButton"
          onClick={() => {
            window.location.href =
              "https://squeak.js.org/run/#image=https://raw.githubusercontent.com/agustincico/agustincico.github.io/master/" +
              imageSmalltalkPath;
          }}
        >
          Probar online
        </Button>
      </div>
      <div style={styles.rowContainer2}>
        {/* <div style={styles.columnContainer}>
          <Button
            className="Text CartonButton"
            onClick={() => {
              navigate("/about");
            }}
            style={{
              ...styles.tinyButton,
              backgroundColor: `rgba(0, 200, 0, 0.7)`,
            }}
          >
            Sobre el proyecto
          </Button>
          <Button
            className="Text CartonButton"
            onClick={() => {
              navigate("/contact-us");
            }}
            style={{
              ...styles.tinyButton,
              backgroundColor: `rgba(255, 0, 200, 0.7)`,
            }}
          >
            Hablá con nosotros
          </Button>
        </div> */}
        <Button
          className="Text CartonButton"
          onClick={() => {
            navigate("/classroom-experiences");
          }}
          style={{
            ...styles.middleButton,
            backgroundColor: `rgba(200, 200, 0, 0.7)`,
          }}
        >
          Experiencias en aula
        </Button>
        {/* <div style={styles.columnContainer}>
          <Button
            className="Text CartonButton"
            onClick={() => {
              navigate("/news-blog");
            }}
            style={{
              ...styles.tinyButton,
              backgroundColor: `rgba(100, 0, 255, 0.7)`,
            }}
          >
            Blog de Novedades
          </Button>
          <Button
            className="Text CartonButton"
            onClick={() => {
              navigate("/tutorials");
            }}
            style={{
              ...styles.tinyButton,
              backgroundColor: `rgba(200, 0, 0, 0.7)`,
            }}
          >
            Videotutoriales
          </Button>
        </div> */}
      </div>
    </>
  );
}

export default Home;
