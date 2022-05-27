import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { GrMapLocation } from "react-icons/gr";
import styled from 'styled-components'

const Location = styled(GrMapLocation)`
    filter: invert(1);
`

const Home = () => {
  const navigate = useNavigate();
  const [cep, setCep] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("cep", cep);
    navigate("/map");
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setCep(e.target.value.replace(/\D/,''));
  };

  return (
    <div className="form__Wrapper">
      <div className="icon__Wrapper">
        <Location size={80} />
        <div className="page__Title">GEOLOCATION BY ZIPCODE</div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cep"></label>
        <input
          type="text"
          name="cep"
          id="cep"
          value={cep}
          onChange={onInputChange}
          placeholder={"Insira o CEP"}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Home;
