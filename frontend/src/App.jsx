import { useEffect, useState } from "react";
import axios from "axios";
import TemperatureCard from "./components/TemperatureCard";

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTemperatureData = async () => {
    try {

      const response = await axios.get(
        "http://localhost:5000/temperature"
      );
      setData(response.data.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemperatureData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-6">

      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Centralized Temperature Monitoring System
      </h1>

      {
        loading ? (
          <div className="text-center text-white text-xl">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
              data.map((item) => (
                <TemperatureCard
                  key={item._id}
                  item={item}
                />
              ))
            }

          </div>
        )
      }

    </div>
  );
};

export default App;