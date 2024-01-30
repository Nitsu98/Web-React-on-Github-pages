//@ts-nocheck
import "./App.css";
import React from "react";
import "./style.css";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import hojaCarton from "./assets/images/fondo-textura-carton-blanca.jpg";

const imageSmalltalkPath =
  "agustincico.github.io@master&files=[Representar.image]";

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
  };

  return (
    <>
      <div
        style={{
          height: "40vh",
          display: "flex",
          flexDirection: "column ",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="Text"
          style={{
            fontSize: "10vw",
          }}
        >
          Representar
        </div>
        <div
          className="Text"
          style={{
            fontSize: "2vw",
            width: "65%",
            textAlign: "center",
          }}
        >
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          width: "100%",
        }}
      >
        <Button
          className="Text"
          onClick={() => {
            window.location.href =
              "https://squeak.js.org/run/#url=https://cdn.jsdelivr.net/gh/agustincico/" +
              imageSmalltalkPath;
          }}
          style={{
            ...styles.cartonButton,
            backgroundColor: `rgba(0, 100, 255, 0.7)`,
            fontSize: "5vw",
            width: "50%",
            height: "25vh",
          }}
        >
          Probar online
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "30vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "90%",
            alignItems: "stretch",
            justifyContent: "space-around",
          }}
        >
          <Button
            className="Text"
            onClick={() => {
              navigate("/about");
            }}
            style={{
              ...styles.cartonButton,
              fontSize: "2vw",
              backgroundColor: `rgba(0, 200, 0, 0.7)`,
              padding: "10px 10px 10px 10px",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Sobre el proyecto
          </Button>
          <Button
            className="Text"
            onClick={() => {
              navigate("/contact-us");
            }}
            style={{
              ...styles.cartonButton,
              fontSize: "2vw",
              backgroundColor: `rgba(255, 0, 200, 0.7)`,
              padding: "10px 10px 10px 10px",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Hablá con nosotros
          </Button>
        </div>
        <Button
          className="Text"
          onClick={() => {
            navigate("/classroom-experiences");
          }}
          style={{
            ...styles.cartonButton,
            backgroundColor: `rgba(200, 200, 0, 0.7)`,
            fontSize: "3vw",
            height: "25vh",
            width: "30%",
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          Experiencias en aula
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "90%",
            alignItems: "stretch",
            justifyContent: "space-around",
          }}
        >
          <Button
            className="Text"
            onClick={() => {
              navigate("/news-blog");
            }}
            style={{
              ...styles.cartonButton,
              fontSize: "2vw",
              backgroundColor: `rgba(100, 0, 255, 0.7)`,
              padding: "10px 10px 10px 10px",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Blog de Novedades
          </Button>
          <Button
            className="Text"
            onClick={() => {
              navigate("/tutorials");
            }}
            style={{
              ...styles.cartonButton,
              fontSize: "2vw",
              backgroundColor: `rgba(200, 0, 0, 0.7)`,
              padding: "10px 10px 10px 10px",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Videotutoriales
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
