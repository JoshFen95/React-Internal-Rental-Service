import { Button } from "@material-ui/core";
import carStyles from "../styles/Car.css";
import Car from "./Car";

// export const CarList = ({ cars }) => {
//   return (
//     <div className={"grid"}>
//       {cars.cars.map((car) => (
//           <Car car = {car}/>
//       ))}
//     </div>
//   );
// };

const CarList = ({ cars, onView}) => {
    console.log(cars);

  return (
    <>
      <p className={"description"}>
        Please select a car you would like to rent
      </p>
      <div className={"grid"}>
        {cars.map((car) => (
          // <p> {car.model}</p>
          <Car key={car.id} car={car} onView={onView} />
        ))}
      </div>
    </>
  );
};

export default CarList;
