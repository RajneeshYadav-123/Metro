const TemperatureCard = ({ item }) => {
  return (
    <div className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-700">
      
      <h2 className="text-xl font-bold text-white mb-4">
        Sensor Data
      </h2>

      <div className="space-y-2 text-gray-300">

        <p>
          🌡 Temperature:
          <span className="text-white font-semibold ml-2">
            {item.temperature} °C
          </span>
        </p>

        <p>
          💧 Humidity:
          <span className="text-white font-semibold ml-2">
            {item.humidity} %
          </span>
        </p>

        <p>
          🔥 Kelvin:
          <span className="text-white font-semibold ml-2">
            {item.kelvin} K
          </span>
        </p>

        <p>
          📏 Reaumur:
          <span className="text-white font-semibold ml-2">
            {item.reaumur} Re
          </span>
        </p>

        <p className="text-sm text-gray-400 mt-4">
          {new Date(item.createdAt).toLocaleString()}
        </p>

      </div>
    </div>
  );
};

export default TemperatureCard;