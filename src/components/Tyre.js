import React from "react";

export const Tyre = (tyre) => {
  console.log(tyre);
  return (
    <div classname={"tyres"}>
      <p> Tyre ID: {tyre.tyre.id}</p>
      <p style={{ textTransform: "capitalize" }}>Tyre Make: {tyre.tyre.make}</p>
      {tyre.tyre.milesTillChange <= 0 ? (
        <p>
          Miles Till Change:{" "}
          <span style={{ color: "orange" }}>{tyre.tyre.milesTillChange}</span>{" "}
        </p>
      ) : (
        <p>
          Miles Till Change:{" "}
          <span style={{ color: "#32CD32" }}>{tyre.tyre.milesTillChange}</span>{" "}
        </p>
      )}
      <p>----------------------------</p>
    </div>
  );
};

export default Tyre;
