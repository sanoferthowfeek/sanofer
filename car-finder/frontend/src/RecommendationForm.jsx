import { useState } from "react";
import axios from "axios";
import RecommendationList from "./RecommendationList";

function RecommendationForm() {
  const [budget, setBudget] = useState("");
  const [fuelType, setFuelType] = useState("Petrol");
  const [type, setType] = useState("SUV");
  const [transmission, setTransmission] = useState("Automatic");

  const [cars, setCars] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/recommend", {
      budget: Number(budget),
      fuelType,
      type,
      transmission,
    });

    setCars(res.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <select
          className="form-control mb-3"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option>Petrol</option>
          <option>Diesel</option>
        </select>

        <select
          className="form-control mb-3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>SUV</option>
          <option>Sedan</option>
        </select>

        <select
          className="form-control mb-3"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <option>Automatic</option>
          <option>Manual</option>
        </select>

        <button className="btn btn-primary">Find Cars</button>
      </form>

      <RecommendationList cars={cars} />
    </>
  );
}

export default RecommendationForm;
