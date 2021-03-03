import carStyles from "../styles/Car.css";
import {Link} from 'react-router-dom';
// import { Button } from "@material-ui/core";

export const Car = ({ car , onView}) => {
  return (
      <Link to={`/car`} className={"card"} onClick={() => {
          onView(car.id)
      }}>
        <h3>{car.model} &rarr;</h3>
        <p>{car.year}</p>
        <img src={car.carImage} alt="Car"></img>
      </Link>
  );
};

export default Car;