import HomeButton from "../../components/HomeButton/HomeButton";
import Map from "../../components/Map/Map";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LocalizationDetail from "../../components/LocalizationDetail/LocalizationDetail";
import "./DetailPage.css";

function DetailPage() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  function handleDefault(message) {
    toast(message);
  }

  console.log(import.meta.env.VITE_GOOGLE_API_KEY)

  function getCoordinates(cep) {
    try {
      fetch(
        `https://maps.google.com/maps/api/geocode/json?address=${cep}&sensor=false&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
      )
        .then((resp) => resp.json())
        .then(function (data) {
          if (data.status === "OK") {
            data.results.map((result) => {
              setLatitude(result.geometry.location.lat);
              setLongitude(result.geometry.location.lng);
              setAddress(result.formatted_address);
            });
          } else {
            const message = "ZIP CODE NOT FOUND";
            handleDefault(message);
            navigate("/");
            throw message;
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoordinates(localStorage.getItem("cep"));
  }, []);

  return (
    <div className="layout__Container">
      <HomeButton />
      <Map latitude={latitude} longitude={longitude} />
      <LocalizationDetail address={address} />
    </div>
  );
}

export default DetailPage;
