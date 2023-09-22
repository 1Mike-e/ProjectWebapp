import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { backendUrl } from "./constants";
import { useEffect, useState } from "react";

const InternalGraph = () => {
  const [
    averageInternalTemperatureGraphData,
    setAverageInternalTemperatureGraphData,
  ] = useState([]);

  useEffect(() => {
    getAverageInternalTemperatureGraphData().then((data) => {
      setAverageInternalTemperatureGraphData(data);
    });
  }, []);

  async function getAverageInternalTemperatureGraphData() {
    const response = await fetch(
      `${backendUrl}/average_internal_temp_graph_data`
    );

    return response.json();
  }

  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={averageInternalTemperatureGraphData}
      >
        <Line type="monotone" dataKey="average_internal_temp" stroke="green" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </>
  );
};

export default InternalGraph;
