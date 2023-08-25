import { Route, Routes } from "react-router-dom";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./components/Spinner";

function App() {
  const [phones, setPhones] = useState([]);
  const [fetchingPhones, setFetchingPhones] = useState(true);

  const fetchAllPhones = () => {
    setTimeout(async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/phones");
        setPhones(response.data);
      } catch (error) {
        console.log(error);
      }
      setFetchingPhones(false);
    }, 1000);
  };

  useEffect(() => {
    fetchAllPhones();
  }, []);

  if (fetchingPhones) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar phones={phones} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phone-details/:id" element={<PhoneDetailsPage phones={phones} />} />
      </Routes>
    </>
  );
}

export default App;
