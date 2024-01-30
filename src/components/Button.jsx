//@ts-nocheck
import React from "react";

export default function Button(props) {
  const styles = {
    box: {
      backgroundColor: "#00F",
      color: "#FFF",
      borderRadius: 5,
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "20px",
    },
  };
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={{ ...styles.box, ...props.style }}
    >
      {props.children}
    </button>
  );
}
