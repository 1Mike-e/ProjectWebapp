import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { backendUrl } from "./constants";
import { useEffect, useState } from "react";

const AmbientGraph = () => {
  const [
    averageAmbientTemperatureGraphData,
    setAverageAmbientTemperatureGraphData,
  ] = useState([]);

  useEffect(() => {
    getAverageAmbientTemperatureGraphData().then((data) => {
      setAverageAmbientTemperatureGraphData(data);
    });
  }, []);

  async function getAverageAmbientTemperatureGraphData() {
    const response = await fetch(
      `${backendUrl}/average_ambient_temp_graph_data`
    );

    return response.json();
  }

  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={averageAmbientTemperatureGraphData}
      >
        <Line type="monotone" dataKey="average_ambient_temp" stroke="green" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </>
  );
};

export default AmbientGraph;

//"

// const data = [
//   {
//     temp: 20.9,
//     time: 11.5,
//   },
//   {
//     temp: 21.1,
//     time: 12.5,
//   },
//   {
//     temp: 19.3,
//     time: 13.5,
//   },
//   {
//     temp: 19.6,
//     time: 14.5,
//   },
//   {
//     temp: 20.3,
//     time: 15.5,
//   },
//   {
//     temp: 18.6,
//     time: 16.5,
//   },
// ];
