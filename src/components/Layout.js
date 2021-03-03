import Nav from "./Nav";
// import Meta from './Meta'
import Header from "./Header";
import CarList from "./CarList";
import BigCar from "./BigCar";
import About from "./About";
import { Route } from "react-router-dom";
import styles from "../styles/Layout.css";

const Layout = ({ cars, car, onView, completeService, startRental, endRental }) => {
  console.log(cars);
  return (
    <>
      <Nav />
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            <div className={"container"}>
              <main className={"main"}>
                <Header />
                <CarList cars={cars} onView={onView} />
              </main>
            </div>
          </>
        )}
      />
      <Route
        path="/car"
        render={(props) => (
          <>
            <div className={"container"}>
              <main className={"main"}>
                <Header />
                <BigCar car={car} onView={onView} completeService={completeService} startRental={startRental} endRental={endRental} />
              </main>
            </div>
          </>
        )}
      />
      <Route path="/about" component={About} />
    </>
  );
};

export default Layout;
