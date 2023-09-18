import { useEffect, useState } from "react";
import { getLocationById } from "./services/getLocationById";
import { getRandomNumber } from "./utils/getRandomNumber";
import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";
import ResidentList from "./components/ResidentList/ResidentList";
import Searcher from "./components/Searcher/Searcher";
import Image from "./assets/bkg_img.svg";
import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [location, setLocation] = useState(null);
  async function loadLocation(id) {
    const locationInfo = await getLocationById(id);
    setLocation(locationInfo);
  }

  useEffect(() => {
    const random = getRandomNumber(1, 126);
    loadLocation(random);
  }, []);

  async function handleSubmit(id) {
    let locationData;
    if (!id) {
      const randomId = getRandomNumber(1, 126);
      locationData = await getLocationById(randomId);
    } else {
      locationData = await getLocationById(id);
    }
    setLocation(locationData);
  }

  return (
    <div className="main_app_cont">
      <h1 className="title_cont">
        <img src={Image} alt="" />
        <img src={Logo} alt="" />
      </h1>

      <Searcher onSubmit={handleSubmit} />

      {location ? <Location location={location} /> : <Loader />}

      <h2>Residents</h2>

      {location ? (
        <ResidentList residents={location?.residents} />
      ) : (
        <p>Loading residents...</p>
      )}
    </div>
  );
}
export default App;
