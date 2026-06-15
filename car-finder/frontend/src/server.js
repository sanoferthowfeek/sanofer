const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const cars = require("./cars");

app.get("/", (req, res) => {
  res.send("Car Finder API Running");
});

app.post("/recommend", (req, res) => {
  const { budget, fuelType, type, transmission } = req.body;

  const results = cars
    .filter(
      (car) =>
        car.price <= budget && car.fuelType === fuelType && car.type === type
    )
    .map((car) => ({
      ...car,
      score: car.safety * 10 + car.mileage + car.reviews * 10,
    }))
    .sort((a, b) => b.score - a.score);

  res.json(results);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
