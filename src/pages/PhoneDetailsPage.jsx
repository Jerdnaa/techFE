import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const PhoneDetailsPage = ({ phones }) => {
  const [details, setDetails] = useState(null);
  const [fetchingPhones, setFetchingPhones] = useState(true);

  const { id } = useParams();

  const fetchDetails = () => {
    setFetchingPhones(true);
    const phoneDetails = phones.find((phone) => phone.id === +id);
    setTimeout(() => {
      setDetails(phoneDetails);
      setFetchingPhones(false);
    }, 1000);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (fetchingPhones) {
    return (
      <div className="details-body">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="details-body">
      <div className="phone-container">
        <h2>{details.name}</h2>
        <h3>{details.manufacturer}</h3>
        <p style={{ textAlign: "center" }}>{details.description}</p>
        <p>Color: {details.color}</p>
        <p>Price: {details.price}€</p>
        <p>Screen: {details.screen}</p>
        <p>Processor: {details.processor}</p>
        <p>RAM: {details.ram}GB</p>
      </div>
    </div>
  );
};

export default PhoneDetailsPage;
