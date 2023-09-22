import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
//import { backendUrl } from "./constants";
//import { useEffect, useState } from "react";

const Demand = () => {
  // const [totalPowerGraphData, setTotalPowerGraphData] = useState([]);

  // useEffect(() => {
  //   getTotalPowerGraphData().then((data) => {
  //     setTotalPowerGraphData(data);
  //   });
  // }, []);

  // async function getTotalPowerGraphData() {
  //   const response = await fetch(`${backendUrl}/total_power_graph_data`);

  //   return response.json();
  // }
  const data = [
    {
      power: 1058,
      time: 11.18,
      supply: 1110,
    },
    // {
    //   power: 1060,
    //   time: 12.18,
    //   supply: 1079,
    // },
    {
      power: 1061,
      time: 13.18,
      supply: 1089,
    },
    // {
    //   power: 1078,
    //   time: 14.18,
    //   supply: 1090,
    // },
    // {
    //   power: 1130,
    //   time: 15.18,
    //   supply: 1134,
    // },
    // {
    //   power: 1190,
    //   time: 16.18,
    //   supply: 1200,
    // },
    {
      power: 1184.64,
      time: 17.18,
      supply: 1190,
    },
    {
      power: 1200,
      time: 18.18,
      supply: 1300,
    },
    {
      power: 2050,
      time: 19.18,
      supply: 2060,
    },

    {
      power: 2001,
      time: 1.18,
      supply: 2141,
    },
    {
      power: 1770,
      time: 2.18,
      supply: 1776,
    },
    {
      power: 1844.3,
      time: 3.18,
      supply: 1910,
    },
    {
      power: 2112,
      time: 4.18,
      supply: 2264,
    },
    {
      power: 2050,
      time: 5.18,
      supply: 2089,
    },
  ];

  return (
    <>
      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="power" stroke="red" />
        <Line type="monotone" dataKey="supply" stroke="blue" />

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </>
  );
};
export default Demand;
