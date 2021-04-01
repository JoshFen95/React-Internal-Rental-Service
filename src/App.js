import Layout from "../src/components/Layout";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import dotenv from "dotenv";


let HOST

function App() {
  
  if (process.env.NODE_ENV === 'production') {
    const HOST = "https://fendev-rental.herokuapp.com"
  }

  if (process.env.NODE_ENV === 'dev') {
    const HOST = "http://localhost:8080"
  }
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState([]);
  const [carTyres, setCarTyres] = useState([]);
  // console.log(cars);
  

  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars();
      setCars(carsFromServer);
    };

    getCars();
  }, []);

  const fetchCars = async () => {
    const res = await fetch(`${HOST}/service/all`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const fetchCar = async (id) => {
    const res = await fetch(`${HOST}/service/get/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const viewCar = async (id) => {
    console.log("yoyoyoyo");
    console.log(id);
    const carFromServer = await fetchCar(id);
    const carTyresFromServer = carFromServer.tyres
    setCar(carFromServer);
    setCarTyres(carTyresFromServer);
  };

  // Complete Service
  const sendCompleteService = async (id) => {
    const res = await fetch(
      `${HOST}/service/completeservice/${id}`
    );
    console.log(res);
    const car = await res.json();
    console.log(car);
    setCar(car);
    if (!car.needService) {
      alert("Service completed");
    } else {
      alert("Service not completed");
    }
  };

  // Change tyres
  const sendTyreChange = async (id) => {
    const res = await fetch(
      `${HOST}/service/changetyres/${id}`
    );
    console.log(res);
    const car = await res.json();
    console.log(car);
    setCar(car);
    setCarTyres(car.tyres)
    if (car.tyreChangeCount === 0) {
      alert("Tyres changed");
    } else {
      alert("Tyres could not be changed");
    }
  };

  // Start Rental
  const sendStartRental = async (id) => {
    console.log("HHHEEEELLLOOO");
    const res = await fetch(`${HOST}/service/startrental/${id}`);
    console.log(res);
    const data = await res.json();
    console.log(data.car);
    setCar(data.car);
  };

  // End Rental
  const sendEndRental = async ( id, distanceTravelled) => {
    console.log("heyeye");
    console.log(distanceTravelled);
    console.log("oi");
  
    const res = await fetch(`${HOST}/service/endrental/${id}`, {
      headers: {'Content-Type': 'application/json'},

      method: 'PUT',
      body: distanceTravelled
    })

      console.log("beep");
      console.log(res);
      console.log("hehehy");
      const car = await res.json();
      console.log(car);
      setCar(car);
      setCarTyres(car.tyres)
  };

  return (
    <Router>
      <>
        <Layout
          cars={cars}
          car={car}
          carTyres={carTyres}
          onView={viewCar}
          completeService={sendCompleteService}
          completeTyreChange={sendTyreChange}
          startRental={sendStartRental}
          endRental={sendEndRental}
        />
        {/* <Route path='/about' component={About} /> */}
      </>
    </Router>
  );
}

export default App;
