import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { backendUrl } from "./constants";
import PowerGraph from "./TotalPowerGraph";
import AmbientGraph from "./AmbientTemGraph";
import InternalGraph from "./InternalTemGraph";
import Demand from "./demandGraph";

const ControlCenter = () => {
  const [averageAmbientTemperature, setAverageAmbientTemperature] =
    useState("");
  const [averageInternalTemperature, setAverageInternalTemperature] =
    useState("");
  const [totalPowerConsumption, setTotalPowerConsumption] = useState("");

  useEffect(() => {
    getAverageAmbientTemperature().then((data) => {
      setAverageAmbientTemperature(data.average_ambient_temp);
    });
    getAverageInternalTemperature().then((data) => {
      setAverageInternalTemperature(data.average_internal_temp);
    });
    getTotalPowerConsumption().then((data) => {
      setTotalPowerConsumption(data.total_power_consumption);
    });
  }, []);

  async function getAverageAmbientTemperature() {
    const response = await fetch(`${backendUrl}/average_ambient_temp`);

    return response.json();
  }
  async function getAverageInternalTemperature() {
    const response = await fetch(`${backendUrl}/average_internal_temp`);

    return response.json();
  }
  async function getTotalPowerConsumption() {
    const response = await fetch(`${backendUrl}/total_power_consumption`);

    return response.json();
  }
  const [inputData, setInputData] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (event: ChangeEvent) => {
    setInputData((event.target as HTMLInputElement)?.value);
  };

  const handleSendClick = (serverURL: string) => {
    const requestData = {
      data: inputData,
    };

    fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setResponseData(responseData);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-teal-950 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-white text-2xl font-bold">Control Center</h1>
            <div className="space-x-4">
              <a href="#" className="text-white">
                About
              </a>
              <a href="#" className="text-white">
                Contact Us
              </a>
            </div>
          </div>
        </header>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold">
                Total Power of Refrigerating Loads
              </h2>
              <p className="text-2xl font-bold">
                {Math.round(Number(totalPowerConsumption) * 100) / 100}W
              </p>
              <div className="mt-4">
                <div className="bg-gray-200 h-100 w">
                  <PowerGraph />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 text-right">
              <h2 className="text-lg font-bold">Demand</h2>
              <p className="text-2xl font-bold">1070.875W</p>
              <div className="mt-4">
                <div className="bg-gray-200 h-110">
                  <Demand />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 text-right">
              <h2 className="text-lg font-bold">
                Average Internal Temperature
              </h2>
              <p className="text-2xl font-bold">
                {Math.round(Number(averageInternalTemperature) * 1000) / 1000}°C
              </p>
              <div className="mt-4">
                <div className="bg-gray-200 h-100">
                  <InternalGraph />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 text-right">
              <h2 className="text-lg font-bold">Average Ambient Temperature</h2>
              <p className="text-2xl font-bold">
                {Math.round(Number(averageAmbientTemperature) * 1000) / 1000}°C
              </p>
              <div className="mt-4">
                <div className="bg-gray-200 h-110">
                  <AmbientGraph />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold">URL for plug Control</h2>
              <input
                type="text"
                value={inputData}
                onChange={handleInputChange}
                placeholder="Enter URL"
                className="border border-gray-300 p-2 rounded mt-2"
              />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() =>
                handleSendClick(
                  "https://group3-backend.onrender.com/turn_plug_off"
                )
              }
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Stop DSP
            </button>
            {responseData && (
              <div>
                <p>Response from server:</p>
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
              </div>
            )}
            <button
              onClick={() =>
                handleSendClick(
                  "https://group3-backend.onrender.com/turn_plug_on"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Activate DSP
            </button>
            {responseData && (
              <div>
                <p>Response from server:</p>
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlCenter;
