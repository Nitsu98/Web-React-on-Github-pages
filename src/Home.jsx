//@ts-nocheck
import "./App.css";
import React from "react";
import "./style.css";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import hojaTextura from "./assets/images/hoja-blanca-texturizada.jpg";
import hojaCarton from "./assets/images/fondo-textura-carton-blanca.jpg";

function Home() {
  const navigate = useNavigate();
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      paddingTop: 100,
      paddingBottom: 100,
      width: "65%",
      height: "100%",
      minHeight: "30vw",
      backgroundImage: `url(${hojaTextura})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat-y",
    },
    text: {
      fontFamily: "Pastel Crayon",
    },
    cartonButton: {
      backgroundImage: `url(${hojaCarton})`,
      backgroundColor: `rgba(0, 0, 255, 0.7)`,
      backgroundBlendMode: "multiply",
      borderRadius: "20px 20px 20px 20px",
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.text,
          fontSize: 100,
          flex: 1,
        }}
      >
        Representar
      </div>
      <div
        style={{
          ...styles.text,
          fontSize: 15,
          flex: 1,
          width: "65%",
        }}
      >
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          //backgroundColor: "#F00",
        }}
      >
        <Button
          onClick={() => {
            alert("You clicked me!");
          }}
          style={{
            ...styles.cartonButton,
            ...styles.text,
            fontSize: 50,
            width: "50%",
            height: "100%",
            borderWidth: 0,
            borderBottomWidth: 5,
          }}
        >
          Probar online
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginTop: 20,
          //backgroundColor: "#F00",
        }}
      >
        <Button
          onClick={() => {
            navigate("/about");
          }}
          style={{
            ...styles.cartonButton,
            ...styles.text,
            fontSize: 20,
            borderRadius: "5px 5px 5px 5px",
            padding: "10px 10px 10px 10px",
            borderWidth: 0,
            borderBottomWidth: 3,
          }}
        >
          Sobre el proyecto
        </Button>
        <Button
          onClick={() => {
            navigate("/classroom-experiences");
          }}
          style={{
            ...styles.cartonButton,
            ...styles.text,
            fontSize: 20,
            borderRadius: "5px 5px 5px 5px",
            padding: "10px 10px 10px 10px",
            borderWidth: 0,
            borderBottomWidth: 3,
          }}
        >
          Experiencias en aula
        </Button>
        <Button
          onClick={() => {
            navigate("/news-blog");
          }}
          style={{
            ...styles.cartonButton,
            ...styles.text,
            fontSize: 20,
            borderRadius: "5px 5px 5px 5px",
            padding: "10px 10px 10px 10px",
            borderWidth: 0,
            borderBottomWidth: 3,
          }}
        >
          Blog de Novedades
        </Button>
      </div>
    </div>
  );
}

export default Home;
