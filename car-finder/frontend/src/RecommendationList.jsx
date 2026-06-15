function RecommendationList({ cars }) {
  return (
    <div className="mt-4">
      {cars.map((car) => (
        <div key={car.id} className="card p-3 mb-3">
          <h4>
            {car.make} {car.model}
          </h4>

          <p>Price: ₹{car.price}</p>

          <p>Mileage: {car.mileage} kmpl</p>

          <p>Safety: {car.safety}/5</p>

          <p>Score: {car.score}</p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationList;
