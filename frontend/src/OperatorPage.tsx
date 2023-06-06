import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

const ControlCenter = () => {
  const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
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
            <h2 className="text-lg font-bold">Total Power of Refrigerating Loads</h2>
            <p className="text-2xl font-bold">500W</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-bold">Load to be Taken Off</h2>
            <input type="text" className="border border-gray-300 p-2 rounded mt-2" />
          </div>

          <div className="bg-white rounded-lg p-4 text-right">
            <h2 className="text-lg font-bold">Average Internal Temperature</h2>
            <p className="text-2xl font-bold">5°C</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 text-right">
            <h2 className="text-lg font-bold">Average Ambient Temperature</h2>
            <p className="text-2xl font-bold">25°C</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Close Relay
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Open Relay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlCenter;
