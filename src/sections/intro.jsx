import React from "react";

export const Intro = () => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        height: "100vh",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "35%",
            marginLeft: "10%",
          }}
        >
          <h1
            style={{
              fontSize: "5rem",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
            }}
          >
            Hello, World!
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10%",
            marginLeft: "10%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontFamily: "Poppins",
            }}
          >
            Anza Qadir
          </h2>
          <h2
            style={{
              fontSize: "3rem",
              fontFamily: "Poppins",
            }}
          >
            Software Engineer
          </h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100%",
            border: "5px solid #fff",
            overflow: "hidden",
            width: "60%",
            height: "60%",
          }}
        >
          <img src="anza.jpg" alt="Anza Qadir" width={"100%"} />
        </div>
      </div>
    </div>
  );
};
