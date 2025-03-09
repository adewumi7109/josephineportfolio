import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ percentage, icon, label }) => {
  return (
    <div style={{ width: "120px", textAlign: "center", position: "relative" }}>
      {/* Circular Progress Bar */}
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: "#1100FD", // Progress bar color
          trailColor: "#ddd",
          strokeLinecap: "round",
        })}
      />

      {/* Centered Image */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40px",
          height: "40px",
        }}
      >
        <img
          src={icon}
          alt={label}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Label Below */}
      <p style={{ marginTop: "10px", fontWeight: "700",  color: '#959595', textWrap: 'nowrap' }}>{label}</p>
    </div>
  );
};

export default ProgressCircle;
