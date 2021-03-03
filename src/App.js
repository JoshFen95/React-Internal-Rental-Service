import Layout from "../src/components/Layout";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

function App() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState([]);
  // console.log(cars);

  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars();
      setCars(carsFromServer);
    };

    getCars();
  }, []);

  const fetchCars = async () => {
    const res = await fetch("http://localhost:8080/service/all");
    const data = await res.json();
    console.log(data);
    return data;
  };

  const fetchCar = async (id) => {
    const res = await fetch(`http://localhost:8080/service/get/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const viewCar = async (id) => {
    console.log("yoyoyoyo");
    console.log(id);
    const carFromServer = await fetchCar(id);
    setCar(carFromServer);
  };

  // Complete Service
  const sendCompleteService = async (id) => {
    const res = await fetch(
      `http://localhost:8080/service/completeservice/${id}`
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    setCar(data);
  };

  // Start Rental
  const sendStartRental = async (id) => {
    console.log("HHHEEEELLLOOO");
    const res = await fetch(`http://localhost:8080/service/startrental/${id}`);
    console.log(res);
    const data = await res.json();
    console.log(data.message);
    setCar(data.car);
  };

  // End Rental
  const sendEndRental = async ( id, distancedTravelled) => {
    console.log("heyeye");
    console.log(distancedTravelled);
    console.log("oi");
    const res = await fetch(`http://localhost:8080/service/endrental/${id}`, {
      // headers: {'Content-Type': 'application/json'},

      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      method: 'PUT',
      // body: JSON.parse(distancedTravelled),
      body: {"distancedTravelled" : JSON.stringify(5000)},
    })

    // axios
    //   .put(`http://localhost:8080/service/endrental/${id}`, {distancedTravelled})
    //   .then(async (res) => {
    //     console.log("beep");
    //     console.log(res);
    //     console.log("hehehy");
    //     const data = await res.json();
    //     console.log(data.message);
    //     setCar(data.car);

    //   });

      console.log("beep");
      console.log(res);
      console.log("hehehy");
      const data = await res.json();
      console.log(data.message);
      setCar(data.car);
  };

  return (
    <Router>
      <>
        <Layout
          cars={cars}
          car={car}
          onView={viewCar}
          completeService={sendCompleteService}
          startRental={sendStartRental}
          endRental={sendEndRental}
        />
        {/* <Route path='/about' component={About} /> */}
      </>
    </Router>
  );
}

export default App;
