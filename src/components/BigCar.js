import carStyles from "../styles/Car.css";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import {useState} from "react"



export const BigCar = ({ car, onView, completeService, startRental, endRental }) => {
  console.log(car);
  const [miles, setMiles] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if(!miles) {
      alert("Please enter the miles the car has travelled")
      return;
    }
    const milesInt = parseInt(miles, 10);
    endRental(car.id, milesInt)
    setMiles("")
  }

  return (
    <>
      <p className={"description"}>Here is the vehicle's current status:</p>
      <div className={"bigCard"}>
        <h3>{car.model} &rarr;</h3>
        <p>Year: {car.year}</p>
        <p>Current mileage: {car.mileage}</p>
        {car.isAvailableToHire === true ? (
          <p>
            Availability Status:{" "}
            <span style={{ color: "#32CD32" }}>Available</span>{" "}
          </p>
        ) : (
          <p>
            Availability Status:{" "}
            <span style={{ color: "orange" }}>Not Available</span>{" "}
          </p>
        )}
        {car.needService === true ? (
          <p>
            Service status:{" "}
            <span style={{ color: "orange" }}>Service is required</span>{" "}
          </p>
        ) : (
          <p>
            Service status:{" "}
            <span style={{ color: "#32CD32" }}>Service is not required</span>{" "}
          </p>
        )}
        <p>Miles until serivce is required: {car.milesTillService}</p>
        <p>Tyres needed ------</p>
        <img src={car.carImage} alt="Car"></img>
        <div></div>
        {car.isAvailableToHire === false && car.currentlyHired === true ? (
            <form onSubmit={onSubmit}>
              <input placeholder="Miles Travelled" onChange={(e) => setMiles(e.target.value)}/>
              <Button variant="contained" type="submit" style={{ backgroundColor: "orange" }}>
                End Hire
              </Button>
            </form>
        ) : car.isAvailableToHire === false && car.currentlyHired === false ? (
          ""
        ) : (
          <Button
            variant="contained"
            style={{ backgroundColor: "#32CD32" }}
            onClick={() => {
              startRental(car.id);
            }}
          >
            Hire Vehicle
          </Button>
        )}
        {car.needService === true ? (
          <Button
            variant="contained"
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              completeService(car.id);
            }}
          >
            Complete Service
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              completeService(car.id);
            }}
          >
            Complete Service{" "}
          </Button>
        )}
        <Button variant="contained">Change Tyres</Button>
      </div>
    </>
  );
};

export default BigCar;
