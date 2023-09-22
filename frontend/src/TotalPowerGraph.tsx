import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { backendUrl } from "./constants";
import { useEffect, useState } from "react";

const PowerGraph = () => {
  const [totalPowerGraphData, setTotalPowerGraphData] = useState([]);

  useEffect(() => {
    getTotalPowerGraphData().then((data) => {
      setTotalPowerGraphData(data);
    });
  }, []);

  async function getTotalPowerGraphData() {
    const response = await fetch(`${backendUrl}/total_power_graph_data`);

    return response.json();
  }

  return (
    <>
      <LineChart width={500} height={300} data={totalPowerGraphData}>
        <Line type="monotone" dataKey="total_power" stroke="red" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </>
  );
};
export default PowerGraph;

// const data = [
//   {
//     power: 227.3,
//     time: 11.18,
//   },
//   {
//     power: 207.9,
//     time: 12.18,
//   },
//   {
//     power: 207.5,
//     time: 13.18,
//   },
//   {
//     power: 184.54,
//     time: 14.18,
//   },
//   {
//     power: 184.29,
//     time: 15.18,
//   },
//   {
//     power: 183.67,
//     time: 16.18,
//   },
//   {
//     power: 184.64,
//     time: 17.18,
//   },
//   {
//     power: 184.75,
//     time: 18.18,
//   },
//   {
//     power: 205.86,
//     time: 19.18,
//   },
//   {
//     power: 184.4,
//     time: 20.18,
//   },
//   {
//     power: 211.3,
//     time: 21.18,
//   },
//   {
//     power: 219.7,
//     time: 22.18,
//   },
//   {
//     power: 209.3,
//     time: 23.18,
//   },
//   {
//     power: 202.01,
//     time: 24.18,
//   },
//   {
//     power: 227.3,
//     time: 1.18,
//   },
//   {
//     power: 186.3,
//     time: 2.18,
//   },
//   {
//     power: 184.3,
//     time: 3.18,
//   },
//   {
//     power: 193.94,
//     time: 4.18,
//   },
//   {
//     power: 181.3,
//     time: 5.18,
//   },
// ];
